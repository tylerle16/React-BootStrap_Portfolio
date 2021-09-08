import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
// import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import js from "../js.png"

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"></div>
                            <h3>Web Design</h3>
                            <p>I approach each project individually and always focus on the result.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"></div>

                            <h3>Web Development</h3>
                            <p>Need A Website With E-Commerce, CRM, Or Log In Capabilities? Look No Further! Invest in a better website to elevate your sales and brand</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"></div><img src={js} alt=""></img>

                            <h3> JavaScript </h3>
                            <p>Your potential clients well see your services or product on Facebook</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"></div>

                            <h3>Google Ads</h3>
                            <p>Your service or product will appear at the top of the Google search</p>.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Services;
