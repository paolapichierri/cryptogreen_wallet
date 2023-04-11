import Navbar from "@organisms/Navbar";
import MainHeader from "@organisms/MainHeader";

export default function MainLayout({children , header}){
    return (
        <div className="h-screen bg-white flex flex-col font-sans p-6">
            {header}
            <div className="grow">
                {children}
            </div>
            <Navbar/>
        </div>
            // <MainHeader title="Wallet" subtitle={<span>Welcome, <span className="font-bold">Paola</span></span>}>
            // </MainHeader>
    )
}