# test

> qqli test

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run start

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## stash address

http://stash.lab.tclclouds.com/projects/ABFS


## 控制台调试 vue-devtools

$vm

## 调试手机页面

chrome://inspect/#devices

移步请求无法发送

## adb调试手机 电脑需要安装手机驱动
配置环境变量 计算机-属性-高级系统设置-高级-环境变量-PATH-编辑-末尾加D:/adb (adb目录)
adb devices
adb 
adb reverse tcp:3000 tcp:3000

## IDE:
1. ctrl+k, git commit, 可以取消勾选需要忽略但是添加到.gitignore却无效的文件，确认文件后 选择 commit and push
2. settings -> compiler -> exclude 点击添加


## 一些用法

data:text/html, <span>&#9825;</span>

'♡'.charCodeAt(0)
输出：9825
String.fromCharCode(9825,65,97)
输出："♡Aa"