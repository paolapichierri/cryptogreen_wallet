import { useState } from "react";

export default function InputOTP({inputRef, inputIndex, handleChange}){

    let [value, setValue] = useState('');

    function maxValue(v){
        setValue( v.slice(0,1) )
        // // console.log(v.slice(0,1));
        // console.log(inputIndex);
        handleChange(inputIndex)
    }


    return (
        <input
            ref={inputRef}
            type="number"
            placeholder=""
            className="w-12 h-12 border border-secondary rounded-md bg-white-light focus:border-primary focus-visible:border-primary text-center text-2xl"
            value={value}
            onChange={(e) => maxValue(e.target.value)}
        />
    )
 
}