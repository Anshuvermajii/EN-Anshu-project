const http=require('http');
const fs=require('fs')




http.createServer((req,res)=>{
    let filename='';
    
writeLog(req.url);
    switch(req.url){


case'/':
filename='index';
break;


case '/home':
    filename='home';
break;

case '/about':
    filename='about';
    break;
    default:
        filename='error'
        break;

    }
    res.writeHead(200,{'Content-Type':'text/html'})

   fs.readFile(`${filename}.html`,'utf-8',(err,data)=>{

    if(err==null){

res.write(data);
res.end();

    }
   })
 

}).listen(8080);

function writeLog(action){

   let content= `[Logged at ${new Date()}]=user performed ${action}.`;
    fs.appendFile('logger.log',content+"\n","utf-8",(err)=>{

if (err==null){

console.log('written data to log')

}


    })


}