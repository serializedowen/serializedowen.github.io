---
date: '2020-10-21'
title: 'docker-compose入门'
category: 'Docker'
---

### 什么是 docker-compose

通俗的说，docker-compose 正如其名，是将你的多个 docker 容器服务整合起来的命令行工具。举个例子，假设你有一个 MySQL 实例和一个 Node.js 实例分别部署在两个容器中，仅需一个`docker-compose.yml`文件，docker-compose 就可以为你完成从打包到运行的所有步骤，并如果你还在苦恼手动执行各种`docker run []` 命令，这份指南可能能够帮上你。

#### 安装

> 如果你是在本地开发环境中使用 docker-compose，你不需要安装任何的依赖项，Docker for Windows 和 Docker for Mac 都已经内置了 docker-compose 的包

在 Linux based 服务器上安装:

- 在 terminal 中运行
  `` sudo curl -L https://github.com/docker/compose/releases/download/1.16.1/docker-compose-`uname -s`-`uname -m`-o /usr/local/bin/docker-compose `` 下载 docker-compose 的安装脚本
- 为脚本添加执行权限`sudo chmod +x /usr/local/bin/docker-compose`
- 执行脚本`sh /usr/local/bin/docker-compose`

#### 容器编排

docker-compose 使用目录下的`docker-compose.yml` 作为项目的配置文件， 以上述我们举的 MySQL 和 Node.js 应用的例子
`docker-compose.yml` 文件应该具有类似以下的结构:

> 你可以在[Github](https://github.com/serializedowen/docker-compose-tutorial)上克隆和运行下文中的示例

```yml
services:
  mysql:
    image: mysql:latest
    ports:
      - '3306:3306'
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: '123456'

  webapp:
    build: .
    container_name: webapp
    restart: always
    depends_on:
      - 'mysql'
    environment:
      NODE_ENV: 'production'
    ports:
      - '80:8080'
```

看不懂是很正常的，下面我们来一条一条详细剖析每个配置项是什么意思

- `services` 表示该集合下包含的所有服务，在这个例子中我们有 mysql 和 webapp 两个服务
- `image` 表示从官方维护的 mysql 镜像构建我们的容器
- `port` 表示将 docker 宿主机的 3306 端口映射 docker 容器的 3306 端口上，这样我们就能在宿主上通过 localhost:3306 连接到我们的 mysql 数据库

- webapp
  - `build`: 表示 docker 从哪个文件夹开始构建镜像
  - `container_name`: 容器名字
  - `restart`: 表示 Dockerfile 中的 CMD 命令返回任何非 0 的状态时都将重启容器
  - `depends_on`: 容器的依赖。在这里，webapp 容器会保证在 mysql 容器之后启动。
  - `environment`: 需要注入的 unix 环境变量，供容器使用。

> 注意：services 下的所有服务会共享同一个 docker network，这意味着你可以再 webapp 容器中通过 mysql:3306 访问到 mysql 服务，在 mysql 容器中通过 webapp:8080 访问到我们的 express 服务端， 更加详细的 networks 配置请查阅 [Networking in Compose](https://docs.docker.com/compose/networking/)

> depends_on 仅仅保证容器的执行顺序，而不保证你的应用已经在可用的状态（不管可用的状态对于你的应用意味着什么）。docker 这样设计是经过了周密考虑的：为了保证应用的健壮性，你应该自行定义在容器之间服务连接错误时候的重试/重启机制。

docker 官网提供的其他示例：

- [Wordpress](https://docs.docker.com/compose/wordpress/)
- [Rails](https://docs.docker.com/compose/rails/)
- [Django](https://docs.docker.com/compose/django/)

完整的配置项文档请移步[docker 官网文档](https://docs.docker.com/compose/compose-file)

[原文链接](serializedowen.com/docker-compose入门)
