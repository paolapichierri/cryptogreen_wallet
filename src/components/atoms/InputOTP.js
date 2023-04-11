import { useState } from "react";

export default function InputOTP({inputRef, inputIndex, handleChange}){

    //useState = serve per gestire lo stato all'interno di react 
    //setValue = la funzione che ci serve per modificare il valore della variabile value
    let [value, setValue] = useState('');

    function limitInputValue(value){
        //setValue andrà a cambiare lo stato della variabile value e aggiornerà il dom 

        let slicedValue = value.slice(0,1)
        setValue( slicedValue )
        // // console.log(v.slice(0,1));
        // console.log(inputIndex);

        //poi lanciamo la funzione handlechange passandogli come parametro inputIndex, ovvero l'indice dell'input  
        //handleChange è una prop che viene passata al componente, questa prop è una funzione che gli verrà passata dal componente genitore. Qual è questa funzione? la funzione nextInput
        handleChange(inputIndex)
    }

    return (
        <input
        //per assegnare a un elemento html il riferimento di createRef devo usare l'attributo ref
            ref={inputRef}
            type="number"
            placeholder=""
            className="w-12 h-12 border border-secondary rounded-md bg-white-light focus:border-primary focus-visible:border-primary text-center text-2xl"
            value={value}
            onChange={(event) => limitInputValue(event.target.value)}
        />
    )
 
}