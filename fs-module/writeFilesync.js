const fs=require('fs')
let content="this is big file"

fs.writeFile("output.txt",content,"utf-8",(err,data)=>{

//Example Asynchronus
if (err==null){

    console.log("complete")

}




// console.log(err);
// console.log(data);

})
console.log("reading...")
