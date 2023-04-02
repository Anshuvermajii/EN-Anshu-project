const http=require('http')
const fs=require('fs');

http.createServer((req,res)=>{
    if(req.url=="/"){
fs.readFile('p1.html','utf-8',(err,data)=>{
 
if(err==null){


    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data)
    res.end();
    
}


})
    }
// console.log(req.url);
else if(req.url.startsWith("/addNumber")){

 let query=req.url.split("?")//addNumber?a=10&b=20
 //  console.log(query)
 let endpiont=query[0];//a=10&b=20
 let data=query[1];
 let param1=data.split("&");//a=10 and b=20
 let a=param1[0].split("=")[1];// a and 10
 let b=param1[1].split("=")[1];//b and 20
 res.write(JSON .stringify(Number(a)+Number(b)))
 res.end();

 
 


}






}).listen(8080)
