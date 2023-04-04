export default function GuestHeader({title}){
    function renderTitle(){
        if(title){
            return <h1 className="text-5xl font-semibold mt-5"><span className="text-accent">{title[0]}</span>{title.slice(1)}</h1>
        }
    }

    return (
        <header className="text-center">
            <img className="w-full max-w-[150px] mx-auto" src="/media/welcome-header.png" alt="welcome header image" />
            {renderTitle()}
        </header>
    )
}