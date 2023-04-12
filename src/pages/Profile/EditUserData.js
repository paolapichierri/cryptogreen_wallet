import MainLayout from "@layouts/MainLayout";
import FormEditUserData from "@organisms/FormEditUserData";
import ActionsHeader from "@organisms/ActionsHeader";

export default function EditUserData(){
    return (
        <MainLayout header={<ActionsHeader title="Edit user data"/>}>
            <FormEditUserData/>
        </MainLayout>
    )
}