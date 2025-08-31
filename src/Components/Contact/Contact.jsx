
import {FaEnvelope,FaPhone,FaLocationPin} from "react-icons/fa6"
import "./Contact.css"
import { useState } from "react"




function Contact(){
const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[phone,setPhone]=useState("")
const[message,setMessage]=useState("")
const[msg,setMsg]=useState("")



const emailRegex=/[a-z0-9A-Z]+@[a-z]+\.[a-z]{2,5}/


function handleFormSubmit(e){
    e.preventDefault()
    if(name=="" || email=="" || phone=="" || message==""){
        setMsg("All fields are required.")
        setTimeout(()=>{
            window.location.reload(true)
        },3000)
    }
    else if(email.match(emailRegex)){
        setMsg("Form submission in progress...")
        setTimeout(()=>{
            setMsg(" Your message was sent successfully.")
            setTimeout(()=>{
                window.location.reload()
            },2000)
        },1500)
        
    }
    else{
        setMsg("invalid email")
        
    }
}






    return(
        <div className="contact container">
            <h2>Our Contact</h2>

            <div className="contact-grid">

                <div className="col">
                    <h3>Feel free to contact us via our contact form<FaEnvelope className="env"/></h3>
                    <div className="contact-info">
                        <li><FaEnvelope className="icon"/>Email: admin@devstack.com</li>
                        <li><FaPhone className="icon"/>Call: +1 234-456-7890</li>
                        <li><FaLocationPin className="icon"/>Location: No. 1234 Street</li>

                    </div>
                </div>

                <div className="col">
                    <form>
                        <h3>Make your inquiry today.</h3>
                       <div className="form-control">
                        <input type="text" id="name" placeholder="Enter your name" onChange={(e)=>{setName(e.target.ariaValueMax)}} autoComplete="off" />
                       </div>

                       <div className="form-control">
                        <input type="text" id="email" placeholder="Enter a valid email address" onChange={(e)=>{setEmail(e.target.value)}} autoComplete="off" />
                       </div>

                       <div className="form-control">
                        <input type="text" id="phone" placeholder="Enter your mobile Number" onChange={(e)=>{setPhone(e.target.value)}} autoComplete="off"/>
                       </div>

                       <div className="form-control">
                        <textarea id="message"  placeholder="Type your message here" onChange={(e)=>{setMessage(e.target.value)}} autoComplete="off"></textarea>
                       </div>

                      <button className="btn btn-dark" onClick={handleFormSubmit}>Submit form</button>
                    </form>

                    <p>{msg}</p>
                    
                </div>

            </div>
        </div>
    )

}

export default Contact