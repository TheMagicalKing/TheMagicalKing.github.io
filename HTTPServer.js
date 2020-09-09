var http = require('http');
var ts = new Date();
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('HelloWorld.html',function(err,data){
        res.write(data)
        return res.end(
        )
    })

}).listen(7162)