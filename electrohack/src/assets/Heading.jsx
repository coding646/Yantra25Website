import react from "react"
import SpotlightCard from "./SpotlightCard/SpotlightCard"
import {Link} from "react-router-dom"
export default function Heading(){
    return <div style={{zIndex:"10000", width:"99vw", fontSize:"3vw", top:"18vw"}} className="absolute flex justify-center text-white font-bold">
        <div className="flex flex-col items-center" style={{gap:"3vw"}}>
            <div className="getready">Get Ready for the Biggest Electronic Hackathon in VIT</div>
            <div className="text-center font-normal ml-20 mr-20" style={{fontSize:"1.5vw"}}>Prepare for a deep dive into the realm of electronics with ElectroHack as you venture through the latest technology. Amalgamate AI with cutting edge tracks and inspire the world with innovative and sustainable solutions as you carve your way to victory. </div>
            <div
  className="font-medium bg-transparent hover:bg-orange-700 pl-5 pr-5 pt-3 pb-4 submitbutton"
  style={{ borderRadius: "20px" }}
>
  <Link
    to="/tracks" // Route to navigate to
    className="flex flex-row gap-2"
    style={{ fontSize: "1.5vw" }}
  >
    Tracks & Problems
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-arrow-up-right mt-1"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
      />
    </svg>
  </Link>
</div>

        </div>
    </div>
};