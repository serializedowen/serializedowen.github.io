---
date: '2021-01-19'
title: '浅入浅出 TypeScript 泛型与类型黑魔法'
category: 'TypeScript'
---

浅入浅出 TypeScript 泛型与类型黑魔法

# 前言

工作中看到很多同学对于 ts 的使用还是有局限性，包括对复杂类型和类型运算的抵触，导致写出来的代码 any 随处都是，维护、迭代时代码提示基本没有，方法名字基本靠猜，参数类型依赖文档，完全丧失了 ts 的作为强类型语言的优势。本文会在展开介绍泛型和各种类型黑魔法，为大家的 ts 工具库添砖加瓦，写出对自己和其他开发者更加友好的 ts 代码

# 第一部分：泛型（Generic types）

## 定义：（摘自百度百科）

> 泛型是程序设计语言的一种特性。允许程序员在强类型程序设计语言中编写代码时定义一些可变部分，那些部分在使用前必须作出指明。各种程序设计语言和其编译器、运行环境对泛型的支持均不一样。将类型参数化以达到代码复用提高软件开发工作效率的一种数据类型。泛型类是引用类型，是堆对象，主要是引入了类型参数这个概念。

呃，这写的是什么东西？我相信大部分人看到这个定义都会一头雾水。

## 定义：(摘自本人）

> **泛型就是对类型编程，把一部分在编写时候无法确定的类型转移到运行时来确定**

一个非常常见的例子就是如下代码：

```ts
Array<T>
```

我们在日常写代码的时候，就往往会遇到这种情况，在处理函数之前，我们只知道接受的参数是个 Array 类型，但无法确认这个数组里面存的是什么类型，这时候我们应该用什么类型来描述这个对象？

### 用 any？

这显然是不合适的，因为我们知道这个类型肯定会有诸如`Array.prototype.reduce()`, `Array.prototype.map()`等等挂在 Array 原型链上的函数，我们只是不知道`Array.prototype.map((...args) => {})`的中 args 的类型而已。

### 用 Array<any>？

用 Array<any>显然也不合适，因为这之后我们在使用`Array.prototype.map((...args) => {})`的时候，args 将会是 any 类型，我们希望能有一种办法，在定义时候只约束类型是个 Array，而里面装的东西到运行时去确定。

### Array<T>

谜底就在谜面上，我们的最终选择就是使用`Array<T>` 这里面的 T 就是泛型，一个在编译时无法确定的类型。

## 使用场景

### 简单案例

当你满心欢心的把 Array<T>放到你的代码里去，vscode 就会热情地为你泼一盆冷水：

```ts
export function test(arr: Array<T>) {
  return arr
}
```

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/53bc61b5087347c9a23ce940820624e4~tplv-k3u1fbpfcp-zoom-1.image)

解决方法也很简单：

我们之前刚刚提到，**泛型可以理解为对类型编程，而这个例子里的 T 不是一个具体的类型，而是一个变量**，我们只要事先声明他就好啦

```ts
// 已尖括号的形式声明在方法名的后面
export function test<T>(arr: Array<T>) {
  return arr
}
```

### 默认值

```ts
export function test<T = string>(arr: Array<T>) {
  return arr
}
```

和参数的默认值类似，当使用时未提供 T 的类型时，T 会自动识别为 string

### 类型继承: (extends 关键字)

想象这样一个场景，我们的 test 函数需要操作 Array<T>的数据，但是我们事先就对 T 的类型有一定认识。

例如：我们的 test 方法要操作 T 中一个叫 size 的属性。

这时候我们就可以使用：

```ts
interface Sizable {
  size: number
}

export function test<T extends Sizable>(arr: Array<T>) {
  // 这里i.size会有代码补全。
  arr.map(i => i.size)
  return arr
}

// 这行代码会提示 'ese'上不包含.size这个属性  报错。
test(['ese'])
```

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9cedae2751ea463b83f1aa99485efeed~tplv-k3u1fbpfcp-zoom-1.image)

## 第二部分：类型黑魔法

这部分是本人在日常 ts 的使用中总结出来的小技巧和偏门 API，希望也能让大家事半功倍。

