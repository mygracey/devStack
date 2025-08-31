import "./About.css"
import techStudent from "../../assets/tech-student.jpg"
import happyGirls from "../../assets/teenagers-having-fun-summer.jpg"


function About(){

    return(
        <div className="about container">
           <section className="about-grid">

                <div className="col">
                   <h1>About Us</h1>
                   <p>We are Nigeria's foremost Information and Computer 
                    Technology School. <b>Our vision</b> is to spread out to 
                    all corners of Africa with our knowledge and skill
                     by planting our branches in those countries on the
                      African Continent. Our goal isn't just limited to the African 
                    soil but to become a global brand in the nearst future. </p>
                </div>

                <div className="col">
                   <img src={techStudent} className="about-img"/>
                </div>

                <div className="col">
                   <img src={happyGirls} className="about-img"/>
                </div>

                <div className="col">
                    <p>
                    <b>Our Mission</b> is to provide a sense of fulfilment to all our
                     students through very qualified team of developers, 
                     data analysts, graphic designers, and other professionals
                      we have on ground. Our team is made up of dedicated
                       people with over 4years of experience in their field
                        of endeavour, and are always happy
                     and ready to provide quality tutorship to our numerous students.
                    </p>
                   
                </div>

           </section>
        </div>
    )

}

export default About