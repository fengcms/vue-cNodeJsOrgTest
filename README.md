# vue-cNodeJsOrgTest

这个项目是用 cNodejs.org 的公开 api 做的一个测试项目 用来学习 vue

##项目运行说明

本代码必须跑在服务器环境下,并且必须开启ssi服务(服务端包含),可搜索`shtml+ssi`获取相应资料

##项目目录说明

```
├─index.shtml          渲染列表页面
├─content.shtml        渲染详情页面
├─url.shtml            测试url 方法页面
├─inc                  碎片文件
│   ├─bar.html             侧边栏代码
│   ├─footer.html          版权部分代码
│   ├─head.html            head区域调用js等代码
│   └─header.html          页头logo以及导航代码
└─res                  资源文件
    ├─image
    ├─js
    │  ├─common             我的代码目录
    │  │  ├─common.js           公共执行js
    │  │  └─method.js           自定义方法js
    │  ├─jquery             jquery源码目录
    │  ├─plugins            其他插件目录
    │  │  └─laypage             laypage 分页插件
    │  └─vue                VUE源码目录
    └─style
        ├─style.scss        sass源文件
        ├─style.css         编译好的css 文件
        ├─base
        └─scss
```