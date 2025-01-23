import react from "react";

export default function Sponsors(){
    return(
        <div className="mt-16 mb-16">
            <div style={{fontSize:"6vw"}} className="gradienttext1 text-center mb-12">The Sponsors</div>
            <div style={{fontSize:"3vw"}} className="text-center mb-12 text-white font-light">Title Sponsors</div>
            <div>
                <div className="flex flex-row ml-16 justify-center gap-24">
                    <img src={'../../public/sponsorlogo1.jpg'} style={{height:"10vw"}}/>
                    <img src={'../../public/sponsorlogo2.jpg'} style={{height:"5vw"}} className="mt-8"/>
                </div>
                <div className="text-white ml-12 mr-12 text-center mt-16" style={{fontFamily:'"Montserrat", serif'}}>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Natoque nulla lectus diam magnis et. Massa conubia lectus ex fames adipiscing pellentesque sodales vel. Pulvinar ipsum dictum elementum inceptos dui montes. Tristique auctor libero eget potenti faucibus. Hendrerit curae eu urna quisque potenti quisque tempor venenatis tellus. Dapibus accumsan sociosqu lacus faucibus mi praesent nascetur. Mattis est sed potenti litora tortor. Nec commodo tincidunt facilisis bibendum morbi dictumst. Malesuada lacus metus egestas ante facilisi magnis efficitur vestibulum. Magna congue ex ut viverra adipiscing nisi. Varius molestie egestas odio, class varius pharetra. Curae magnis sagittis fringilla sapien ornare netus lacus. Etiam quisque aliquet gravida auctor dignissim. In tempor pretium tempor purus commodo class nec. 
                </div>
            </div>

            <div style={{fontSize:"3vw"}} className="text-center mb-12 mt-16 text-white font-light">Co-Sponsor</div>
            <div>
                <div className="flex flex-row justify-center gap-36">
                    <img src={'../../public/easemytrip-com-logo-vector.png'} style={{height:"10vw"}} className="mt-2"/>
                </div>
                <div className="text-white ml-12 mr-12 text-center mt-12" style={{fontFamily:'"Montserrat", serif'}}>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Natoque nulla lectus diam magnis et. Massa conubia lectus ex fames adipiscing pellentesque sodales vel. Pulvinar ipsum dictum elementum inceptos dui montes. Tristique auctor libero eget potenti faucibus. Hendrerit curae eu urna quisque potenti quisque tempor venenatis tellus.
                </div>
            </div>
        </div>
    )
}