import GuestLayout from "@layouts/GuestLayout";
import FormInput from "@molecules/FormInput";
import Button from "@atoms/Button";

export default function UserData(){
    return (
        <form className="flex flex-1 flex-col justify-between gap-5 mt-6">
            <div className="flex flex-col justify-between">
                <FormInput
                    id='name'
                    text='Name'
                    type='text'
                    required={true}
                    placeholder='Enter your name'
                />
                <FormInput
                    id='surname'
                    text='Surname'
                    type='text'
                    required={true}
                    placeholder='Enter your surname'
                />
                <FormInput
                    id='birthday'
                    text='Birthday'
                    type='date'
                    required={true}
                    placeholder='Enter your Birthday'

                />
                
                <FormInput
                    id='address'
                    text='Address'
                    type='text'
                    required={true}
                    placeholder='Enter your address'
                />  
                <div className="grid grid-cols-2 gap-4 ">
                    <FormInput
                        id='city'
                        text='City'
                        type='text'
                        required={true}
                        placeholder='Enter your city'
                    />
                    <FormInput
                        id='postalCode'
                        text='Postal Code'
                        type='text'
                        required={true}
                        placeholder='Enter your postal code'
                    />
                </div>
            </div>
            <div className="mx-auto mb-6">
                <Button to="/register/upload-documents">Next</Button>
            </div>
        </form>
    )
}