javascript:(function(){
    const channelId = '';//通道ID
    const authorization = '';//Discord Token-ID
    const messages = [
        "这个项目怎么样", "等级怎么刷", "多少分有NFT", "欢迎新人", "GM", "go to the moon", "拿下拿下", "非常好", "新人宝宝好", "给我白名单",
        "今天天气真好", "你喜欢什么音乐", "最近看了什么电影", "推荐一本好书", "午饭吃什么", "今天心情如何", "计划去哪里旅行", "周末打算做什么", "有喜欢的运动吗", "最近工作忙吗",
        "项目前景如何", "怎么提高等级", "获取NFT需要多少积分", "新人欢迎仪式", "早上好", "升到月球", "努力加油", "表现优异", "欢迎新成员", "我想要白名单",
        "对未来有什么规划", "最近有什么新爱好", "周末打算怎么过", "你喜欢宠物吗", "最喜欢的电影类型是什么", "分享一个有趣的故事", "最近有什么新发现", "有什么人生目标", "对哪个领域感兴趣", "最喜欢的食物是什么",
        "今天过得怎么样", "有推荐的电视剧吗", "最近读了什么书", "你喜欢烹饪吗", "最喜欢的季节是什么", "去过哪些国家", "最近有什么挑战", "喜欢什么类型的运动", "对艺术感兴趣吗", "最近有什么开心的事",
        "周末有什么安排", "最喜欢的颜色是什么", "今天学到了什么新知识", "有什么特别的才艺", "喜欢户外活动吗", "最喜欢的节日是什么", "最近有什么好消息", "对科技感兴趣吗", "最喜欢的饮料是什么", "最近有什么新技能",
        "最近有什么新体验", "对历史感兴趣吗", "最喜欢的动物是什么", "有去过博物馆吗", "最近有什么新目标", "喜欢摄影吗", "对音乐感兴趣吗", "最喜欢的运动是什么", "最近有什么新发现", "对心理学感兴趣吗",
        "对未来有什么展望", "喜欢下棋吗", "最喜欢的书是什么", "有去过什么演唱会吗", "对旅游感兴趣吗", "喜欢画画吗", "最喜欢的电视剧是什么", "有去过什么美术馆吗", "对科学感兴趣吗", "最近有什么新成就",
        "最近有什么新学习", "喜欢写作吗", "最喜欢的电影是什么", "有去过什么体育赛事吗", "对健康感兴趣吗", "喜欢做手工吗", "最喜欢的游戏是什么", "有去过什么音乐会吗", "对环保感兴趣吗", "最近有什么新计划"
    ];
    let messageCounter = 0;
    let intervalId = null;

    function sendMessage(content) {
        const url = `https://discord.com/api/v9/channels/${channelId}/messages`;
        const data = { content: content, nonce: `82329451214${Math.floor(Math.random() * 1000)}33232234`, tts: false };
        fetch(url, { method: 'POST', headers: { 'Authorization': authorization, 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
            .then(response => response.json())
            .then(result => { console.log('Message sent:', result); })
            .catch(error => { console.error('Error sending message:', error); });
    }

    function startSending() {
        Maxtime=60000*20//20分钟
        Mintime=60000//1分钟
        tine=Math.random()*(Maxtime-Mintime)+Mintime
        if (intervalId) { clearInterval(intervalId); }
        intervalId = setInterval(() => {
            sendMessage(messages[messageCounter]);
            messageCounter = (messageCounter + 1) % messages.length;
        }, time);
    }

    function stopSending() {
        if (intervalId) { clearInterval(intervalId); intervalId = null; }
    }

    startSending();
})();
