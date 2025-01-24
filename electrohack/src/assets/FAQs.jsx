import react from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '../components/ui/accordion'

export default function FAQs(){
    return(
        <div className="mt-12 mb-24">
            <div className="flex flex-col text-white gap-24 lg:flex-row font-bold ml-24">
                <div className="text-6xl gradienttext1 mt-24" style={{width:"30vw"}}>Frequently Asked Questions</div>
                <div style={{width:"50vw"}}>
                <Accordion type="single"  collapsible className="w-full bg-black text-white mt-12">
      <AccordionItem value="item-1" className="border-gray-500">
        <AccordionTrigger  style={{fontSize:"1.5vw"}}>How many people can register in a team ?</AccordionTrigger>
        <AccordionContent className=" font-light" style={{fontSize:"1.2vw"}}>3-5 students can be registered in a team.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-gray-500">
        <AccordionTrigger style={{fontSize:"1.5vw"}}>What should I do if I don't have a team?</AccordionTrigger>
        <AccordionContent className=" font-light" style={{fontSize:"1.2vw"}}>
        No problem, we will arrange a team for you.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-gray-500"> 
        <AccordionTrigger style={{fontSize:"1.5vw"}}>Should we get our own hardware components?</AccordionTrigger>
        <AccordionContent className=" font-light" style={{fontSize:"1.2vw"}}>
        It's recommended to get your own components, but nevertheless we'll also provide the components available in the inventory list
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="border-gray-500">
        <AccordionTrigger style={{fontSize:"1.5vw"}}>Will we be allowed to leave the venue during the night time?</AccordionTrigger>
        <AccordionContent className=" font-light" style={{fontSize:"1.2vw"}}>
        Only to use the restrooms, and your ID card will be taken for the time period, but you won't be allowed to go to your room until 6:00 am.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="border-gray-500 ">
        <AccordionTrigger style={{fontSize:"1.5vw"}}>Is there any entry fee or cash prize involved?</AccordionTrigger>
        <AccordionContent className=" font-light" style={{fontSize:"1.2vw"}}>
          The participation is free, whereas there are cash prizes for the winners and certificates for all participants.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6" className="border-gray-500"> 
        <AccordionTrigger style={{fontSize:"1.5vw"}}>Are there any prerequisites for the event?</AccordionTrigger>
        <AccordionContent className=" font-light" style={{fontSize:"1.2vw"}}>
        Yes, hunger to learn and innovate.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
                </div>
            </div>
        </div>
    )
}