export default function DashboardCard({title, subtitle}){
    return (
        
            <div className="relative">
                <img className="absolute right-0 translate-y-[-70%]" src="/media/grass.png" alt="grass image" />
                <div className="min-h-[130px] w-80 bg-accent relative rounded-[40px] p-6 text-white mx-auto shadow-md">
                    <h2 className="text-5xl font-bold">{title} <span className="text-3xl font-medium">USD</span> </h2>
                    <h3 className="font-semibold text-3xl">{subtitle} <span className="text-xl font-medium">BTC</span> </h3>
                    <img className="absolute right-[-30px] top-10" src="/media/coins.png" alt="" />
                </div>
            </div>
       
    )
}