import FormDataAccess from '@organisms/FormDataAccess';
import GuestLayout from '@layouts/GuestLayout';


export default function AccessData() {
    return (
        <GuestLayout title="Register">
            <FormDataAccess></FormDataAccess>
        </GuestLayout>
    )
}