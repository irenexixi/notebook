## Git 常用命令 ##

**生成公钥**

[来源1](http://blog.csdn.net/binyao02123202/article/details/20130891)
[来源2](http://www.cnblogs.com/vitah/p/3612473.html)

创建一个 `SSH key`， `git bash` 里面执行

    ssh-keygen -t rsa -C "645946774@qq.com"  ->　/c/Users/qqli/.ssh/id_rsa
or 

    ssh-keygen -t rsa -C "liqianqian@migu.com"  ->　/c/Users/qqli/.ssh/id_rsa

拷贝秘钥

    clip < ~/.ssh/id_rsa.pub


测试一下该 `SSH key`

    ssh -T git@github.com

**用户上传初始代码参考向导**
**设置账号密码**

    Git global setup -- 设置git用户本地信息
    git config --global user.name "张三"
    git config --global user.email "zhangsan@example.com"
    git config --list 查看已设配置
    git config  .git_commit.template 配置commit文件

**文件状态流程**

    untracked -> unmodified -> modified -> stage
    
**查看远程分支**
    
    git branch -r
        
**拉取远程分支并创建本地分支**
    
    git checkout -b 本地分支名x origin/远程分支名x
    使用该方式会在本地新建分支x，并自动切换到该本地分支x
    采用此种方法建立的本地分支会和远程分支建立映射关系
    
    git fetch origin 远程分支名x:本地分支名x
    使用该方式会在本地新建分支x，但是不会自动切换到该本地分支x，需要手动checkout
    采用此种方法建立的本地分支不会和远程分支建立映射关系

**创建新的分支1**

    1. git pull
    2. git checkout spider
    3. git pull origin spider:spider
    4. git push origin 4.2.2   //push到指定分支

**创建新的分支2**

    1. git pull origin branchName
    2. git branch newBranchName
    3. git pull origin newBranchName
    4. git push origin newBranchName   //push到指定分支
    
**查看某一个文件的详细提交记录**

	git log -p filename
    git blame filename 是查看目前的每一行是哪个提交最后改动的

**合并代码到master分支**

在`master`分支上

    git checkout master
    git pull 
    git merge branchName

**回滚代码**

    1. git revert commit码 revert某一次提交？push后的提交也可以revert？
    2. git checkout . #本地所有修改的，没有提交的，都返回到原来的状态
    3. git clean -dfx  清除当前本地分支的代码，包括新增的文件或文件夹
 
	git reset --hard commit-code 回滚代码到某次提交
    git reset --hard HEAD 回滚代码到远程最新
	git reset --hard HASH #返回到某个节点，不保留修改
	git reset --soft HASH #返回到某个节点，保留修改

**对已经存在的commit进行再次提交**

	git cherry-pick <commit id> （38361a68）

**tag**

	git tag  查看本地tag
	git push --tags  推送所有标签
	git tag -d 标签名  删除本地标签

	git push origin 标签名   推送某个标签 等价于
	git push origin refs/tags/源标签名:refs/tags/目的标签名
	git push origin :refs/tags/标签名  删除远程标签可以把源标签为空	

	在Git v1.7.0 之后，可以使用这种语法删除远程标签：
	git push origin --delete tag 标签名


**mvn使用方法**

    clean: mvn clean install (server)

    launch: mvn -Djetty.port=8087 jetty:run (admin)
            mvn clean install -U (更新包)
            mvn clean install -Dmaven:test(不执行单元测试的编译)

**git 引起冲突**
    1. 

Git暂存管理

git stash # 暂存 save uncommitted changes

git stash pop # 释放暂存的内容 apply last stash and remove it from the list

git stash list # 列所有stash, list stashed changes in this git

git show stash@{0} # 查看最近一次的stash, see the last stash

git stash apply # 恢复暂存的内容

git stash drop # 删除暂存区

git stash clear #将栈清空



查看、添加、提交、删除、找回，重置修改文件

git help <command> # 显示command的help

git show # 显示某次提交的内容 git show $id

git blame # 查看某分支最近一次的修改信息 git blame

gitk #打开图像界面

git clean -dfx #清除工作区

git clean -df  #返回到某个节点

git clean 参数
    -n 显示 将要 删除的 文件 和  目录
    -f 删除 文件
    -df 删除 文件 和 目录

git co -- <file> # 抛弃工作区修改

git co . # 抛弃工作区修改

git add <file> # 将工作文件修改提交到本地暂存区

git add .|* # 将所有修改过的工作文件提交暂存区

git rm <file> # 从版本库中删除文件

git rm <file> --cached # 从版本库中删除文件，但不删除文件

git reset <file> # 从暂存区恢复到工作文件

git reset -- . # 从暂存区恢复到工作文件

git reset --hard # 恢复最近一次提交过的状态，即放弃上次提交后的所有本次修改

git ci <file> git ci . git ci -a # 将git add, git rm和git ci等操作都合并在一起做　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　git ci -am "some comments"

git ci --amend # 修改最后一次提交记录

git revert <$id> # 恢复某次提交的状态，恢复动作本身也创建次提交对象

git revert HEAD # 恢复最后一次提交的状态

查看文件diff

git diff <file> # 比较当前文件和暂存区文件差异 git diff

git diff <id1><id1><id2> # 比较两次提交之间的差异

git diff <branch1>..<branch2> # 在两个分支之间比较

git diff --staged # 比较暂存区和版本库差异

git diff --cached # 比较暂存区和版本库差异

git diff --stat # 仅仅比较统计信息

查看提交记录

git log git log <file> # 查看该文件每次提交记录

git log -p <file> # 查看每次详细修改内容的diff

git log -p -2 # 查看最近两次详细修改内容的diff

git log --stat #查看提交统计信息

tig

Mac上可以使用tig代替diff和log，brew install tig

Git 本地分支管理

查看、切换、创建和删除分支

git br -r # 查看远程分支

git br <new_branch> # 创建新的分支

git br -v # 查看各个分支最后提交信息
git br --merged # 查看已经被合并到当前分支的分支

git br --no-merged # 查看尚未被合并到当前分支的分支

git co <branch> # 切换到某个分支

git co -b <new_branch> # 创建新的分支，并且切换过去

git co -b <new_branch> <branch> # 基于branch创建新的new_branch

git co $id # 把某次历史提交记录checkout出来，但无分支信息，切换到其他分支会自动删除

git co $id -b <new_branch> # 把某次历史提交记录checkout出来，创建成一个分支

git br -d <branch> # 删除某个分支

git br -D <branch> # 强制删除某个分支 (未被合并的分支被删除的时候需要强制)

分支合并和rebase

git merge <branch> # 将branch分支合并到当前分支

git merge origin/master --no-ff # 不要Fast-Foward合并，这样可以生成merge提交

git rebase master <branch> # 将master rebase到branch，相当于： git co <branch> && git rebase master && git co master && git merge <branch>

 Git补丁管理(方便在多台机器上开发同步时用)

git diff > ../sync.patch # 生成补丁

git apply ../sync.patch # 打补丁

git apply --check ../sync.patch #测试补丁能否成功


Git远程分支管理

git pull # 抓取远程仓库所有分支更新并合并到本地

git pull --no-ff # 抓取远程仓库所有分支更新并合并到本地，不要快进合并

git fetch origin # 抓取远程仓库更新

git merge origin/master # 将远程主分支合并到本地当前分支

git co --track origin/branch # 跟踪某个远程分支创建相应的本地分支

git co -b <local_branch> origin/<remote_branch> # 基于远程分支创建本地分支，功能同上

git push # push所有分支

git push origin master # 将本地主分支推到远程主分支

git push -u origin master # 将本地主分支推到远程(如无远程主分支则创建，用于初始化远程仓库)

git push origin <local_branch> # 创建远程分支， origin是远程仓库名

git push origin <local_branch>:<remote_branch> # 创建远程分支

git push origin :<remote_branch> #先删除本地分支(git br -d <branch>)，然后再push删除远程分支

Git远程仓库管理

GitHub

git remote -v # 查看远程服务器地址和仓库名称

git remote show origin # 查看远程服务器仓库状态

git remote add origin git@ github:robbin/robbin_site.git # 添加远程仓库地址

git remote set-url origin git@ github.com:robbin/robbin_site.git # 设置远程仓库地址(用于修改远程仓库地址) git remote rm <repository> # 删除远程仓库

创建远程仓库

git clone --bare robbin_site robbin_site.git # 用带版本的项目创建纯版本仓库

scp -r my_project.git git@ git.csdn.net:~ # 将纯仓库上传到服务器上

mkdir robbin_site.git && cd robbin_site.git && git --bare init # 在服务器创建纯仓库

git remote add origin git@ github.com:robbin/robbin_site.git # 设置远程仓库地址

git push -u origin master # 客户端首次提交

git push -u origin develop # 首次将本地develop分支提交到远程develop分支，并且track

git remote set-head origin master # 设置远程仓库的HEAD指向master分支

也可以命令设置跟踪远程库和本地库

git branch --set-upstream master origin/master

git branch --set-upstream develop origin/develop
