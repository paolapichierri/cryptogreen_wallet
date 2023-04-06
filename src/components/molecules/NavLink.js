import TextSm from "@atoms/TextSm";
import { NavLink as Link } from "react-router-dom";

export default function NavLink({text, icon, to = "#"}){
    return (
        <Link to={to} className={({isActive}) => isActive ? "flex flex-col items-center" : 'flex flex-col items-center opacity-70'}>
            {icon}
            <TextSm className="font-bold uppercase">{text}</TextSm>
        </Link>
    )
}