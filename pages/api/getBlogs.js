
import * as fs from 'fs'

export default async function getBlogs(req,res){
    let arr=[]
    let data=await fs.promises.readdir('BlogData',(err)=>{
        if(err){
            console.log(err)
        }
    })
    let len=data.length
    console.log(data)
    for(let i=0;i<len;i++){
        const item=data[i]
        let myFile=await fs.promises.readFile(`BlogData/${item}`,'utf-8',(err,data)=>{
            console.log(arr)
            if(err){
                console.log(err)
              
            }
        })
        arr.push(JSON.parse(myFile))
        
        
    }
    console.log(arr)
    res.status(200).json(arr)
        }
 
