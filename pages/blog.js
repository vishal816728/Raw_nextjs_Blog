import Navbar from "./components/Navbar/Navbar"
import styles from "../styles/Home.module.css"
import Link from "next/dist/client/link"
import { useEffect } from "react"
import { useState } from "react"
import {useRouter} from "next/router"
import * as fs from "fs"



function Blog(props){
  const router=useRouter() 
     const [blog,setBlog]=useState(props.arr)
     //*********************************************  client side rendering *********************
    //  useEffect(()=>{
    //    console.log("this is working")
    //    fetch("http://localhost:3000/api/getBlogs").then((a)=>{
    //      return a.json()}).then(parsed=>{
    //        setBlog(parsed)
    //      })

       
    //  },[router.isReady])
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

// *******************************server side rendering**********************************
// export async function getServerSideProps(context) {
//   const res=await fetch("http://localhost:3000/api/getBlogs")
//   const data=await res.json()
//   return {
//     props: {data}, // will be passed to the page component as props
//   }
// }


//*****************************static site generation *********************/
export async function getStaticProps(context) {
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
  return {
    props: {arr}, // will be passed to the page component as props
  }
}
export default Blog