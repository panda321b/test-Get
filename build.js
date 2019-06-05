
url = require('url'),
http = require('http'),
qs = require('querystring');
http.createServer(function (req, res) {
    res.writeHead(200,{"Content-Type":"text/plain"});
    if(req.method=='GET') {
        
        var url_parts = url.parse(req.url,true);
        console.log(url_parts.query);
        res.write('Firstname='+url_parts.query.Firstname+"\r\n");
        res.write('Lastname='+url_parts.query.Lastname+"\r\n");
       
    }
    
  
    res.end();
   
}).listen(8080);