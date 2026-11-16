import http from 'http';
const server = http.createServer((req,res)=>{
    if(req.method === 'POST' && req.url === '/Students/')
    {
        res.writeHead(200,{"Content-type":"text/html"});
        res.write("<h1>Student Created</h1>");
        res.end();
    }
    else if(req.method === 'GET'&&req.url === '/Students/')
    {
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<h1>Students List</h1>");
        res.end();
    }
    else if(req.method === 'PUT' && req.url.startsWith("/Students/"))
    {
        res.writeHead(200,{"Content-type":"text/html"});
        res.write("<h1>Updated details<h1>");
        res.end()
    }
    else if(req.method === 'DELETE' && req.url.startsWith("/Students/")){
        res.writeHead(200,{"Content-type":"text/html"});
        res.write("<h1> Student deleted <h1>");
        res.end();
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.write("Page not found");
        res.end();
        }
    });
    server.listen(400,()=>
    {
        console.log("Server running at http://localhost:400/Students/");
    });