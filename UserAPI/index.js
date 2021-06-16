const http = require('http');
const fs = require('fs');

// creating a server
const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.end(`<h1>Welcome to HOMEPAGE!!</h1>`);
    }else if(req.url == '/about'){
        res.end(`<h1>This is ABOUT PAGE</h1>`)
    }else if(req.url == '/userapi'){
        fs.readFile(`${__dirname}/UserAPI/userapi.json`, 'UTF-8', (err, data)=>{
            console.log(data);
            const objData = JSON.parse(data);
            res.writeHead(200, {'Content-type':'Application/json'});
            res.end(objData[2].name);
            // output: ram sharma
        })
    }else{
        res.writeHead(404, {'Content-type':'text/html'});
        res.end(`<h1>Error 404 Page not Found</h1>`);
    }
})

// listening on server
server.listen(3000, '127.0.0.1', ()=>{
    console.log('Listening on port 3000');
})