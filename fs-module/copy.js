const fs=require('fs');
fs.readFile('input.txt',(err,data)=>{//reading
    if(data)
    {
        fs.writeFile('output.txt',data,(error)=>{//writing
            if(error == null){
                console.log("copied!")
                fs.unlink('input.txt',(er)=>{//moving
                    console.log("moved")
                })
            }
        })
        
    }
    else{
        console.log(err)
    }
})

