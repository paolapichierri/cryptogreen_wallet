import MainLayout from "@layouts/MainLayout";
import ActionsHeader from "@organisms/ActionsHeader";
import FormBuy from "@organisms/FormBuy";

export default function Buy(){
    return (
        <MainLayout header={<ActionsHeader title="Buy"/>}>
            <FormBuy></FormBuy>
        </MainLayout>
    )
}