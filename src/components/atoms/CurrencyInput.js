export default function CurrencyInput({handleConversion}){

    return (
        <input
            type="number"
            placeholder=""
            onInput={(event) => handleConversion(event.target.value)}
            className='rounded-2xl px-3 py-2 mt-2 border border-slate-300 shadow'
        />
    )
}