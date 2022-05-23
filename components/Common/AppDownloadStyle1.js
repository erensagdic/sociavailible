import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from "next/link";

const AppDownloadStyle1 = () => {
    return (
        <>
            <div className="app-download-area">
                <div className="container">
                    <div className="app-download-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="app-download-content">
                                    <span className="sub-title">Start Free Trial</span>
                                    <h2>Let's Get Your Free Trial </h2>
                                    <p>You can easily start your 14-day trial version without having to enter any card information.</p>

                                    <div className="btn-box">
                                        <Link href="/app-download">
                                            <a className="default-btn">Start Free Trial</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="app-download-image">
                                    <ScrollAnimation animateIn="fadeInUp">
                                        <img src="/images/new-images/app-ever.png" alt="app-img" />
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>

                        <div className="shape5">
                            <img src="/images/shape/shape4.png" alt="shape4" />
                        </div>

                        <div className="lines">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppDownloadStyle1;