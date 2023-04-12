export default function Select({id, placeholder, options = []}){
    return (
        <select
            id={id}
            name={id}
            defaultValue={placeholder}
            className="py-2 px-4 border border-secondary rounded-xl mt-1 focus:border-primary focus-visible:border-primary"
        >
            <option disabled>{placeholder}</option>
            {
                options.map((option, index) => {
                    return (
                        <option key={index} value={option}>{option}</option>
                    )
                })
            }
        </select>
    )
}