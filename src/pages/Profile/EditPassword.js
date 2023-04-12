import FormEditPassword from "@organisms/FormEditPassword";
import ActionsHeader from "@organisms/ActionsHeader";
import MainLayout from "@layouts/MainLayout";

export default function EditPassword(){
    return (
        <MainLayout header={<ActionsHeader title="Edit password"></ActionsHeader>}>
            <FormEditPassword/>
        </MainLayout>
    )
}