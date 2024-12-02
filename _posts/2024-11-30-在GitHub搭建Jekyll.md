---
layout: post
title:  "在GitHub搭建Jekyll"
date:   2024-11-30 18:45:58 +0800
categories: jekyll
---

## 创建GitHub Pages站点

先阅读注意事项，然后根据参考链接进行操作。

### 注意事项

username如果不是Github账户名，这个仓库就会成为username.github.io的子站点，比如访问地址会是：username.github.io/aaa.github.io。

可见，username.github.io是Github默认分配给你的域名，同名仓库即代表着默认网站内容。而username.github.io/仓库名称，是用来访问你的其它仓库的地址。

引自：[Github Pages + jekyll 全面介绍极简搭建个人网站和博客](https://zhuanlan.zhihu.com/p/51240503#:~:text=%E6%B3%A8%E6%84%8F%EF%BC%9A%20username%E5%A6%82%E6%9E%9C%E4%B8%8D%E6%98%AFGithub%E8%B4%A6%E6%88%B7%E5%90%8D%EF%BC%8C%E8%BF%99%E4%B8%AA%E4%BB%93%E5%BA%93%E5%B0%B1%E4%BC%9A%E6%88%90%E4%B8%BAusername.github.io%E7%9A%84%E5%AD%90%E7%AB%99%E7%82%B9%EF%BC%8C%E6%AF%94%E5%A6%82%E8%AE%BF%E9%97%AE%E5%9C%B0%E5%9D%80%E4%BC%9A%E6%98%AF%EF%BC%9Ausername.github.io/aaa.github.io%E3%80%82%E5%8F%AF%E8%A7%81%EF%BC%8Cusername.github.io%E6%98%AFGithub%E9%BB%98%E8%AE%A4%E5%88%86%E9%85%8D%E7%BB%99%E4%BD%A0%E7%9A%84%E5%9F%9F%E5%90%8D%EF%BC%8C%E5%90%8C%E5%90%8D%E4%BB%93%E5%BA%93%E5%8D%B3%E4%BB%A3%E8%A1%A8%E7%9D%80%E9%BB%98%E8%AE%A4%E7%BD%91%E7%AB%99%E5%86%85%E5%AE%B9%E3%80%82%E8%80%8Cusername.github.io/%E4%BB%93%E5%BA%93%E5%90%8D%E7%A7%B0%EF%BC%8C%E6%98%AF%E7%94%A8%E6%9D%A5%E8%AE%BF%E9%97%AE%E4%BD%A0%E7%9A%84%E5%85%B6%E5%AE%83%E4%BB%93%E5%BA%93%E7%9A%84%E5%9C%B0%E5%9D%80%E3%80%82)

### 创建步骤

创建步骤参考链接：[为站点创建仓库](https://docs.github.com/zh/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll#creating-a-repository-for-your-site)

## 安装Ruby、Bundler、Jekyll、Git

### Ruby and Jekyll安装

Windows安装参考链接：[Jekyll on Windows](https://jekyllrb.com/docs/installation/windows/)

[Windows下载RubyInstallers](https://rubyinstaller.org/downloads/)

操作到[第3步](https://jekyllrb.com/docs/installation/windows/#:~:text=Open%20a%20new%20command%20prompt%20window,gem%20install%20jekyll%20bundler)时，需要先将软件镜像源切换至国内清华源，然后再执行`gem install jekyll bundler`安装jekyll。

切换清华镜像源参考链接：[Ruby Gems](https://mirrors.tuna.tsinghua.edu.cn/help/rubygems/)

执行命令：

`gem sources --add https://mirrors.tuna.tsinghua.edu.cn/rubygems/ --remove https://rubygems.org/`

`bundle config mirror.https://rubygems.org https://mirrors.tuna.tsinghua.edu.cn/rubygems`

### Jekyll 站点创建

1. 需要先将GitHub仓库拉取到本地，可以使用VS Code直接拉取到指定文件夹。

2. 在存储库根目录中使用 jekyll new 命令：`jekyll new --skip-bundle .`

3. 打开 Jekyll 创建的 Gemfile 文件。

4. 将“#”添加到以 `gem "jekyll"` 开头的行首，以注释禁止此行。

5. 将 `# gem "github-pages"` 开头的行首“#”符号去除，以取消注释。

6. 保存并关闭 Gemfile。

7. 从命令行中，运行 bundle install。

8. 在`.gitignore`文件中增加内容`Gemfile.lock`。

9. 提交代码到GitHub仓库。

10. 在 GitHub 上，导航到站点的仓库。

11. 在存储库名称下，单击 “设置”。 如果看不到“设置”选项卡，请选择“”下拉菜单，然后单击“设置”。

12. 存储库标头的屏幕截图，其中显示了选项卡。 “设置”选项卡以深橙色边框突出显示。

13. 在边栏的“代码和自动化”部分中，单击“ Pages”。

14. 若要查看已发布的网站，请在“GitHub Pages”下单击“ 访问网站”。

引自：[创建站点](https://docs.github.com/zh/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll#creating-your-site)

## 一些问题

### GitHub Pages发布后站点时区不是北京时间问题(解决时间：2024-11-30)

在`_config.yml`文件中添加一行`timezone: Asia/Shanghai`。

引自：[使用Jekyll时遇到的时区问题](https://changwh.github.io/2019/03/17/timezone-issue-in-jekyll/)

## 一些参考链接

[目录结构](https://jekyllrb.com/docs/structure/)
[默认主题minimaGitHub仓库](https://github.com/jekyll/minima/tree/master)

[GitHub Pages 快速入门](https://docs.github.com/zh/pages/quickstart)
