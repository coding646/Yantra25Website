import React from 'react';
import './App.css';
import Waves from './backgrounds/Waves/Waves';
import Heading from './assets/Heading';
import Marquee from 'react-fast-marquee';
import Navbar from './assets/Navbar';
import Event from './assets/Event'

function App() {
  return (
    <div>
      <Navbar />
      <div style={{height:"41vw"}}>
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
          style={{ zIndex: "-1000", height:"50vw" }}
          className="opacity-60"
        />
        <Heading />
      </div>
      <div style={{height:"10vw"}}>
        <div style={{width:"99vw", height:"0.2vw", backgroundColor:"#C33149"}}></div>
      <Marquee direction='right' style={{fontSize:"5vw", color:"#C33149", top:"1.5vw"}}>
    <svg xmlns="http://www.w3.org/2000/svg" style={{width:"3vw"}}  fill="currentColor" className="bi bi-caret-left-fill " viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" style={{width:"3vw"}} fill="currentColor" className="bi bi-caret-left " viewBox="0 0 16 16">
  <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" style={{width:"3vw"}} fill="currentColor" className="bi bi-caret-left " viewBox="0 0 16 16">
  <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/>
</svg>
    <span className="ml-5 mr-5" style={{fontFamily:'"Jersey 15", serif', fontSize:"5rem"}}>ELECTROHACK</span>
    <svg xmlns="http://www.w3.org/2000/svg" style={{width:"3vw"}} fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" style={{width:"3vw"}} fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" style={{width:"3vw"}} fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>


<svg xmlns="http://www.w3.org/2000/svg" style={{width:"3vw"}}  fill="currentColor" className="bi bi-caret-left-fill " viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" style={{width:"3vw"}} fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
  <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" style={{width:"3vw"}} fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
  <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/>
</svg>
    <span className="ml-5 mr-5" style={{fontFamily:'"Jersey 15", serif', fontSize:"5rem"}}>ELECTROHACK</span>
    <svg xmlns="http://www.w3.org/2000/svg" style={{width:"3vw"}} fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" style={{width:"3vw"}} fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" style={{width:"3vw"}} fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>
    
  </Marquee>
  <div style={{width:"99vw", height:"0.2vw", backgroundColor:"#C33149", marginTop:"3.5vw"}}></div>
      </div>
      <Event />
    </div>
  );
}

export default App;
