import InputOTP from "@atoms/InputOTP";
import TextLg from "@atoms/TextLg";
import Button from "@atoms/Button";

export default function FormOTP(){
    return (
        <div className="flex flex-1 flex-col gap-5 mt-6 justify-between">
            <div>
            <TextLg className='text-secondary font-bold'>
            We have sent you an OTP to your email address. Please enter the OTP below to verify your email address.
            </TextLg>
            
            <div className="flex justify-evenly mt-5">
                <InputOTP/>
                <InputOTP/>
                <InputOTP/>
                <InputOTP/>
                <InputOTP/>
                <InputOTP/>
            </div>
            <div>
                <TextLg className='text-secondary font-bold text-center mt-5'>
                Invia nuovo codice : <span className="font-medium">00:20</span> 
                </TextLg>
            </div>
            </div>
            <div className="mx-auto mb-[80px]">
                <Button to="/wallet">Next</Button>
            </div>
        </div>
    )
}