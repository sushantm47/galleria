import React  from 'react';
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Footer from './footer/Footer'
import ImageCard from './ImageCard/ImageCard'
import './landingPage.css';
function LandingPage(props) {
    const users=['gerandeklerk','erondu','zmachacek']
    return (
        <div className="container">
            <Navbar/>
            <div className="sub-container">
                <Sidebar/>
                <div className="sub-container-images">
                    {users.map((u) =>  <ImageCard user={u}></ImageCard>)}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default LandingPage;