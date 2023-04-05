// import ArrowUp from "@icons/ArrowUp";
import ArrowUp from "@icons/ArrowDown";
import MainHeader from "@organisms/MainHeader";
import DashboardCard from "@atoms/DashboardCard";

export default function Home(){
    return (
        <div className="h-screen bg-white flex flex-col font-sans">
            <div className="grow pt-16">
                <MainHeader title="Wallet" subtitle={<span>Welcome, <span className="font-bold">Paola</span></span>}>
                </MainHeader>

                <DashboardCard
                    title='1.234'
                    subtitle='0.0000036'
                />
                
                <div className="flex justify-around mt-10 font-bold text-xl">
                    <h2>Last Transactions</h2>
                    <h2 className="text-accent ">View All</h2>
                </div>

                
            </div>
        </div>
    )
}