import Link from "next/dist/client/link"
import styles from '../../../styles/Home.module.css'

function Navbar(){
    
    return(
        <>
        <style jsx global>
        {
            `
            .licontainer{
                color:black;
               text-decoration:underline;
               
            }
            `
        }
    </style>
         {/* in order to make it grobal you should use style jsx gloabal */}
        <div className={styles.navcontainer}>
        <ul className="nhi">
        {/* // import external css as module in app.js */}
        <Link href="/" ><li className="licontainer">Home</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/blog"><li>Blog</li></Link>
         <Link href="/contact"><li>Contact</li></Link>
        </ul>
      </div>
      </>
    )
}

export default Navbar