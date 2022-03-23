import * as fs from "fs"
export default function handler(req, res) {
        fs.readFile(`BlogData/${req.query.slug}.json`,'utf-8',(err,data)=>{
        if(err){
            res.status(500).json({err:"Internal error"})
        }else{
            res.status(200).json(JSON.parse(data))
            
        }
   
  })
}
// http://localhost:3000/api/blog?slug=data4