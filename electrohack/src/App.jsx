import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import { HashLink } from 'react-router-hash-link'; // Import HashLink for smooth scrolling
import './App.css';
import Waves from './backgrounds/Waves/Waves';
import Heading from './assets/Heading';
import Navbar from './assets/Navbar';
import Event from './assets/Event';
import Organisers from './assets/Organisers';
import FAQs from './assets/FAQs';
import Sponsors from './assets/Sponsors';
import ContactUs from './assets/ContactUs';
import Footer from './assets/Footer';
import MarqueeText from './assets/MarqueeText';
import MarqueeText2 from './assets/MarqueeText2';
import IdeaSubmission from './assets/IdeaSubmission'; // Import the new IdeaSubmission component

function App() {
  return (
    <>
      
      <Routes>
        
        {/* Define routes for each page */}
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <div id="home" style={{ height: '41vw' }}>
                <Waves
                  lineColor="#ff8342"
                  backgroundColor="transparent"
                  waveSpeedX={0.02}
                  waveSpeedY={0.01}
                  waveAmpX={40}
                  waveAmpY={20}
                  friction={0.9}
                  tension={0.01}
                  maxCursorMove={120}
                  xGap={12}
                  yGap={36}
                  style={{ zIndex: '-1000', height: '50vw' }}
                  className="opacity-60"
                />
                <Heading />
              </div>
              <MarqueeText2 />
              <div className='flex flex-row justify-around mt-10'>
                    <img src={'/images.png'}/>
                    <img src={'/VIT 40 years logo.png'} style={{height:"10vw"}} className='mt-2'/>
                    <img src={'/Asset 1img.png'} style={{height:"8vw"}} className='mt-4'/>
              </div>
              <div id="event">
                <Event />
                <MarqueeText />
              </div>
              <div id="organizers">
                <Organisers />
                <MarqueeText2 />
              </div>
              <div id="faqs">
                <FAQs />
                <MarqueeText />
              </div>
              <div id="sponsors">
                <Sponsors />
                <MarqueeText2 />
              </div>
              <div id="contact-us">
                <ContactUs />
              </div>
              
            </div>
          }
        />
        {/* Route for Idea Submission */}
        <Route path="/tracks" element={<IdeaSubmission />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
