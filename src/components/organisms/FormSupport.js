import Button from "@atoms/Button";
import FormSelect from "@molecules/FormSelect";
import FormTextarea from "@molecules/FormTextarea";

export default function FormSupport(){
    return (
        <form className="flex flex-1 flex-col justify-between gap-5 mt-6">
            <div className="flex flex-col justify-between gap-5">
                <FormSelect
                    id="problem"
                    text="Problem"
                    required={true}
                    placeholder="Choose a problem"
                    options={['Problem with the app' , 'Problem with the website', 'Problem with the payment', 'Other']}
                >
                </FormSelect>
                
                <FormTextarea
                    id='description'
                    text='Description'
                    required={true}
                    placeholder="Describe your problem"
                >

                </FormTextarea>
            </div>
            <div className="mx-auto mb-[80px] flex flex-col">
                <Button to="/profile">Confirm</Button>
            </div>
        </form>
    )
}