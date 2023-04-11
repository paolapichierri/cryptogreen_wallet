import ActionsHeader from "@organisms/ActionsHeader";
import MainLayout from "../../layouts/MainLayout";
import FormSend from "@organisms/FormSend";

export default function SendWallet(){
    return (
        <MainLayout header={<ActionsHeader title="Send"/>}>
            <FormSend/>
        </MainLayout>
    )
}