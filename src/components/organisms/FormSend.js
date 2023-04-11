import Button from "@atoms/Button";
import FormInput from "@molecules/FormInput";

export default function FormSend(){
    return (
        <form className="flex flex-col h-full gap-8 items-center py-10">
            <FormInput
                id='withdrawalAddress'
                text='Withdrawal Address'
                type='email'
                required={true}
                placeholder='Withdrawal Address'
            />
            <FormInput
                id='withdrawalAmount'
                text='Withdrawal Amount'
                type='number'
                required={true}
                placeholder='Withdrawal Amount in USD'
            />
            <div className="mt-16">
                <Button to="/wallet">Send</Button>
            </div>
        </form>
    )
}