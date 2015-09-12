var express=require ("express");
var path=require ("path");
var on=express();
on.get("/",function(request,response){
   response.sendFile(path.join(__dirname+"/index.html")); 
});
on.listen(8080);
console.log("listening on port 8080");