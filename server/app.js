let express = require('express')
let app = express()

app.get('/asdf', function(req, res){
  res.send('hello world');
});

app.get('/articles/list', function(req, res){
  console.log(req.query)
  if(+req.query.tagId === -1){
    res.send({
      code: 1000,
      data: [
        {
          id: 1,
          title:'String',//文章标题
          content:'又有一段时间没有沉下屁股写点东西，猜测多是因为朋友多了，不少来往，耽误了自我孤独的成长，不知该喜或忧。这个文章已经想写许久，但每次起笔无法一股作实写完，一方面受制于自己在设计上浅薄的见识，另一方面，也是招聘人才这个话题实在各自心中各有建设。但终究将一些断断续续的东西排了出来，大致能排遣一些长久没写字的罪恶感。',//文章内容
          viewCount:1,//浏览次数
          commentCount:0,//评论次数
          time:'String',//发表时间
          tags:[
            {
              id: 1,
              name: 'html'
            },
            {
              id: 2,
              name: 'vue'
            }
          ],//标签
          isPublish:true//是否发布
        },
        {
          id:2,
          title:'String',//文章标题
          content:'又有一段时间没有沉下屁股写点东西，猜测多是因为朋友多了，不少来往，耽误了自我孤独的成长，不知该喜或忧。这个文章已经想写许久，但每次起笔无法一股作实写完，一方面受制于自己在设计上浅薄的见识，另一方面，也是招聘人才这个话题实在各自心中各有建设。但终究将一些断断续续的东西排了出来，大致能排遣一些长久没写字的罪恶感。',//文章内容
          viewCount:1,//浏览次数
          commentCount:0,//评论次数
          time:'String',//发表时间
          tags:[
            {
              id: 4,
              name: 'vuex'
            },
            {
              id: 5,
              name: 'axios'
            },
            {
              id: 6,
              name: 'express'
            }
          ],//标签
          isPublish:true//是否发布
        },
        {
          id: 3,
          title:'String',//文章标题
          content:'又有一段时间没有沉下屁股写点东西，猜测多是因为朋友多了，不少来往，耽误了自我孤独的成长，不知该喜或忧。这个文章已经想写许久，但每次起笔无法一股作实写完，一方面受制于自己在设计上浅薄的见识，另一方面，也是招聘人才这个话题实在各自心中各有建设。但终究将一些断断续续的东西排了出来，大致能排遣一些长久没写字的罪恶感。',//文章内容
          viewCount:1,//浏览次数
          commentCount:0,//评论次数
          time:'String',//发表时间
          tags:[
            {
              id: 4,
              name: 'vuex'
            },
            {
              id: 5,
              name: 'axios'
            },
            {
              id: 6,
              name: 'express'
            }
          ],//标签
          isPublish:true//是否发布
        }
      ]
    });
  }
  if(+req.query.tagId === 2){
    res.send({
      code: 1000,
      data: [
        {
          id: 1,
          title:'String',//文章标题
          content:'又有一段时间没有沉下屁股写点东西，猜测多是因为朋友多了，不少来往，耽误了自我孤独的成长，不知该喜或忧。这个文章已经想写许久，但每次起笔无法一股作实写完，一方面受制于自己在设计上浅薄的见识，另一方面，也是招聘人才这个话题实在各自心中各有建设。但终究将一些断断续续的东西排了出来，大致能排遣一些长久没写字的罪恶感。',//文章内容
          viewCount:1,//浏览次数
          commentCount:0,//评论次数
          time:'String',//发表时间
          tags:[
            {
              id: 1,
              name: 'html'
            },
            {
              id: 2,
              name: 'vue'
            }
          ],//标签
          isPublish:true//是否发布
        }
      ]
    });
  }

});
app.get('/tags/list', function(req, res){
  res.send({
    code: 1000,
    data: [
      {
        id: 1,
        name: 'html'
      },
      {
        id: 2,
        name: 'vue'
      },
      {
        id: 3,
        name: 'javascript'
      },
      {
        id: 4,
        name: 'vuex'
      },
      {
        id: 5,
        name: 'axios'
      },
      {
        id: 6,
        name: 'express'
      },
      {
        id: 1,
        name: 'html'
      },
      {
        id: 2,
        name: 'vue'
      },
      {
        id: 3,
        name: 'javascript'
      },
      {
        id: 4,
        name: 'vuex'
      },
      {
        id: 5,
        name: 'axios'
      },
      {
        id: 6,
        name: 'express'
      }
    ]
  });
  // res.send('hello world');
});
app.get('/articles/:id', function(req, res){
  res.send({
    code: 1000,
    data: 
      {
        id: 1,
        title:'String',//文章标题
        content:'又有一段时间没有沉下屁股写点东西，猜测多是因为朋友多了，不少来往，耽误了自我孤独的成长，不知该喜或忧。这个文章已经想写许久，但每次起笔无法一股作实写完，一方面受制于自己在设计上浅薄的见识，另一方面，也是招聘人才这个话题实在各自心中各有建设。但终究将一些断断续续的东西排了出来，大致能排遣一些长久没写字的罪恶感。',//文章内容
        viewCount:1,//浏览次数
        commentCount:0,//评论次数
        time:'String',//发表时间
        tags:[
          {
            id: 1,
            name: 'html'
          },
          {
            id: 2,
            name: 'vue'
          }
        ],//标签
        isPublish:true//是否发布
      }
  });
})

app.listen(3000);