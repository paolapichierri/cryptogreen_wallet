export default function AccordionHeader({children, active, first = false, last = false, onClick}){
    let isFirst = first ? " rounded-t-xl border-b-0" : ""
    let isLast = last ? " border-b" : "";
    let isActive = active ? " bg-accent text-white" : " text-primary";

    let additionalClasses = isFirst + isLast + isActive;

    let accordionArrow = active ? " rotate-180 " : "";

    return (
        <h2 onClick={onClick}>
            <button type="button" className={"flex items-center justify-between w-full p-5 font-bold text-left border  border-secondary text-lg" + additionalClasses}>
                <span>{children}</span>
                <svg className={"w-6 h-6 shrink-0 " + accordionArrow} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        </h2>
    )
}
