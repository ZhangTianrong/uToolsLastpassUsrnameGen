# Lastpass Username Generator

[Lastpass username generator](https://www.lastpass.com/username-generator) 的本地版，可以生成 `seemingly pronounceable`（“似乎能够读出来的”）的随机用户名。生成手段是通过查询连续可行的三个字母的 continuation，用和 language model 类似的想法通过前面两位的字母生成下一位。

<img src="img/demo.gif" style=" box-shadow: 10px 10px 10px rgba(0,0,0,.5);-moz-box-shadow: 10px 10px 10px rgba(0,0,0,.5);-webkit-box-shadow: 10px 10px 10px rgba(0,0,0,.5);"></img>

## 功能

+ ✓ 通过 `Username` 关键字呼出该插件，默认生成8位大小写混合的“似乎能够读出来的”的用户名，右侧两个按钮分别用来复制到剪贴板和生成新的用户名。
+ ✓ 支持快捷键：`Enter` 复制到剪贴板；`F5` 生成新的用户名。
+ ✓ 点击右上角齿轮按钮打开配置面板，通过鼠标滚轮选中需要的用户名长度，点击确定即可完成设置。
+ ○ 改写原本的`JavaScript`，将需要的函数与`Lastpass`其他庞杂的代码解绑、重命名变量为有含义的名称，使得代码更加可读。
+ ✗ 尚未完成所有`configurable`参数的移植，主要是样式不知道怎么加好看。
+ ✗ 使用的样式和`JavaScript`库修改地有些丑陋……还需重新整理一下。

## 其他参考

+ 显示用户名的 `input` box 的样式：[CodePen Home
Webflow-style email input](https://codepen.io/PRtheRose/pen/BNgEJo) from Phil Rose.
+ 按钮样式：[`Ionicons`](https://code.ionicframework.com)
+ 页面底部链接样式：[CSS link effects](https://codepen.io/samvdh/pen/MmZzyR) by sam van der Heijden.
+ 长度选择界面：[`mobileSelect.js`](https://github.com/onlyhom/mobileSelect.js/) （可惜貌似没有夜间模式，也不支持鼠标滚轮，需要自己修改……）
