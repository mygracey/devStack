
import {FaLaptop,FaBars} from "react-icons/fa6"
import "./Navbar.css"
import {useState,useEffect} from "react"
import {Link} from "react-scroll"


function Navbar(){
    const[sticky,setSticky]=useState(false)


    useEffect(()=>{
        window.addEventListener("scroll",function(){
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    },[])


    const[menuBar,setMenuBar]=useState(false)

    function toggleNavMenu(){
   

        menuBar? setMenuBar(false) : setMenuBar(true)

    }


    return (
        <nav className={`container ${sticky ? 'dark-nav':''}`}>
            <div className="logo">
                <div className="fa-laptop">
                    <FaLaptop/>
                    <h3>DevStack</h3>
                </div>
            </div>
            <ul className={menuBar ? 'show-nav-menu':''}>
                <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} offset={-30} duration={500}>About</Link></li>
                <li><Link to="programs" smooth={true} offset={-100} duration={500}>Programs</Link></li>
                <li><Link to="courses" smooth={true} offset={-50} duration={500}>Courses</Link></li>
                <li><button className="btn"><Link to="contact" smooth={true} offset={10} duration={500}>Contact</Link></button></li>
            </ul>

            <div className="fa-bars" onClick={toggleNavMenu}>
                <FaBars />
            </div>
        </nav>
    )

}

export default Navbar