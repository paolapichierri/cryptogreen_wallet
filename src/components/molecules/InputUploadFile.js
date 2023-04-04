
export default function InputUploadFile({text , id}){
    return (
        <div className="flex items-center justify-center w-full">
            <label htmlFor={id} className="flex flex-col items-center justify-center w-full h-32 border-2 border-primary border-dashed rounded-lg cursor-pointer bg-accent">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p className="mb-2 text-sm text-primary font-bold">{text}</p>
                    <p className="text-xs text-primary">Click to upload or drag and drop</p>
                </div>
                <input id={id} type="file" className="hidden"/>
            </label>
        </div>
    )
}