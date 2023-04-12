import Button from "@atoms/Button";
import FormInput from "@molecules/FormInput";

export default function FormEditPassword(){
    return(
        <form className='flex flex-col justify-between gap-5 mt-5'>
        <div className='flex flex-col justify-between gap-5'>
        
        <FormInput
            id='currentPassword'
            text='Current Password'
            type='password'
            required={true}
            placeholder='Enter your current password'
        />
        
        <FormInput
            id='newPassword'
            text='New Password'
            type='password'
            required={true}
            placeholder='Enter your new password'
        />  

        <FormInput
            id='confirmNewPassword'
            text='Confirm new password'
            type='password'
            required={true}
            placeholder='Confirm your new password'
        />
        </div>
        <div className="text-center m-[80px] flex flex-col items-center">
            <Button to="/profile">Confirm</Button>
        </div>
    </form>
    )
}