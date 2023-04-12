import ButtonBlock from "@atoms/ButtonBlock";
import MainHeader from "@organisms/MainHeader";
import MainLayout from "@layouts/MainLayout";

export default function Home(){
    return (
        <MainLayout 
            header={<MainHeader title="Profile" subtitle={<span>Welcome, <span className="font-bold">Paola</span> </span>}></MainHeader>}
        >

        <div className="mt-10 gap-3">
            <ButtonBlock type='secondary' text='Edit user data' to='/profile/edit-user-data'></ButtonBlock>
            <ButtonBlock type='secondary' text='Edit password' to='/profile/edit-password'></ButtonBlock>
            <ButtonBlock type='secondary' text='Support'></ButtonBlock>
            <ButtonBlock type='secondary' text='F.A.Q.'></ButtonBlock>
            <ButtonBlock type='primary' text='Logout' to='/'></ButtonBlock>
        </div>
        


        </MainLayout>
    )
}