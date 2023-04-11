import WalletIcon from "@icons/WalletIcon";
import MarketIcon from "@icons/MarketIcon";
import ProfileIcon from "@icons/ProfileIcon";
import NavLink from "@molecules/NavLink";

export default function Navbar(){
    return (
        <nav className="bg-accent flex justify-center items-center h-20 w-full rounded-[30px] text-white gap-12 shadow-md">
            <NavLink
                icon={<WalletIcon/>}
                text="Wallet"
                to="/wallet"
            />
            <NavLink
                icon={<MarketIcon/>}
                text="Market"
                to="/market"
            />
            <NavLink
                icon={<ProfileIcon/>}
                text="Profile"
                to="/profile"
            /> 
        </nav>
    )
}