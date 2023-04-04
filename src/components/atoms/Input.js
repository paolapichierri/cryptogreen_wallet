export default function Input({id, placeholder, type = "text", value = ""}){
    return (
        <input 
            id={id}
            name={id}
            placeholder={placeholder}
            type={type}
            defaultValue={value}
            className='rounded-2xl px-3 py-2 mt-2 border border-slate-300 shadow'
        />
    )
}