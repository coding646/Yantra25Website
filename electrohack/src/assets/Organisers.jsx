import react from "react";

export default function Organisers(){
    return(
        <div style={{marginTop:"7vw", marginBottom:"7vw"}}>
            <div className="flex flex-row justify-center text-white gradienttext1 " style={{fontSize:"5rem", marginBottom:"5vw"}}>The Organisers</div>
            <div className="flex flex-row justify-center text-white font-bold gradienttext2" style={{fontSize:"5rem"}}>IEEE CAS VIT</div>
            <div className="flex flex-row justify-center mt-12 ml-10 mr-10" style={{gap:'8vw'}}>
                <img src={'../../public/logo (4).png'} style={{width:"20vw", height:"20vw", marginTop:"2vw"}}></img>
                <div className="text-white mt-12" style={{fontSize:"1.7vw", fontFamily:'"Montserrat", serif'}}>Lorem ipsum odor amet, consectetuer adipiscing elit. Semper turpis non congue litora; iaculis penatibus quis duis. Accumsan netus malesuada, primis conubia diam primis. Fringilla pulvinar odio tellus mauris eros turpis felis. Orci quisque euismod eros est urna aenean gravida.</div>
                <img src={'../../public/8ad9d580-2c78-470e-b2d6-ac994b86072e.jpg'} style={{width:"17vw", height:"22.5vw", borderRadius:"5px"}}></img>
            </div>
            <div className="flex flex-row justify-center text-white font-bold gradienttext3 mt-24" style={{fontSize:"5rem"}}>ISOI VIT</div>
            <div className="flex flex-row justify-center mt-12 ml-10 mr-10" style={{gap:'8vw'}}>
                <img src={'../../public/WhatsApp Image 2025-01-18 at 00.21.17.jpeg'} style={{height:"25vw", marginTop:"2vw", borderRadius:"5px"}}></img>
                <div className="text-white mt-12" style={{fontSize:"1.7vw", fontFamily:'"Montserrat", serif'}}>Lorem ipsum odor amet, consectetuer adipiscing elit. Semper turpis non congue litora; iaculis penatibus quis duis. Accumsan netus malesuada, primis conubia diam primis. Fringilla pulvinar odio tellus mauris eros turpis felis. Orci quisque euismod eros est urna aenean gravida.</div>
                <img src={'../../public/logo black.png'} style={{width:"24vw", height:"14vw", borderRadius:"5px", marginTop:"5vw"}}></img>
            </div>
        </div>
    )
}