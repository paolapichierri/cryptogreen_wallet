import Navbar from "@organisms/Navbar";
import MainHeader from "@organisms/MainHeader";

export default function MainLayout({children , header}){
    return (
        <div className="h-screen bg-white flex flex-col font-sans">
            {header}
            <div className="grow pt-12">
                {children}
                <Navbar/>
            </div>
        </div>
            // <MainHeader title="Wallet" subtitle={<span>Welcome, <span className="font-bold">Paola</span></span>}>
            // </MainHeader>
    )
}