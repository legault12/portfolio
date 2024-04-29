import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../common/navBar";
import Footer from "../common/footer";
import Logo from "../common/logo";
import Card from "../common/card";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";
import SEO from "../../data/seo";

import "./style/works.css";

const WorksPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "works");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Works | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta name="keywords" content={currentSEO.keywords.join(", ")} />
            </Helmet>

            <div className="page-content">
                <NavBar active="works" />
                <div className="content-wrapper">
                    <div className="works-logo-container">
                        <div className="works-logo">
                            <Logo width={46} />
                        </div>
                    </div>
                    <div className="works-container">
                        <div className="works-content">
                            <Card
                                icon={faBriefcase}
                                title="Work"
                                body={
                                    <div className="works-body">
                                        <div className="work">
                                            <img
                                                src="./scorpion.png"
                                                alt="scorpion"
                                                className="work-image"
                                            />
                                            <div className="work-title">Scorpion</div>
                                            <div className="work-subtitle">
                                                Web Developer
                                            </div>
                                            <div className="work-duration">2015 - 2022</div>
                                    </div>

                                        <div className="work">
                                            <img
                                                src="./scorpion.png"
                                                alt="scorpion"
                                                className="work-image"
                                            />
                                            <div className="work-title">Scorpion</div>
                                            <div className="work-subtitle">
                                                Lead Enterprise Web Developer
                                            </div>
                                            <div className="work-duration">2022 - 2024</div>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default WorksPage;
