
import "./Footer.css"
import {FaLaptop} from "react-icons/fa6"
import {Link} from "react-scroll"

function Footer(){

    return(
        <div className="footer container">

        <div className="footer-wrapper">
        <div className="card">
            <div className="logo">
                <div className="fa-laptop-footer">
                    <FaLaptop/>
                    <h3>DevStack</h3>
                </div>
                <p>Our mission is to bring fulfillment to all our customers
                     through well equipped and qualified faculties.</p>
            </div>

            </div>
            <div className="card">
                <h4>Privacy Policy</h4>
                <ul className="footer-links">
                    <li>Terms and Conditions</li>
                    <li>Return Policy</li>
                    <li>Student Leave Policy</li>
                </ul>
            </div>

            <div className="card">
                <h4>Featured Links</h4>
                <ul className="footer-links-feature">
                    <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} offset={-30} duration={500}>About</Link></li>
                    <li><Link to="programs" smooth={true} offset={-100} duration={500}>Programs</Link></li>
                    <li><Link to="courses" smooth={true} offset={-20} duration={500}>Courses</Link></li>
                    <li><Link to="contact" smooth={true} offset={10} duration={500}>Contact</Link></li>
                </ul>
            </div>

            <div className="card">
                <h4>Contact Us</h4>
                <ul className="footer-links">
                    <li>admin@devstack.com</li>
                    <li>+1 234-456-8908</li>
                    <li>No.2 off WorkCamp</li>
                </ul>
            </div>
        </div>
           

           <p className="copyright">@Copyright DevStack Technologies 2025. All rights reserved</p>

        </div>
    )
}

export default Footer