import React from 'react'
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'
import TrustedPartners from '@/components/HomeDemo1/TrustedPartners'

const MainBanner = () => {
    return (
        <>

            <div className="main-banner-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="new-app-main-banner-content">
                                <div className="content">
                                    <div className="name-big-text">SOCIAVAILIABLE</div>
                                    <span className="sub-title">#Get Your 14 Days Free Trial</span>
                                    <h1 className="banner-h1">Manage All Of Your Stuff Using A Sociaviliable</h1>
                                    <p>You can use your social media accounts more effectively by using SocialAvailiable. We are working to provide you the best service with detailed analysis and artificial intelligence supported programs.</p>
                                </div>
                            </div>

                            <div className="content-shape">
                                <img src="/images/shape/content-shape.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <ScrollAnimation animateIn='fadeInUp' duration={2} animateOnce={true} initiallyVisible={true}>
                                <div className="main-banner-image">
                                    <img src="/images/banner/banner-app111.png" alt="image" />
                                </div>
                            </ScrollAnimation>
                        </div>

                    </div>
                    <div className="row">
                        <div className="main-trusted-partners col-lg-7 col-md-12 col-sm-12">
                            <TrustedPartners/>
                        </div>
                    </div>

                </div>

                {/* Banner Images */}
                <div className="shape-overlay"></div>
                <div className="banner-shape1">
                    <img src="/images/shape/shape9.png" alt="image" />
                </div>
                <div className="banner-shape2">
                    <img src="/images/shape/shape777.png" alt="image" />
                </div>
                <div className="banner-shape3">
                    <img src="/images/shape/shape2.png" alt="image" />
                </div>
                <div className="banner-shape4">
                    <img src="/images/shape/shape1000.png" alt="image" />
                </div>
                <div className="banner-shape5">
                    <img src="/images/shape/shape11.png" alt="image" />
                </div>
            </div>
        </>
    )
}

export default MainBanner;