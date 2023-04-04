import GuestHeader from "@organisms/GuestHeader.js"

export default function GuestLayout({children, title}){
    return (
        <div className="h-screen bg-white flex flex-col font-sans p-8">
            <GuestHeader title={title}/>
            {children}
        </div>
    )
}