### 类的 constructor：

#### 场景：

你用工厂模式设计了一个 create 函数，用来代理类的创建（使用常见诸如单例模式，类引用计数 etc..)

这时候，你自然希望将你需要的类作为泛型传入，但是这时候 create 函数的参数期望的你要创建的类的构造函数，怎么实现呢？如下：

#### 实现：

```ts
export function create<T>(ctor: { new (): T }): T {
  return new ctor()
}
```

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f70e4bc44b054e1081c348b99ad3620b~tplv-k3u1fbpfcp-zoom-1.image)

黑魔法就在这里，`{new (): T}` 代表一个可以 new，并返回 T 类型的对象，也就是 T 的构造函数

### 映射类型 (TypeScript 已内置)

#### 场景：

Employee 对象是一个后端数据库中的类型，拥有几个属性:

```ts
export interface Employee {
  age: number
  sex: 'male' | 'female'
  salary: number
  mood: 'happy' | 'sad' | 'average'
  workTime: '996' | '965' | '995' | '1027'
}
```

这时候我们如果要在前端对 Employee 进行更新操作，传整个对象自然是不合理的，比如我们只想更新一位 Employee 的 mood 属性，ts 编译器就会报错，告诉我们遗漏了一部分属性

![image.png](https://cdn.serializedowen.com/FoaXfjGwhtZHoc04G3W5EN3jYpj6)

#### 实现：

使用 Partial 类型包裹 Employee，获得一个所有参数都是可选的 Employee 类型(相当于定义是给每个属性加上了"?"修饰符）
![image.png](https://cdn.serializedowen.com/FvRU3omq7cGdJRB8ykOzfmbpB9eZ)

```ts
type Partial<T> = { [P in keyof T]?: T[P] | undefined }
```

> 他的实现也并不复杂，输入一个泛型 T，输出一个新类型，类型中每个属性都是 T 的属性加上'?'修饰符，其中 keyof T 代表 T 泛型中的属性名，T[P]代表对应属性的类型

根据这个形式，我们就可以举一反三出各种类似的工具类型：

```ts
type Required<T> = { [P in keyof T]-?: T[P] | undefined }
```

```ts
type Readonly<T> = { readonly [P in keyof T]: T[P] | undefined }
```

### 从复杂类型中提取基础类型

#### 场景：

axios 作为一个基于 Promise 的 http 请求库，大家一定都很熟悉。他的请求返回对象都是用 Promise 包裹的。
![image.png](https://cdn.serializedowen.com/FnnvDOAiQMzQ85_AKAOWv1kqrwJg)

这时候，我们可能有一个函数需要处理 Promise 返回的响应体，也就是说，我们希望可以从 Promise<AxiosResponse<any>>类型中提取出 AxiosResponse<any>的类型。

#### 实现：

```
type Depromisify<T> = T extends Promise<infer U> ? U : T
```

![image.png](https://cdn.serializedowen.com/FtFfGWkZ02lZvTa86jTn--QIavEP)

看起来有点复杂？我们分步一个个讲解：

- `extends`：前文介绍过，用来判断 T 泛型能否继承 Promise<infer U>这个类型
- `T ? T : unknown`：, js 中常见的三元运算符，在 ts 中是一样的效果
- `infer`：如其名，告诉 ts 编译器，需要推理此处的类型并存到 U 这个类型变量中

用类似的手段，我们可以实现更多的工具类型：

```ts
// 如果T是一个数组，则提取数组中的对象类型
type FlattenArray<T> = T extends (infer U)[] : U : T
```

```ts
// 提取函数的返回类型
type ReturnType<T> = T extends (...args: any[]) => infer U ? U : T
```

等等

# 后记

TypeScript 作为 JavaScript 的强类型超集，在保留了动态类型语言的灵活性(any)的同时，提供了各种强类型语言的优点，值得大家去学习深入。希望这篇文章能在编写 ts 代码的时候帮助到大家，早日摆脱 AnyScript 的诟病！

[官方文档](https://www.typescriptlang.org/docs/handbook/generics.html)
