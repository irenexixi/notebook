**激动人心，可以不用计算就能实现网页加载酷炫的动画，下面是详细的介绍**

`Airbnb` 出了个移动端的动画库`Lottie`，`AE`的 `Bodymovin` 插件结合起来，把在`AE`上做好的动画导出为 `json`文件。 在 `Web` 页面，以 `svg/canvas/html+js` 的形式，将动画还原到页面中。 `Bodymovin` 提供了作为 `Player` 的 `js` 库 —— `bodymovin.js`；

#### 一、生成 data.json 和 images ####

1. 安装 `AE`，[百度云盘](https://pan.baidu.com/s/1c2ewo2O)  密码: `utnm`；

2. 安装 `ZXP Installer`，[下载地址](http://aescripts.com/learn/zxp-installer/；

3. `ZXP Installer` 安装插件 `Bodymovin`， 插件地址：`Bodymovin` 的 `GitHub` 首页克隆项目到本地，或者下载`.zip`包对应的`bodymovin-master/build/extension/bodymovin.zxp`就是插件安装包了。安装成功后，打开该软件，点击 `“File” > “Open”` 菜单项载入上述 `.zxp` 插件包开始安装；

4. 打开 `AE`，点击“编辑”>“首选项”>“常规”菜单项，选中“允许脚本写入文件和访问网络”，点击确定；

5. 制作好AE动画后，点击窗口 - 扩展，选择 `bodymovin`，设置导出的文件地址，点击 `render`生成 `data.json` 和 `images`；

#### 二、访问 ####

1. 新建 `index.html` ，引入 `bodymovin-master/build/player/bodymovin.js`，详情看index.html文件；

#### Ios 和 Android ####

gitHub 寻找资源

1. Android原生，通过Airbnb的开源项目“lottie-android”实现；
2. iOS原生，通过Airbnb的开源项目“lottie-ios”实现；
3. React Native，通过Airbnb的开源项目“lottie-react-native”实现。