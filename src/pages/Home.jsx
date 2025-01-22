import Header from '../components/Header';
import Footer from '../components/Footer';
import subsidyImage from '../assets/Subsidy.jpg'; 
import informationImage from '../assets/information.jpg'; 
import detailsImage from '../assets/Details.png'; 
import communicationImage from '../assets/communication.jpg'; 
import '../index.css';

const Home = () => {
    console.log("Home rendered");
    return (
        <>
            <Header selectedPage="home" />
            <div className="main">
                <div className="info">
                    <h1>Simplifying Access<br /> to Government Subsidies</h1>
                    <p>
                        The simplifies access to government subsidies by centralizing information and offering tailored notifications to users. 
                        It features a user-friendly design, ensuring accessibility for all, and provides real-time updates about new opportunities and deadlines.
                    </p>
                
                </div>
                <img src={subsidyImage} alt="Subsidy" />
            </div>

            {/* Recent Posts Section */}
            <div className="recent">
                <div className="header">
                    <h4>Recent Posts</h4>
                    <button className='recent-button'>View all</button>
                </div>
                <div className="posts">
                    <div className="post-item">
                        <h3>Information of Subsidy</h3>
                        <div className="info">
                            <h5>12 Jan 2024</h5>
                            <h5>|</h5>
                            <h5>Design, Layout</h5>
                        </div>
                        <p>Explain about it</p>
                    </div>
                    <div className="post-item">
                        <h3>Information of Subsidy</h3>
                        <div className="info">
                            <h5>12 Jan 2024</h5>
                            <h5>|</h5>
                            <h5>Design, Layout</h5>
                        </div>
                        <p>Explain about it</p>
                    </div>
                </div>
            </div>

            {/* Featured Works Section */}
            <div className="recent">
                <h4>Featured Works</h4>
            

                <div className="featured">
                    <div className="item">
                        <img src={informationImage} alt="Information" />
                        <div className="details">
                            <h4>Information</h4>
                            <div className="item-info">
                                <div className="year-badge">2024</div>
                                <h5>Find what Subsidy you are looking for</h5>
                            </div>
                            <p>ime.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={detailsImage} alt="Simplified Subsidy Access" />
                        <div className="details">
                            <h4>Simplified Subsidy Access</h4>
                            <div className="item-info">
                                <div className="year-badge">2024</div>
                                <h5>How to get a subsidy</h5>
                            </div>
                            <p>ime.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={communicationImage} alt="Localized Support" />
                        <div className="details">
                            <h4>Localized Support Network</h4>
                            <div className="item-info">
                                <div className="year-badge">2024</div>
                                <h5>Communicate with users</h5>
                            </div>
                            <p>xime.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
