import ActionsHeader from "@organisms/ActionsHeader";
import FormReceive from "@organisms/FormReceive";
import MainLayout from "@layouts/MainLayout";


export default function ReceiveWallet(){
    return (
        <MainLayout header={<ActionsHeader title="Receive"/>}>
            <FormReceive/>
        </MainLayout>
    )
}