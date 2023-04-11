import { Link } from "react-router-dom";
import TextLg from "@atoms/TextLg";

export default function IconButton({text, to = "#", icon}){
    return (
        <Link to={to} className="w-40 block text-center">
            <button className="w-full bg-white shadow-xl flex justify-center items-center px-5 py-2 rounded-xl ">
                {icon}
            <TextLg className="font-bold text-primary mt-2 mx-2">{text}</TextLg>
            </button>
        </Link>
    )
}