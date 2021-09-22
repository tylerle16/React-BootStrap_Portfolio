import React from 'react'
import Typed from "react-typed"
// import Particles from 'react-particles-js'
const Header = () => {
    return (
    <div id="home" className="Header-wraper">
        <div className="main-info">

            <h1>Web development and website promotions</h1>
            <Typed
            className="typed-text"
            strings={["Web Design", "Web Development", "JavaScript, Python, Node.js, React, Express.js, PostgreSQL, Bootstrap, HTML, CSS, GitHub, JQuery, Redux."]}
            typeSpeed={70}
            backSpeed={50}
            loop
            
            />
            {/* <a href="/" className="btn-main-offer">Contact Me</a> */}
        </div>

    </div>
    )
}

export default Header
