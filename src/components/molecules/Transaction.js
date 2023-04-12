import ArrowDown from "@icons/ArrowDown";
import ArrowUp from "@icons/ArrowUp";
import TextLg from "@atoms/TextLg";
import TextSm from "@atoms/TextSm";

export default function Transaction({type, date, amount, conversion}){

    const textStyle = type === 'Sent' ? 'text-red-500 font-bold' : 'text-accent font-bold';

    return (
        <div className="flex justify-around items-center">
            <div className="flex items-center my-4 mr-5">
                {type === 'Sent' ? <ArrowUp fill="fill-red-500"/> : <ArrowDown fill="fill-accent"/>}
                
                <div className="ml-2">
                    <TextLg className="text-primary font-semibold capitalize">{type}</TextLg>
                    <TextSm className="text-secondary">{date}</TextSm>
                </div>
            </div>
            <div className="text-end">
                <TextLg className={textStyle} >{type === 'Sent' ? '-' : '+'} {amount}</TextLg>
                <TextSm className="text-secondary">{conversion} BTC</TextSm>
            </div> 
        </div>
    )
}

