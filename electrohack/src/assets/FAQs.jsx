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
        <AccordionTrigger  style={{fontSize:"1.5vw"}}>Is it accessible?</AccordionTrigger>
        <AccordionContent className=" font-light" style={{fontSize:"1.2vw"}}>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-gray-500">
        <AccordionTrigger style={{fontSize:"1.5vw"}}>Is it styled?</AccordionTrigger>
        <AccordionContent className=" font-light" style={{fontSize:"1.2vw"}}>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-gray-500"> 
        <AccordionTrigger style={{fontSize:"1.5vw"}}>Is it animated?</AccordionTrigger>
        <AccordionContent className=" font-light" style={{fontSize:"1.2vw"}}>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="border-gray-500">
        <AccordionTrigger style={{fontSize:"1.5vw"}}>Is it accessible?</AccordionTrigger>
        <AccordionContent className=" font-light" style={{fontSize:"1.2vw"}}>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="border-gray-500 ">
        <AccordionTrigger style={{fontSize:"1.5vw"}}>Is it styled?</AccordionTrigger>
        <AccordionContent className=" font-light" style={{fontSize:"1.2vw"}}>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6" className="border-gray-500"> 
        <AccordionTrigger style={{fontSize:"1.5vw"}}>Is it animated?</AccordionTrigger>
        <AccordionContent className=" font-light" style={{fontSize:"1.2vw"}}>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
                </div>
            </div>
        </div>
    )
}