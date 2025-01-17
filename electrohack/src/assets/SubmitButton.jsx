import react from "react";
import SpotlightCard from "./SpotlightCard/SpotlightCard"

export default function SubmitButton(){
    return(
        <div>
            <SpotlightCard className="custom-spotlight-card absolute" spotlightColor="rgba(0, 229, 255, 0.2)">
                Submit Idea 
</SpotlightCard>
        </div>
    )
}

