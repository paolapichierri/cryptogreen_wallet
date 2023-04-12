import Label from "@atoms/Label";
import Textarea from "@atoms/Textarea";

export default function FormTextarea({id, text, placeholder, required = false, value = ''}){
    return (
        <div className="flex flex-col text-left w-full mt-2">
            <Label htmlFor={id} required={required}>{text}</Label>
            <Textarea id={id} placeholder={placeholder} value={value}></Textarea>
        </div>
    )
}