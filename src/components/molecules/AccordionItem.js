import AccordionBody from "@atoms/AccordionBody";
import AccordionHeader from "@atoms/AccordionHeader";
import { useState } from "react";

export default function AccordionItem({title, body, active = false, first = false, last = false}){
    const [isActive, setIsActive] = useState(active)

    function toggleAccordion(){
        setIsActive(!isActive);
    }

    return ( 
        <div>
            <AccordionHeader active={isActive} first={first} last={last} onClick={toggleAccordion}>
                {title}
            </AccordionHeader>
            <AccordionBody active={isActive} >
                {body}
            </AccordionBody>
        </div>
    )
}