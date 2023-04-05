import Button from '@atoms/Button';
import { Link } from 'react-router-dom'; 
import FormInput from '@molecules/FormInput';

export default function FormDataAccess(){
    return (
        <form className='flex flex-col justify-between gap-5 mt-5'>
            <div className='flex flex-col justify-between gap-5'>
            
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

            <FormInput
                id='confirmPassword'
                text='Confirm password'
                type='password'
                required={true}
                placeholder='Confirm your password'
            />
            </div>
            <div className="text-center m-[80px] flex flex-col items-center">
                <Button to="/register/user-data">Next</Button>
                <Link to='/login' className='mt-3 uppercase font-semibold text-xl'>Log in</Link>
            </div>
        </form>
    )
}