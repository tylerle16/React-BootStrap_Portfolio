import React from "react";
import ind from "../images/indubitably.png"
import con from "../images/concert.png"
import por from "../images/portfolio.png"
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const portfolio = () => {

    // Netflix
    const openPopupboxNetflix = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={ind} alt="Indubitably..." />
                <p>Any user can search for jobs. 'Register/Sign In' page allows the user to make an account by entering their information into the required fields. After the user submits their information, The password is hashed using bcrypt and the user account is saved in a PostgreSQL relational database. Upon making an account and signing in, the user gains the ability to save jobs to their account as favorites. </p>
                <b>View:</b> <a href className="hyper-link" onClick={() => window.open("https://indubitably.app/jobs/search?search=Software+Engineer&location=")}>https://indubitably.app/jobs/search?search=Software+Engineer&location=</a>
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Languages & Tech:JavaScript ,Nodejs,PostgreSQL,bcrypt,HTML,CSS,Sequelize,Beekeeper,Npm,Nodemon,Express,and VSCode "
                },
            },
        });
    }

    const popupboxind = {
        titleBar: {
            enable: true,
            text: "Indubitably Job Search"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // SHOPIFY STORE
    const openPopupboxcon = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={con} alt="SHOPIFY STORE..." />
                <p>A custom Shopify store I built for a local store in Chattanooga, TN! </p>
                <b>View:</b> <a href className="hyper-link" onClick={() => window.open("https://kingssmokeandvape.myshopify.com/")}>https://kingssmokeandvape.myshopify.com/</a>

            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "A custom Shopify store I built for a local store in Chattanooga, TN!",
                },
            },
        });
    }

    const popupboxConfigcon = {
        titleBar: {
            enable: true,
            text: "A Shopify store I built for a customer."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Portfolio Project
    const openPopupboxPortfolio = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={por} alt="Portfolio Project..." />
                <p>My Personal portfolio built with React, BootStrap, and Material UI project</p>
                <b>View:</b> <a href className="hyper-link" onClick={() => window.open("https://tylerthe.dev/")}>https://tylerthe.dev/</a>
                {/* <b>Demo:</b> <a href className="hyper-link" onClick={() => window.open("https://tylerthe.dev/", "_blank")}>https://tylerthe.dev/</a> */}

            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Portfolio React and Material UI project.",
                },
            },
        });
    }

    const popupboxConfigPortfolio = {
        titleBar: {
            enable: true,
            text: "Portfolio React and Material UI project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }




    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
                        <img className="portfolio-image" src={ind} alt="Netflix Clone Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxcon}>
                        <img className="portfolio-image" src={con} alt="City Guide Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
                        <img className="portfolio-image" src={por} alt="Portfolio React and Material UI Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                </div>
            </div>
            <PopupboxContainer {...popupboxind} />
            <PopupboxContainer {...popupboxConfigcon} />
            <PopupboxContainer {...popupboxConfigPortfolio} />
        </div>
    )
}

export default portfolio;
