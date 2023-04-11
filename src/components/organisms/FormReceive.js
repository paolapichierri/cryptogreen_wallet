import Button from "@atoms/Button";
import FormInput from "@molecules/FormInput";

export default function FormReceive(){
    return (
        <form className="flex flex-col items-center py-4">
            <img className="mb-6 w-72" src="/media/qrcode.png" alt="" />
            <FormInput
                id='walletAddress'
                text='Wallet Address'
                type='text'
                required={true}
                placeholder='shd9uqwd7jekwu6end5n'
            />
            
            <div className="mt-16">
                <Button to="/wallet">Copy Link</Button>
            </div>
        </form>
    )
}