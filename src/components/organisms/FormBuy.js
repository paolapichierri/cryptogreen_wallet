import Button from "@atoms/Button";
import FormInput from "@molecules/FormInput";
import { useState } from "react";

export default function FormBuy(){

    const [conversion, setConversion] =  useState('')

    function convertCurrencyUSD(value){
        setConversion((value  * 0.000033).toFixed(4))
    }


    return (
        <form className="flex flex-col h-full gap-8 items-center py-10">
            <FormInput
                id='amount'
                text='Amount in USD'
                type='number'
                required={true}
                placeholder='Insert amount in USD'
                onInput={(event) => convertCurrencyUSD(event.target.value)}
            />
            <FormInput
                id='conversion'
                text='Amount in BTC'
                type='number'
                required={false}
                placeholder='Amount in BTC'
                value={conversion}
                disabled={true}
            />
            <div className="mt-16">
                <Button to="/market">Buy</Button>
            </div>
        </form>
    )
}