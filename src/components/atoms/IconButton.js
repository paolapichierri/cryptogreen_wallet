import { Link } from "react-router-dom";
import TextLg from "@atoms/TextLg";

export default function IconButton({text, to = "#", icon}){
    return (
        <Link to={to} className="w-32 block text-center">
            <button className="w-full bg-white-dark shadow-xl flex justify-center px-5 py-3 rounded-xl">
                {icon}
            </button>
            <TextLg className="font-bold text-primary mt-2">{text}</TextLg>
        </Link>
    )
}