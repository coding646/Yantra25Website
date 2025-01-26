import react from "react";

export default function Sponsors(){
    return(
        <div className="mt-16 mb-16">
            <div style={{fontSize:"6vw"}} className="gradienttext1 text-center mb-12">The Sponsors</div>
            <div style={{fontSize:"3vw"}} className="text-center mb-12 text-white font-light">Title Sponsors</div>
            <div>
                <div className="flex flex-row ml-16 justify-center gap-24">
                    <img src={'/sponsorlogo1.jpg'} style={{height:"10vw"}}/>
                    <img src={'/sponsorlogo2.jpg'} style={{height:"5vw"}} className="mt-8"/>
                </div>
                <div className="text-white ml-12 mr-12 text-center mt-16" style={{fontFamily:'"Montserrat", serif'}}>
                Thriveni Earth Movers Limited is a leading mining company with operations in India, Indonesia, and Africa. Specializing in commodities like iron ore, copper, and coal, Thriveni is committed to sustainable practices and community engagement. The company emphasizes technological innovation and outcome-driven solutions, exemplified by its state-of-the-art Thriveni Rebuild Centre, which has refurbished over 1,000 heavy earth-moving machines, significantly reducing CO₂ emissions. In December 2024, Lloyds Metals and Energy Limited acquired a 79.82% stake in Thriveni Earthmovers and Infra, further strengthening its position in the mining sector 
                </div>
            </div>

            <div style={{fontSize:"3vw"}} className="text-center mb-12 mt-16 text-white font-light">Co-Sponsor</div>
            <div>
                <div className="flex flex-row justify-center gap-36">
                    <img src={'/easemytrip-com-logo-vector.png'} style={{height:"10vw"}} className="mt-2"/>
                </div>
                <div className="text-white ml-12 mr-12 text-center mt-12" style={{fontFamily:'"Montserrat", serif'}}>
                EaseMyTrip is a trusted name in India's tourism sector, known for offering competitive fares and seamless travel services. With a robust network of over 70,000 travel agents, we are dedicated to delivering personalized assistance and a comprehensive range of exceptional services.
                </div>
            </div>
        </div>
    )
}