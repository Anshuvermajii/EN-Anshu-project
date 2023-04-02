const fs =require('fs');
fs.rename("sample.txt","newsample.pdf",(err)=>{

if(err==null){

console.log('rename succ')


}

});