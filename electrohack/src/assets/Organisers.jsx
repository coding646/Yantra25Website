import react from "react";

export default function Organisers(){
    return(
        <div style={{marginTop:"7vw", marginBottom:"7vw"}}>
            <div className="flex flex-row justify-center text-white gradienttext1 " style={{fontSize:"5rem", marginBottom:"5vw"}}>The Organisers</div>
            <div className="flex flex-row justify-center text-white font-bold gradienttext2" style={{fontSize:"5rem"}}>IEEE CAS VIT</div>
            <div className="flex flex-row justify-center mt-12 ml-10 mr-10" style={{gap:'8vw'}}>
                <img src={'../../public/logo (4).png'} style={{width:"20vw", height:"20vw", marginTop:"2vw"}}></img>
                <div className="text-white mt-12" style={{fontSize:"1.7vw", fontFamily:'"Montserrat", serif'}}>IEEE Circuits and systems is a technical chapter of VIT Vellore with the motto of pioneering solutions to fundamental and applied problems in the field of circuits and systems. We aim to assist and collaborate with like-minded people and help them develop through technical sessions and projects, helping them gain practical knowledge with real-world applications.</div>
                <img src={'../../public/8ad9d580-2c78-470e-b2d6-ac994b86072e.jpg'} style={{width:"17vw", height:"22.5vw", borderRadius:"5px"}}></img>
            </div>
            <div className="flex flex-row justify-center text-white font-bold gradienttext3 mt-24" style={{fontSize:"5rem"}}>ISOI VIT</div>
            <div className="flex flex-row justify-center mt-12 ml-10 mr-10" style={{gap:'8vw'}}>
                <img src={'../../public/WhatsApp Image 2025-01-18 at 00.21.17.jpeg'} style={{height:"25vw", marginTop:"2vw", borderRadius:"5px"}}></img>
                <div className="text-white mt-12" style={{fontSize:"1.7vw", fontFamily:'"Montserrat", serif'}}>ISOI-VIT (INSTRUMENT SOCIETY OF INDIA) is a technical chapter committed to organizing technical and non-technical events with the aim of enriching technical knowledge and providing hands-on experience of working in real time professional environment. At ISOI-VIT, we believe in fostering a culture of innovation and learning among our members.</div>
                <img src={'../../public/logo black.png'} style={{width:"24vw", height:"14vw", borderRadius:"5px", marginTop:"5vw"}}></img>
            </div>
        </div>
    )
}