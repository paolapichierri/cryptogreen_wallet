import ReceiveIcon from "@icons/ReceiveIcon";
import SendIcon from "@icons/SendIcon";
import IconButton from "@atoms/IconButton";
import TextLg from "@atoms/TextLg";
import DashboardCard from "@atoms/DashboardCard";
import Transaction from "@molecules/Transaction";
import MainHeader from "@organisms/MainHeader";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";

export default function Home(){

    const transactions = [
        {type: 'Sent' , date: '02/12/2023', amount: '2.322.00', conversion: '0.00009752'},
        {type: 'Received' , date: '01/02/2023', amount: '1.212.00', conversion: '0.0000509'},
    ]

    return (
        <MainLayout header={<MainHeader title="Wallet" subtitle="Welcome, Paola"/>}>
            
            <DashboardCard
                title='1.234'
                subtitle='0.0000036'
            />
                
            <div className="flex justify-around mt-10 font-bold">
                <TextLg className="text-primary">Last Transactions</TextLg>
                <Link to="/wallet/movements" className="text-accent underline decoration-2">View All</Link>
            </div>
            
            {
                transactions.map((transaction, index) => {
                    return <Transaction 
                        key={index} 
                        type={transaction.type} 
                        date={transaction.date}
                        amount={transaction.amount} 
                        conversion={transaction.conversion}
                    />
                })
            }
             
            <div className="flex justify-evenly mt-10">
                
                <IconButton 
                    to="/wallet/send" 
                    text="Send" 
                    icon={<SendIcon/>}
                />

                <IconButton 
                    to="/wallet/receive" 
                    text="Receive" 
                    icon={<ReceiveIcon/>}
                />
            </div>              
            
        </MainLayout>
    )
}