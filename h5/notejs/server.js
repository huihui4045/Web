/**
 * Created by gavin on 2016/12/30.
 */
var http = require("http");

http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});

    response.write("../jq.html");

    response.end();

}).listen(8888);