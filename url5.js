var h=require("http");
var ps=require("fs");
var u=require("url");
var server=h.createServer(
 function(req,res)
 {
 var q=u.parse(req.url,true);
 data=ps.readFileSync("."+q.pathname,"utf-8");
 res.writeHead(200,{"content-type":"text/html"}); //text/plain gives program 
 res.write(data);
 res.end();
});
server.listen(6051);