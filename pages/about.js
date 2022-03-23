import Navbar from "./components/Navbar/Navbar"
import Link from "next/dist/client/link"

function About(){

    const date=new Date()
    const y=date.getFullYear()
    return (
        <>
        <Navbar/>
        <h1>Introduction</h1>
        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business</p>
        <h1>Services</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
         <ul>
             <li>service1</li>
             <li>service1</li>
             <li>service1</li>
             <li>service1</li>
             <li>service1</li>
             <li>service1</li>
             <li>service1</li>
             <li>service1</li>
         </ul>
         <h1>Contact us</h1>
         <p>web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
         <Link href={`../contact`} >Go To Contact</Link>
        <small className="bv">&copy;{y}</small>
        </>
    )
}

export default About