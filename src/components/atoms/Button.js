import { Link } from "react-router-dom";

export default function Button({children , type = 'accent' , to = "#"}){
    const styles = {
        primary: 'bg-primary',
        accent: 'bg-accent',
        secondary: 'bg-secondary',
        white: 'bg-white-dark',
    }

    return (
        <button className='w-48 '>
              <Link to={to} className={"w-full bg-accent shadow-xl fill-white flex justify-center items-center py-3 rounded-3xl " + styles[type]}>
                <p className='text-2xl text-white font-bold tracking-wide uppercase'>{children}</p>
              </Link>
        </button>
    )
}