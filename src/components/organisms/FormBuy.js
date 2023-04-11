import Button from "@atoms/Button";
import FormInput from "@molecules/FormInput";

export default function FormBuy(){
    return (
        <form className="flex flex-col h-full gap-8 items-center py-10">
            <FormInput
                id='amount'
                text='Amount in USD'
                type='number'
                required={true}
                placeholder='Insert amount in USD'
            />
            <FormInput
                id='conversion'
                text='Conversion in BTC'
                type='number'
                required={true}
                placeholder='Amount in BTC'
            />
            <div className="mt-16">
                <Button to="/wallet">Buy</Button>
            </div>
        </form>
    )
}