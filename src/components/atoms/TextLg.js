export default function TextLg({ children, className }){
    return (
        <p className={`text-lg ${className
        }`}>{children}</p>
    )
}