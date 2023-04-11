import Transaction from "@molecules/Transaction";
import ActionsHeader from "@organisms/ActionsHeader";
import MainLayout from "@layouts/MainLayout";

export default function WalletMovements(){

    const transactions = [
        {type: 'Received' , date: '01/02/2023', amount: '1.212.00', conversion: '0,040'},
        {type: 'Received' , date: '03/02/2023', amount: '192.00', conversion: '0,0064'},
        {type: 'Sent' , date: '22/12/2022', amount: '2.322.00', conversion: '0,077'},
        {type: 'Received' , date: '02/12/2022', amount: '2.144.00', conversion: '0,071'},
        {type: 'Sent' , date: '11/11/2022', amount: '1.899.00', conversion: '0,063'},
        {type: 'Received' , date: '18/10/2022', amount: '133.00', conversion: '0,0044'},
        {type: 'Received' , date: '01/10/2022', amount: '3404.00', conversion: '0,11'},
        {type: 'Sent' , date: '05/04/2022', amount: '540.00', conversion: '0,018'},
        {type: 'Sent' , date: '12/09/2021', amount: '1200.00', conversion: '0,040'},
        {type: 'Received' , date: '06/06/2021', amount: '200.00', conversion: '0,0067'},
    ]

    return (
        <MainLayout header={<ActionsHeader title="Movements"/>}>
            <div className="h-full flex flex-col justify-center">
                <div className="flex mb-8">
                    <h2 className="font-bold text-xl text-primary">Filter: </h2>
                    <button className="grow mx-4 bg-accent text-white rounded-full text-xl font-bold">Sent</button>
                    <button className="grow mx-4 bg-accent text-white rounded-full text-xl font-bold">Received</button>
                </div>
                <div className="overflow-y-scroll max-h-96">
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
                </div>
                
            </div>
        </MainLayout>
    )
}