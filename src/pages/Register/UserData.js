import GuestLayout from "@layouts/GuestLayout";
import FormUserData from "@organisms/FormUserData";

export default function UserData(){
    return (
        <GuestLayout title="Register">
            <FormUserData></FormUserData>
        </GuestLayout>
    )
}