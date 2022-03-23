import Navbar from "./components/Navbar/Navbar"
import styles from "../styles/Contact.module.css"
import {useState} from "react"
function Contact(){
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [review,setReview]=useState('')


    const date=new Date()
    const y=date.getFullYear()

    function changehandler(e){
         if (e.target.name=="name"){
              setName(e.target.value)
         }
         else if(e.target.name=="email"){
            setEmail(e.target.value)
         }
         else if(e.target.name=="phone"){
            setPhone(e.target.value)
         }else if(e.target.name=="review"){
            setReview(e.target.value)
         }
    }
    function submithandler(e){
        e.preventDefault()

        const data = {name,email,phone,review };

       fetch('http://localhost:3000/api/contact', {
           method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
  
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  alert("we will get back you asap....")
  setName('')
  setEmail('')
  setPhone('')
  setReview('')
})
.catch((error) => {
  console.error('Error:', error);
});
    }
    return(
        <div className={styles.contactmaincontainer}>
        <Navbar/>
        <h1>This is the contact Page.</h1>
        <form onSubmit={submithandler}>
     <div className={styles.contactcontainer}>
    <label htmlfor="exampleInputEmail1">Your Name</label>
    <input type="text" name="name" value={name} onChange={changehandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />
    </div>
  <div className={styles.contactcontainer}>
    <label htmlfor="exampleInputEmail1">Email address</label>
    <input type="email" name="email" value={email} onChange={changehandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <div className={styles.contactcontainer}>
    <label htmlfor="exampleInputEmail1">Phone</label>
    <input type="number" name="phone" value={phone} onChange={changehandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phone" />
  </div>
  <div className={styles.contactcontainer}>
    <label htmlfor="exampleInputEmail1">Review</label>
    <input type="text" name="review" value={review} onChange={changehandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Share your review" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        <small className="bv">&copy;{y}</small>
        </div>
    )
}

export default Contact