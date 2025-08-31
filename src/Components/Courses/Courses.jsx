
import "./Courses.css"
import course_1 from "../../assets/uiux.jpg"
import course_2 from "../../assets/reactNativeCourse2.jpeg"
import course_3 from "../../assets/machineLearning.jpeg"
import course_4 from "../../assets/cyberSecurity.jpg"
import course_5 from "../../assets/dataAnalysis.jpeg"
import course_6 from "../../assets/webdev.jpeg"

function Courses(){

    return(
        <div className="courses container">
            <h2>Our Popular Courses</h2>

            <div className="course-wrapper">

                <div className="card">
                    <img src={course_1}/>
                </div>

                <div className="card">
                <img src={course_2}/>
                </div>

                <div className="card">
                <img src={course_3}/>
                </div>

                <div className="card">
                <img src={course_4}/>
                </div>

                <div className="card">
                <img src={course_5}/>
                </div>

                <div className="card">
                <img src={course_6}/>
                </div>

            </div>
        </div>
    )
}

export default Courses