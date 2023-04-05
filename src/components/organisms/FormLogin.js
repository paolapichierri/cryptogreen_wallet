import FormInput from "@molecules/FormInput";
import Button from "@atoms/Button";
import { Link } from "react-router-dom";

export default function FormLogin(){
    return (
       <form className="flex flex-1 flex-col justify-between gap-5 mt-6">
            <div className="flex flex-col justify-between">
                <FormInput
                    id='email'
                    text='Email'
                    type='email'
                    required={true}
                    placeholder='Enter your email'
                />
                <FormInput
                    id='password'
                    text='Password'
                    type='password'
                    required={true}
                    placeholder='Enter your password'
                />
            </div>
            <div className="mx-auto mb-[80px] flex flex-col">
                <Button to="/login/otp">Next</Button>
                <Link to='/register/access-data' className='mt-3 uppercase font-semibold text-xl text-center'>Sign up</Link>
            </div>
        </form>
    )
}