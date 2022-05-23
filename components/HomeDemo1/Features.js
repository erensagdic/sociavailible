import React from 'react';

const Features = () => {
    return (
        <>
            <div className="features-area pt-100 pb-75">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-3 col-6 xsw-100 col-md-6">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="ri-smartphone-line"></i>
                                </div>
                                <h3>User Friendly</h3>
                                <p>We offer you an easy to use interface with its user-friendly interface.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-6 xsw-100 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg2">
                                    <i className="ri-award-line"></i>
                                </div>
                                <h3>Award Winning App</h3>
                                <p>Most provably best dashboard design for your business you can try.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-6 xsw-100 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg3">
                                    <i className="ri-fingerprint-line"></i>
                                </div>
                                <h3>Privacy Protected</h3>
                                <p>We do not share your personal data with any 3rd party institutions or software.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-6 xsw-100 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg4">
                                    <i className="ri-vip-diamond-line"></i>
                                </div>
                                <h3>Latest Technologies</h3>
                                <p>We support you with up-to-date software by constantly renewing ourselves.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;