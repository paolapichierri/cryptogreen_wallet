import FormInput from "@molecules/FormInput";
import Button from "@atoms/Button";
import { useState } from "react";


export default function FormSell(){

    function convertCurrencyBTC(value){
        // console.log(value);
        setConversion((value / 0.000033).toFixed(4))
    }

    const [conversion, setConversion] =  useState('')

    return (
        <form className="flex flex-col h-full gap-8 items-center py-10">
            <FormInput
                id='amount'
                text='Amount in BTC'
                type='number'
                required={true}
                placeholder='Insert amount in BTC'
                onInput={(event) => convertCurrencyBTC(event.target.value)}
            />
            <FormInput
                id='conversion'
                text='Amount in USD'
                type='number'
                required={false}
                placeholder='Amount in USD'
                value={conversion}
                disabled={true}
            />

            <div className="mt-16">
                <Button to="/market">Sell</Button>
            </div>
        </form>

        // <div>
        //     <CurrencyInput handleConversion={convertCurrency}/>
        //     <FormInput value={conversion}/>
        // </div>

    )
}