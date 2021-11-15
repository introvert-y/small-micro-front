# small-micro-front

精简的single-spa例子，基于system.js加载

## 以下所有的例子都基于官方脚手架安装

>[官方脚手架安装](https://single-spa.js.org/docs/create-single-spa)

模拟官方例子，做一个类似实际开发的的骨架

* 应用（single-spa application）：app1、app2、nav
* 风格指南（in-browser utility module）：styleguide
* 启动器（single-spa root config）：root-config
  
### 主要逻辑

#### 1、启动器保持简单、纯粹

只负责挂载其他的应用包和实用模块（application、utility module）

#### 2、layout层相关的显示区域，由nav和styleguide全权控制

当折叠侧边导航栏时改变全局css中的宽。这个全局css用来控制，应用的展示区域。所以相应的动画得自己写。tips:如果用基于vue的启动器则不需要自己写，也能很好的控制显示区域大小, 把子应用的展示区域放进router-view里。

### 3、utility module模块很强大

app1里的PageHeader组件就是由styleguide导入进去的。
这里也提供了另一种思路，就是layout层只负责侧面nav，然后把其他如header头，都由子应用注入，来控制显示隐藏

### 关于app2跟app1的不同

app1是官方推荐的配置，方便我们开发
app2模拟了正常的生产环境，应用打包后，挂载到一个端口。

### 需要注意的点

vue.config.js的配置，目前只是基于微服务开发的情况下。如果是本地启动，即serve:standalone。则需要把

```markdown
    // externals: ["vue", "vue-router", /^@study\/.+/]
```

externals

## 安装styleguide依赖

cd styleguide && cnpm install/yarn

## 启动styleguide

npm run serve

## 安装app1依赖

cd app1 && cnpm install/yarn

## 启动app1

npm run serve

## 安装app2依赖

cd root-config && cnpm install/yarn

## 启动app2 serve

模拟实际调用场景  

npm run start

## 安装root-config依赖

cd root-config && cnpm install/yarn

## 启动root-config

npm run start
