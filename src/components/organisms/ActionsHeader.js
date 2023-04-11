import ProfileImage from "@atoms/ProfileImage";
import BackButton from "@atoms/BackButton";

export default function ActionsHeader({title}){
    
    function renderTitle(){
        if(title){
            return <h1 className="text-5xl font-semibold mt-5"><span className="text-accent">{title[0]}</span>{title.slice(1)}</h1>
        }
    }
    
    return (
        <header>
            <div className="flex items-center justify-between">
                <BackButton/>
                <ProfileImage/>
            </div>
            <div className="text-center">
                {renderTitle()}
            </div>
        </header>
    )
}