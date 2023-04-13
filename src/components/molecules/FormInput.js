import Label from '@atoms/Label';
import Input from '@atoms/Input';

export default function FormInput({id, text, placeholder, value = '', type = 'text', required = false, onInput, disabled = false}){
    return (
        <div className='flex flex-col gap-1 text-left w-full mt-3'>
            <Label htmlFor={id} required={required}>{text}</Label>
            <Input value={value} id={id} placeholder={placeholder} type={type} onInput={onInput} disabled={disabled}/>
        </div>
    )
}
