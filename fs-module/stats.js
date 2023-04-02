//stats is used to see status or statistics about file
const fs =require('fs')
fs.stat("C:/Users/anshuverma/Downloads/fs-module/copy.js",(err,data)=>{
    if(data){

// console.log(data)
let sizekb=data.size /1024;

data['size']=sizekb;
console.log('size'+data.size+'kb')
    }


})
