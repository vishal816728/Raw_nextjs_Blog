import Navbar from "./components/Navbar/Navbar"
import styles from "../styles/Home.module.css"
import Link from "next/dist/client/link"
import { useEffect } from "react"
import { useState } from "react"
import {useRouter} from "next/router"

function Blog(){
  const router=useRouter() 
     const [blog,setBlog]=useState([])
     useEffect(()=>{
       console.log("this is working")
       fetch("http://localhost:3000/api/getBlogs").then((a)=>{
         return a.json()}).then(parsed=>{
           setBlog(parsed)
         })

       
     },[router.isReady])
     const date=new Date()
const y=date.getFullYear()
    return (
        <div className={styles.blog_main_container}>
        <Navbar/>

        <h1>Recent Blog's</h1>
       
          {
            blog.map((blogitem)=>{
              console.log(blogitem)
              return(
                <>
               
                <div key={blogitem.id} className={styles.blogpost_container}>
                <Link href={`/blogspot/${blogitem.slug}`}><h2>{blogitem.title}</h2></Link>
          <p>{(blogitem.content).substr(0,100)}</p>
        </div>
        </>
             ) })
          }
          <small className="bv">&copy;{y}</small>
        </div>
    )
}

export default Blog