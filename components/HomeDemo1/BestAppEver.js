import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const BestAppEver = () => {
    return (
        <>
            <div className="features-area ptb-100" id="features">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="features-content">
                                <h2>Most Probably You Are Getting Best Analyze Program Ever</h2>
                                <p>We provide you with the analysis of all your social media accounts in one place using
                                    the latest technologies. Use social media more effectively with our artificial
                                    intelligence supported programs and detailed analysis reports!</p>

                                <ul className="features-list">
                                    <li>
                                        <div className="icon">
                                            <i className="ri-download-cloud-2-line"></i>
                                        </div>
                                        <h3>Download Analysis Reports</h3>
                                        <p>If you want, you can download your analysis reports and work on them.</p>
                                    </li>
                                    <li>
                                        <div className="icon bg2">
                                            <i className="ri-award-line"></i>
                                        </div>
                                        <h3>Trusted and Reliable</h3>
                                        <p>We do not share your personal information with anyone and we keep it safe
                                            thanks to the technologies we use.</p>
                                    </li>
                                    <li>
                                        <div className="icon bg3">
                                            <i className="ri-cloud-line"></i>
                                        </div>
                                        <h3>Cloud Based</h3>
                                        <p>With our cloud-based working style, we offer you the opportunity to access
                                            from anywhere without any installation.</p>
                                    </li>
                                </ul>

                                <div className="btn-box">
                                    <Link href="/sign-in">
                                        <a className="default-btn">Start Free Trial</a>
                                    </Link>
                                    <Link href="/features">
                                        <a className="link-btn">See All Features</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="features-image text-center">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <img src="/images/new-images/about.png" alt="app-img"/>
                                </ScrollAnimation>

                                <div className="shape">
                                    <img className="shape3" src="/images/shape/shape2.png" alt="shape"/>
                                    <img className="shape4" src="/images/shape/shape3.png" alt="shape"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-shape1">
                    <img src="/images/shape/bg-shape1.png" alt="bg-shape"/>
                </div>
            </div>
        </>
    )
}

export default BestAppEver;