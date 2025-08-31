import "./Programs.css"
import cybersecurity from "../../assets/pythonCourseTwo.jpeg"
import dataAnalysis from "../../assets/dataAnalysis.jpeg"
import webDevelopment from "../../assets/webdev.jpeg"

function Programs(){

    return(
        <div className="programs container">
            
            <section className="program-wrapper">

                <div className="program">

                    <div className="card">
                        <img src={dataAnalysis}/>
                    </div>
                    <div className="description">
                        <h2>Post-graduate Diploma in Data Analysis</h2>
                        <p>This program offers a huge insight into data analysis
                             and how it can help businesses grow by discovering
                              trends that must be eliminated into order to ensure
                               a smooth functioning and well being of your business
                                as well retaining customers and attracting new ones. </p>
                    </div>

                </div>

                <div className="program">

                    <div className="card">
                    <img src={webDevelopment}/>
                    </div>
                    <div className="description">
                    <h2>Diploma in Web Development</h2>
                    <p> This Diploma Program is quite rich and covers
                         a broad range of modern techniques applied in
                          full stack web development. It is a full course
                           comprising of both Front End and Back End
                            components of building a full system
                             to meet unique business needs. </p>
                    </div>

                </div>

                <div className="program">

                    <div className="card">
                    <img src={cybersecurity}/>
                    </div>
                    <div className="description">
                    <h2>Post-graduate Diploma in Python for Cyber Security</h2>
                    <p> We all know that today's digitized world is full 
                        of cyber threats and such there is need to tighten
                         the security of ones assets online. Knowing how to
                          prevent such attacks before they ever occur is 
                          key to maintaining customer loyalty and integrity of ones business.</p>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Programs