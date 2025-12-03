const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req,res) =>{
    if(req.url === '/favicon.ico') return res.end()
    console.log(req.url);
    const text = `${req.method} : ${req.url} \n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile('HTTP_FILE.txt',text,(err,data) =>{
        switch(myUrl.pathname){
            case '/': 
            res.end("This is Home Page")
            break;

            case '/contact': 
            res.end("This is contact Page");
            break;

            case '/about':
            const username = myUrl.query.name
            res.end(`Hi,${username}`);
            break;

            case '/search':
            const search = myUrl.query.search_query;
            res.end(`Here are your results for ${search}`);
            break;

            case '/signup':
                if(req.method === 'GET') res.end('This is signup Form');
                else {
                    //DB Query
                    res.end('Success');
                }

            default: res.end("404 Not Found");
        }
    })  
});

const PORT = process.env.PORT || 8001;

server.listen(PORT,() => console.log(`Server Running on ${PORT}`));