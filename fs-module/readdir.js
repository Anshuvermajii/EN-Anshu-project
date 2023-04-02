const fs=require('fs');
fs.readdir("./test_folder",(err,fillist)=>{

    if(err==null){
    
   
    for(let i=0; i<fillist.length; i++){

       if(fillist[i].indexOf(" . ") >0){


           console.log(`${fillist[i]} is file`);



       }else{

    console.log(`${fillist[i]} is folder`)


       }



    }
    
    
    }
    
    });
    fs.readFile(__filename,"utf-8",(error,data)=>{

if(error==null){

    console.log(data)
}


    })