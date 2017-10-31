[参考1](http://www.runoob.com/nodejs/nodejs-npm.html) 
[参考2](https://docs.npmjs.com/getting-started/installing-node) 
[参考阮一峰](http://www.ruanyifeng.com/blog/2016/01/npm-install.html)

#### Liunx, Node版本升级 ####
[参考](http://www.jianshu.com/p/31d4f9a7f401) 
[参考](http://weizhifeng.net/node-version-management-via-n-and-nvm.html)

    npm cache clean -f 清除
    npm install -g n 安装n模块
    n 查看版本列表
    n stable 自动安装到最新的稳定版本
    n latest 安装最新的版本
    n 5.4.1  自由选择安装版本
    n rm 0.10.1 删除某个版本
    /usr/local/n/versions/node/5.4.1  通过n更新node存放的路径


#### Windows, Node版本升级 ####

在官网 [下载](https://nodejs.org/en/download/current/) 最新的安装包（`.msi`）,直接安装即可，不用先卸载之前的安装，安装过程若提示有进程在使用，建议重启电脑后再安装。安装成功后，在需要生成 `package-lock.json` 的已有项目下执行 `npm install -d` 即可。 

注：`npm5` 以上才会生成  `package-lock.json` 

#### Npm 命令 ####
    npm install npm -g  升级npm
    npm ls -g  查看所有全局安装的模块
    npm ls  查看所有本地安装的模块
    
    npm install module --save  安装的模块对象写入到package.json的dependencies里面
    npm install module --save-dev 安装的模块对象写入到package.json的devDependencies里面

    sudo npm install npm@1.3.24 -g  MAC OS全局安装指定版本的npm 
    sudo npm install npm@3.7.3 -g
    sudo npm install npm@latest -g

	npm install moduleName 本地安装依赖包
	npm install -g moduleName 全局安装依赖包
	npm install -d 会安装package.json文件中指明的其他依赖包
	npm uninstall moduleName  卸载 Node.js 模块
	npm update moduleName  更新模块
	npm search moduleName  搜索模块
	npm show express 显示模块详情
	
	npm init 创建模块
	npm adduser 注册用户
	npm publish 发布模块

#### Nrm (NPM register manager) ####
NPM registry manager, fast switch between different registries（NPM注册中心经理、快速切换不同的注册中心:`NPM`, `cnpm`,新泽西,淘宝网）: `npm, cnpm, nj, taobao`  

[Github: install nrm](https://github.com/Pana/nrm)  
	
	npm install -g nrm
    nrm ls 查看镜像
    nrm use taobao


#### 使用淘宝镜像 ####

[Github: install cnpm](https://github.com/cnpm/cnpm) 

    npm install -g cnpm --registry=https://registry.npm.taobao.org
    cnpm install moduleName 安装模块

#### npm-run-all ####

A CLI tool to run multiple npm-scripts in parallel（平行的） or sequential（相继的）.

[Github: install npm-run-all](https://github.com/mysticatea/npm-run-all)

	npm install npm-run-all
	"scripts": {    
	    "server": "webpack-dev-server --devtool #inline-source-map -d --history-api-fallback --hot --inline --progress --colors --port 5000 --host 0.0.0.0",
	    "mock": "node ./mock-server/server.js 2620",
	    "start": "run-p server mock"
	}

#### http-server ####

a simple zero-configuration command-line http server（一个简单的零配置命令行http服务器）

	npm install http-server -g

	http-server [path] [options]

	e.g. 当前目录启动服务，端口号是1011
	http-server -p 1011 
	Available on:
	  http://10.124.249.130:1011
	  http://192.168.149.55:1011
	  http://192.168.141.233:1011
	  http://127.0.0.1:1011 

	



