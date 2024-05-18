Google Bookmarks Page Implementation for Discord Auto Interaction

I. What can be done?

It can expedite the process of obtaining airdrop project points for multiple Discord accounts by posting messages.

II. How to implement?

1.Log in to Discord accounts using Google and access the Network tab in the developer tools.

2.Post a message in the desired channel and find the "Request URL" and "Authorization" details in the Network tab.

3.Make the following modifications in discord.js.

4.Set the URL of the Google bookmark to the code within discord.js, so that clicking it will execute the code.

    const url = Request URL;

    authorization=Authorization;



Google书签页实现Discord自动交互

一、能做什么？

可以为多账户Discord发言获取空投项目积分缩短时间。

二、如何实现？

1.使用Google登入Discord账户，进入开发者工具的Network。

2.在你需要发言的通道发言，在Network中找到message信息，记录下"Request URL"和"Authorization"。

3.在discord.js进行如下修改

    const url = Request URL;

    authorization=Authorization;

4.设置Google书签URL为discord.js内代码，点击即可执行。

三、实现参考

python实现Discord交互


