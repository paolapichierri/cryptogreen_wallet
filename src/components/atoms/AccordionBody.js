export default function AccordionBody({children, active, last}){

    //se è l'ultimo elemento il bordo è arrotondato altrimenti non c'è bordo
    // let isLast = last ? " rounded-b-xl" : " border-b"
 
    return (
        <div className={active ? '' : 'hidden'} aria-labelledby="accordion-collapse-heading-1">
            <div className="p-5 border border-secondary" >
                <p className="text-secondary">{children}</p>
            </div>
        </div>
    )
}