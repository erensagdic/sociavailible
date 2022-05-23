import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const SoftwareIntegrations = () => {
    return (
        <>
            <div className="software-integrations-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="software-integrations-content">
                                <span className="sub-title">SOFTWARE INTEGRATIONS</span>
                                <h2>Easy & Perfect Solution With Latest Software Integrations</h2>
                                <p>Integrate with all popular social media platforms. </p>
                                <p> With its easy-to-use and fast interface, you can access the analysis of all your
                                    social
                                    media accounts here, plan your shares and create posts with artificial intelligence
                                    support.</p>
                                <Link href="/contact">
                                    <a className="default-btn">Get Started</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="software-integrations-list">
                                    <img src="/images/shape/bg-shape2.png" alt="bg-shape"/>

                                    <ul>
                                        <li>
                                            <img src="/images/new-images/facebook.png" className="atlassian"
                                                 alt="atlassian"/>
                                        </li>
                                        <li>
                                            <img src="/images/new-images/instagram.png" className="skype" alt="skype"/>
                                        </li>
                                        <li>
                                            <img src="/images/new-images/twitter.png" className="gdrive" alt="gdrive"/>
                                        </li>
                                        <li>
                                            <img src="/images/new-images/linkedin.png" className="slack" alt="slack"/>
                                        </li>
                                        <li>
                                            <img src="/images/new-images/social-truth.png" className="jira" alt="jira"/>
                                        </li>
                                        <li>
                                            <img src="/images/software-integrations/frame.png" className="frame"
                                                 alt="frame"/>
                                        </li>
                                    </ul>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>

                <div className="shape6">
                    <img src="/images/shape/shape5.png" alt="shape"/>
                </div>
            </div>
        </>
    )
}

export default SoftwareIntegrations;