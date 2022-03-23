import * as fs from "fs"
export default async function postcontacthandler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      let data=await fs.promises.readdir('contactdata',(err,data)=>{if(err){console.log(err)}})
      fs.promises.writeFile(`contactdata/${data.length+1}.json`,JSON.stringify(req.body),()=>{})
      res.status(200).json(req)
        //   for (let i=0;i<data.length;i++){
        //       const item=data[i]
        //       let myFile=await fs.promises.readFile(`contactdata/${item}`,(err,data)=>{
        //           if(err){
        //               console.log(err)
        //           }
        //     })
        //     arr.push(JSON.parse(myFile))
           
              
        //   }
        //   for (let i=0;i<arr.length;i++){
        //       let emaildata=arr[i].email
        //     if(emaildata==(req.body.email)){
        //         console.log('1')
        //     } else{

        //     }
        //   }
         
        //   if(count>0){
        //       console.log("user already exist")
        //   }else{
        //       console.log("you have created new one")
        //   }
    } else {
      // Handle any other HTTP method
      res.status(200).json({"err":"error"})
    }
  }