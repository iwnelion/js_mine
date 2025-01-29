const http=require('http')
const fs=require('fs')      //file system
http.createServer((req,res)=>{
    fs.readFile('demofile.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
}).listen(8000)
//runs with: node simpleServer.js
//see it at: localhost:8000
//you will see the content of demofile.html
