import React from 'react';
import author from '../me.png';
// import { linkdin } from "@fortawesome/free-solid-svg-icons";
import {AiOutlineGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';


const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..."/>
                    </div>
                
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading"><p>About Me</p></h1><p> I’m a Full-Stack Web Developer located in Chattanooga, Tennessee . I have a serious passion for Web Development , animations and creating intuitive, dynamic user experiences.
                    Well-organized person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, Working out,  and Reading. </p>
                    <h1><p>  Contact Me:     </p></h1> <p>Email:Tvlebusiness@gmail.com</p> <b/><p>Phone:706-537-2892</p><i class="fab fa-linkedin"></i>
                    linkedin: <a href="https://www.linkedin.com/in/tyler-le-b70725143/"><AiFillLinkedin/></a> <br/>GitHub:
                    <a href="https://github.com/tylerle16"><AiOutlineGithub/></a>
                </div>

            </div>
        </div>
    )
}

export default AboutMe
