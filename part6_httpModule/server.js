const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end("Server is running and working")
})

port=3000;

server.listen(port,()=>{
    console.log("sercver is listening at port 3000");
});