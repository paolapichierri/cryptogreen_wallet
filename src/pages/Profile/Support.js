import MainLayout from "@layouts/MainLayout";
import ActionsHeader from "@organisms/ActionsHeader";
import FormSupport from "@organisms/FormSupport";

export default function Support(){
    return (
        <MainLayout header={<ActionsHeader title='Support'></ActionsHeader>}>
            <FormSupport/>
        </MainLayout>
    )
}