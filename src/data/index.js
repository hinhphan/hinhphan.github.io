let data = {
    index: {
        title: 'Trang Chủ | Phan Hinh',
        posts: [
            {
                image: '/assets/images/0.png',
                title: '[L0000] Tìm hiểu về framework Laravel',
                content: 'Cách mình tiếp cận các công nghệ không dựa hoàn toàn theo hướng học thuật từ đầu nên có thể sẽ có sai sót trong cách điễn đạt, nhưng mình mong muốn có thể đem đến cái nhìn dễ hiểu nhất về lập trình...',
                url: '/laravel/posts/0'
            },
        ]
    },
    laravel: {
        
    }
}

module.exports = {
    getData: function() {
        return data
    },
}