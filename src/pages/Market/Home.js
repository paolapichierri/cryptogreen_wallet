import SendIcon from "@icons/SendIcon";
import ReceiveIcon from "@icons/ReceiveIcon";
import DashboardCard from "@atoms/DashboardCard";
import TextSm from "@atoms/TextSm";
import IconButton from "@atoms/IconButton";
import MainHeader from "@organisms/MainHeader";
import MainLayout from "@layouts/MainLayout";

export default function Home(){
    return (
        <MainLayout header={<MainHeader title="Market" subtitle={<span>Welcome, <span className="font-bold">Paola</span></span>}/>}>

            <DashboardCard
                title='1.234'
                subtitle='0.0000036'
            />

            <div className="">
                <img className="w-full" src="/media/grafico.png" alt="" />
                <div className="flex justify-between mt-4 text-secondary">
                    <TextSm>1D</TextSm>
                    <TextSm>1W</TextSm>
                    <TextSm>1M</TextSm>
                    <TextSm>6M</TextSm>
                    <TextSm>1Y</TextSm>
                    <TextSm className="font-bold">All</TextSm>
                </div>
            </div>
            <div className="flex justify-evenly mt-10">
                
                <IconButton 
                    to="/market/buy" 
                    text="Buy" 
                    icon={<SendIcon/>}
                />

                <IconButton 
                    to="/market/sell" 
                    text="Sell" 
                    icon={<ReceiveIcon/>}
                />
            </div>   

        </MainLayout>
    )
}