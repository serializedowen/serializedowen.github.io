---
date: '2021-03-23'
title: 'Concurrency in Golang'
category: 'Golang'
---

## goroutine

> golang 多线程操作和 Java 等语言需要实例化 Thread 不太相同。而是采用了轻量化的 goroutine 来实现：

```golang
go func() {}()
```

语法上很像 JavaScript 中的 IIFE，直接定义一个匿名函数并执行。

也可以这样：

```golang
function test(str string) {
    fmt.Println(str)
}
go test('111')
```

被 go 修饰的方法调用会开启一个新的线程来并发执行。

示例：

```
package main

import (
    "fmt"
    "time"
)

func f(from string) {
    for i := 0; i < 3; i++ {
        fmt.Println(from, ":", i)
    }
}

func main() {

    f("direct")

    go f("goroutine")

    go func(msg string) {
        fmt.Println(msg)
    }("going")

    time.Sleep(time.Second)
    fmt.Println("done")
}
```

输出：

```sh
$ go run goroutines.go
direct : 0
direct : 1
direct : 2
goroutine : 0
going
goroutine : 1
goroutine : 2
done
```

上面只是简单介绍了一下怎么开启多线程，最重要的功能还是没有提到，线程之间要怎么通信呢？那就需要 golang 特有的 chan(channel)来发挥威力了

## channel

#### 定义：

> channel 是连接多个 goroutine 的管道，你可以往管道里发送数据，并在另一个 goroutine 中读取并消费这些值

语法如下:

```golang
test := make(chan string)
```

我们创建了一个 string 的 channel 并把它赋值给了 test

接下来使用他，我们需要`<-`二元操作符，如果这时候 channel 在左边，`test <- val` 则表示往 channel 中输入一个值，反之如`val <- test`（val 可省略）则表示从 channel 中读取一个值

> 默认情况下 channel 是无缓冲区的，也就是说只有在有 goroutine 在等待从 channel 中消费数据的时候你才能往里面写入数据。
> 例子：

```golang
t := make(chan string)
//代码会报错   fatal error: all goroutines are asleep - deadlock!
t <- "1"
```

如果你想创建一个有缓冲区的 channel 使用

```golang
test := make(chan string, bufferSize)
```

例子：使用 chan 来模拟 Lock

```golang

func doSomething() {
    fmt.Println("work")
}
lock := make(chan bool, 1)

go func(){
    doSomething()
    time.Sleep(time.Second)
    doSomething()
    lock <- true
}()

<- lock
fmt.Println('done')

// 在这个示例中，同步的done打印会在打印两次work之后才执行

```

## WaitGroup

如果你想要监听多个 goroutine 的完成情况，就我们现在已经学过的知识，你可能会第一时间想到类似如下的代码:

```
func main() {
    c := make(chan bool, 100)
    for i := 0; i < 100; i++ {
        go func(i int) {
            fmt.Println(i)
            c <- true
        }(i)
    }

    for i := 0; i < 100; i++ {
        <-c
    }
}
```

他能完成我们的任务，但是看起来显得啰嗦，也不直观。

golang 标准库中其实已经为我们提供了处理此类情况的标准做法，那就是`sync.WaitGroup`

WaitGroup 有三个主要方法：

- Add(): 计数+1
- Done(): 计数-1
- Wait(): 阻塞当前线程直到计数器归零

示例：

```golang
package main

import (
    "fmt"
    "sync"
    "time"
)

func worker(id int, wg *sync.WaitGroup) {

    defer wg.Done()

    fmt.Printf("Worker %d starting\n", id)

    time.Sleep(time.Second)
    fmt.Printf("Worker %d done\n", id)
}

func main() {

    var wg sync.WaitGroup

    for i := 1; i <= 5; i++ {
        wg.Add(1)
        go worker(i, &wg)
    }

    wg.Wait()
}
```

> 特别注意：WaitGroup 不是引用类型，因此在 goroutine 中操作，必须传入 WaitGroup 的指针，而不是 WaitGroup 实例本身。

## Select 关键字

同时消费多个 channel 中的数据

```
package main

import (
    "fmt"
    "time"
)

func main() {

    c1 := make(chan string)
    c2 := make(chan string)

    go func() {
        time.Sleep(1 * time.Second)
        c1 <- "one"
    }()
    go func() {
        time.Sleep(2 * time.Second)
        c2 <- "two"
    }()

    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-c1:
            fmt.Println("received", msg1)
        case msg2 := <-c2:
            fmt.Println("received", msg2)
        }
    }
}
```

References:

- [gobyexample](https://gobyexample.com/)
