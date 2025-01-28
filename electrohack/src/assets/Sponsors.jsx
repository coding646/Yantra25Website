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
                Thriveni Earthmovers is a billion-dollar mining conglomerate operating across India, Indonesia, and Africa, with ISO 9001:2000 and ISO 14001:2004 certifications. The company manages over 70 sites across 12 commodities, employing 17,000 people worldwide. A key strategic partnership with Lloyds Metals & Energy Ltd (LMEL), where TEMPL holds 35% ownership and serves as co-promoter, has transformed LMEL into a USD 4.5 billion market cap company. This collaboration integrates TEMPL's mining expertise with LMEL's steel manufacturing capabilities, including 270,000 TPA DRI production and an upcoming 72,000 MTPA steel plant, creating a robust mining-to-metals value chain.
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
