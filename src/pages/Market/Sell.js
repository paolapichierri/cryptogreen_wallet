import MainLayout from "@layouts/MainLayout";
import FormSell from "@organisms/FormSell";
import ActionsHeader from "@organisms/ActionsHeader";

export default function Sell(){
    return (
        <MainLayout header={<ActionsHeader title="Sell"></ActionsHeader>}>
            <FormSell></FormSell>
        </MainLayout>
    )
}