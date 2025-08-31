import "./Hero.css"

function Hero(){
    return(
        <div className="hero">
            <div className="hero-text">
                <h1>Go from obscurity to notoriety in Tech</h1>
                <p>We are committed to helping interested individuals develope
                     and grow their tech skills to 
                    become one of the best in the world of tech. 
                    At DevStack Technologies, your dreams can come true.</p>

                    <button className="btn" id="hero-btn">Get Started</button>
            </div>
        </div>
    )
}

export default Hero