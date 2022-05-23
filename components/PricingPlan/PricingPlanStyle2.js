import React from 'react';
import Link from 'next/link'

const PricingPlanStyle2 = () => {
    return (
        <>
            <div className="pricing-area pt-100 pb-75">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">PRICING TABLE</span>
                        <h2>No Hidden Charge Applied, Choose Your Plan</h2>
                    </div>

                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-pricing-box">
                                <div className="title">
                                    <h3>Basic</h3>
                                    <p>Powerful & awesome elements</p>
                                </div>
                                <div className="price">
                                    $59 <span>/Month</span>
                                </div>

                                <Link href="/sign-in">
                                    <a className="default-btn">Purchase Plan</a>
                                </Link>

                                <ul className="features-list">
                                    <li><i className="ri-check-line"></i> Up to 5 Social Media Account</li>
                                    <li><i className="ri-check-line"></i> Lifetime free Support</li>
                                    <li><i className="ri-check-line"></i> Export all analysis</li>
                                    <li><i className="ri-check-line"></i> 24/7 Support</li>
                                    <li><i className="ri-close-line"></i> Unlimited AI usage</li>
                                    <li><i className="ri-close-line"></i> Live Support</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-pricing-box active">
                                <div className="title">
                                    <h3>Team</h3>
                                    <p>Powerful & awesome elements</p>
                                </div>
                                <span className="popular">Most Popular</span>
                                <div className="price">
                                    $79 <span>/Month</span>
                                </div>

                                <Link href="/sign-in">
                                    <a className="default-btn">Purchase Plan</a>
                                </Link>

                                <ul className="features-list">
                                    <li><i className="ri-check-line"></i> Up to 5 Social Media Account</li>
                                    <li><i className="ri-check-line"></i> Lifetime free Support</li>
                                    <li><i className="ri-check-line"></i> Export all analysis</li>
                                    <li><i className="ri-check-line"></i> 24/7 Support</li>
                                    <li><i className="ri-check-line"></i> Live Support</li>
                                    <li><i className="ri-close-line"></i> Unlimited AI usage</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-pricing-box">
                                <div className="title">
                                    <h3>Business</h3>
                                    <p>Powerful & awesome elements</p>
                                </div>
                                <div className="price">
                                    $99 <span>/Month</span>
                                </div>

                                <Link href="/sign-in">
                                    <a className="default-btn">Purchase Plan</a>
                                </Link>

                                <ul className="features-list">
                                    <li><i className="ri-check-line"></i> Up to 5 Social Media Account</li>
                                    <li><i className="ri-check-line"></i> Lifetime free Support</li>
                                    <li><i className="ri-check-line"></i> Export all analysis</li>
                                    <li><i className="ri-check-line"></i> 24/7 Support</li>
                                    <li><i className="ri-check-line"></i> Live Support</li>
                                    <li><i className="ri-check-line"></i> Unlimited AI usage</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape12">
                    <img src="/images/shape/shape11.png" alt="shape" />
                </div>
                <div className="shape13">
                    <img src="/images/shape/shape15.png" alt="shape" />
                </div>
            </div>
        </>
    )
}

export default PricingPlanStyle2;