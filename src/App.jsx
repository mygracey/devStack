import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About"
import Programs from "./Components/Programs/Programs"
import Courses from "./Components/Courses/Courses"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"



function App(){
    return(
        <div>

        <Navbar />
        <Hero />
        <About />
        <div className="title"><h1 className="program-title">Our Programs</h1></div>
        <Programs />

        <Courses />
        <Contact />
        <Footer />

        </div>
    )

}

export default App