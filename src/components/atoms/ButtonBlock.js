import { Link } from "react-router-dom"
import ArrowRight from "@icons/ArrowRight";
import TextLg from "@atoms/TextLg";

export default function ButtonBlock({text, type = 'accent', to = '#'}){
    
    const styles = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        accent: 'bg-accent',
    }

    return (
        <div className="flex flex-col my-4">
            <Link to={to} className={"h-16 flex justify-between items-center px-4 rounded-2xl text-white font-bold " + styles[type]}>
                <TextLg>{text}</TextLg>
                <ArrowRight/>
            </Link>
        </div>
    )

}