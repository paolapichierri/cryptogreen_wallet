import Button from "@atoms/Button";
import FormInput from "@molecules/FormInput";

export default function FormEditUserData(){
    return (
        <form className="flex flex-1 flex-col justify-between gap-5 mt-6">
            <div className="flex flex-col justify-between">
                <FormInput
                    id='name'
                    text='Name'
                    type='text'
                    required={true}
                    placeholder='Enter your name'
                    value='Paola'
                />
                <FormInput
                    id='surname'
                    text='Surname'
                    type='text'
                    required={true}
                    placeholder='Enter your surname'
                    value='Pichierri'
                />
                <FormInput
                    id='birthday'
                    text='Birthday'
                    type='date'
                    required={true}
                    placeholder='Enter your Birthday'
                    value='2000-04-05'
                />
                
                <FormInput
                    id='address'
                    text='Address'
                    type='text'
                    required={true}
                    placeholder='Enter your address'
                    value='Via Roma, 1'
                />  

                <div className="grid grid-cols-2 gap-4 ">
                    <FormInput
                        id='city'
                        text='City'
                        type='text'
                        required={true}
                        placeholder='Enter your city'
                        value='Bari'
                    />

                    <FormInput
                        id='postalCode'
                        text='Postal Code'
                        type='text'
                        required={true}
                        placeholder='Enter your postal code'
                        value='70128'
                    />
                </div>
            </div>
            <div className="mx-auto mb-6">
                <Button to="/profile">Confirm</Button>
            </div>
        </form>
    )
}