import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNode,   faShopify } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My Services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faNode} size="2x" /></div>
                            <h3>Web Design</h3>
                            <p>Full Website Creation(Design, Redesign) to your preferred customization! </p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDatabase} size="2x" /></div>

                            <h3>Data Entry</h3>
                            <p>Do you need a reliable and professional virtual assistant for Data Entry, Web Research or List Building Projects using MS Excel? Then you are at the right place!<br/>
                            ●     Offline/Online Data Entry Jobs<br/>
                            

●     Web Research Jobs<br/>

●     Data Collection<br/>

●     Excel data entry<br/>

●     Typing tasks<br/>
                            
                            
                            
                            </p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

                            <h3>Web Development</h3>
                            <p>
                            I can build Full-Stack as well and frontend development for you. I'll use VS code for developing your application.

I develop apps with latest technology including Html, CSS, Bootstrap, React js, and Nodejs.

Free feel to message.

Provide the requirements and get quality work in due time. </p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faShopify} size="2x" /></div>

                            <h3>Shopify</h3>
                            <p>  I will create a totally new custom website for you. I will send you some questions to collect your requirements like your preferred color scheme, layout, features etc. 

And i will create a new website for you accordingly. </p>.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Services;
