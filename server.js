var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    article1:{
                    title:'Article one|Aakanksha singh',
                    heading:'Article One',
                    date:'August 30,2017',
                    content: `
                            <p>
                                This is article one and making webpages seems so interesting
                            </p>
                            <p>
                                wowwwwww.
                            </p>`
                },
    article2:{
            title:'Article two|Aakanksha singh',
            heading:'Article Two',
            date:'August 31,2017',
            content: `
                <p>
                    This is article two and making webpages seems so interesting
                </p>
                <p>
                    wowwwwww.
                </p>`
    },
    article3:{
         title:'Article three|Aakanksha singh',
        heading:'Article Three',
        date:'August 29,2017',
        content: `
                <p>
                    This is article three and making webpages seems so interesting
                </p>
                <p>
                    wowwwwww.
                </p>`
    }
};

function createTemplate(data){
        var title=data.title;
        var heading=data.heading;
        var date=data.date;
        var content=data.content;
        var htmlTemplate=`<html>
            <head>
                <title>
                    ${title}
                </title>
             <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                 <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                   ${content}
                </div>
                </div>
            </body>
        </html>`;
        return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
