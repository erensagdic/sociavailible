import React from 'react';
import Link from 'next/link';

const AppProgressStyle1 = () => {
    return (
        <>
            <div className="app-progress-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="app-progress-image text-center">
                                <img src="/images/new-images/progress.png" alt="app-img"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="app-progress-content">
                                <h2>Measure your marketing / PR efforts</h2>
                                <p> Find out how many people saw mentions for your brand. Track engagement, including
                                    Likes, Shares & Comments.</p>

                                <p><b>Automated reports </b>
                                    Save time using our daily/weekly reports. Export the data through PDF & Excel
                                    reports.</p>

                                <p><b>Important metrics </b>
                                    Track KPIs including Reach & Engagement.</p>


                                <Link href="/app-download">
                                    <a className="default-btn">Start Free Trial</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppProgressStyle1;