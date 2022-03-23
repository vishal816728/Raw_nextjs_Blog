import Navbar from "../components/Navbar/Navbar"
import styles from "../../styles/Home.module.css"
import {useRouter} from "next/router"
import { useEffect } from "react"
import {useState}  from "react"


 function Slug(){
    const [blog,setBlog]=useState()
    const router=useRouter()
    useEffect(()=>{
         const {slug}=router.query
       console.log("this is working")
       fetch(`http://localhost:3000/api/blog?slug=${slug}`).then((a)=>{
         return a.json()}).then(parsed=>{
           setBlog(parsed)
         })

       
     },[router.isReady])
     console.log(blog)
     return(
         <div>
         <Navbar />
         <div className={styles.blogpost_container}>
         <h1>{blog && blog.title}</h1>
         <p>{blog && blog.content}
         </p>
    
         </div>
         </div>
     )
}

export default Slug