import Navbar from "../components/Navbar/Navbar"
import styles from "../../styles/Home.module.css"
import {useRouter} from "next/router"
import { useEffect } from "react"
import {useState}  from "react"
import * as fs from "fs"

 function Slug(props){
    const [blog,setBlog]=useState(props.data)
    //*******************client side rendering**************************
    // const router=useRouter()
    // useEffect(()=>{
    //      const {slug}=router.query
    //    console.log("this is working")
    //    fetch(`http://localhost:3000/api/blog?slug=${slug}`).then((a)=>{
    //      return a.json()}).then(parsed=>{
    //        setBlog(parsed)
    //      })

       
    //  },[router.isReady])

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

//*****************************server side rendering**************** */
// export async function getServerSideProps(context) {
//   const {slug}=context.query
//   const res=await fetch(`http://localhost:3000/api/blog?slug=${slug}`)
//   const data=await res.json()
//   return {
//     props: {data}, // will be passed to the page component as props
//   }
// }
export async function getStaticPaths() {
  return {
    paths: [
      { params: { 
        slug:'data1',
       } },
       { params: { 
        slug:'data2',
       } },
       { params: { 
        slug:'data3',
       } },
       { params: { 
        slug:'data4',
       } },
       { params: { 
        slug:'data5',
       } }
    ],
    fallback: true // false or 'blocking'
  };
}
// *************************static site generation********************** */
export async function getStaticProps(context) {
  const {slug}=context.params
  console.log(slug)
  let data=await fs.promises.readFile(`BlogData/${slug}.json`,'utf-8')
  return {
    props: {data:JSON.parse(data)} // will be passed to the page component as props
  }
}
export default Slug