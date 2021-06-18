const http = require('http');

// creating server
const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url == '/'){
        res.end('Welcome to HOME page');
    }else if(req.url == '/about'){
        res.end('Welcome to ABOUT page');
    }else if(req.url == '/contact'){
        res.end('Welcome to CONTACT page');
    }else if(req.url == '/service'){
        res.end('Welcome to SERVICE page');
    }else{
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end('<h1>Error 404, Page not found</h1>')
    }
});
// listening on port
server.listen(3000, '127.0.0.1', ()=>{
    console.log('listening on port 3000');
})