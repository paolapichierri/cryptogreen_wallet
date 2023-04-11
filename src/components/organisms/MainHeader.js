import ProfileImage from "@atoms/ProfileImage";

export default function MainHeader({title, subtitle}){
    return (
        <header className="flex justify-between">
            <div>
                <h1 className="font-bold text-3xl text-primary">{title}</h1>
                <h3 className="font-medium text-secondary">{subtitle}</h3>
            </div>
            <ProfileImage/>
        </header>
    )
}