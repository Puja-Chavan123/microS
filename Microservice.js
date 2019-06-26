var http =require("http")

var Employee ={
    employeeid:1154,
	emailid: "abc@gmail.com"
    employeename:"abc",
   adress: "Pune",
    mobileno: 88885555
};
var controller=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(product));
};
var server=http.createServer(controller);
server.listen(7000);
console.log("listening on port 7000");



