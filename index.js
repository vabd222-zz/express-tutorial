const http = require('http');
const port = 3000;

const server = http.createServer((req,res)=>{

    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()

    switch (path){

        case '':
            res.writeHead(200,{'Content-type':'text/plain'})
            res.end('Homepage')
            break
        case '/about':
            res.writeHead(200,{'Content-type':'text/plain'})
            res.end('About Page')
    }
})

server.listen(port, ()=>{console.log("server is working!")});
