import Button from "@atoms/Button";
import InputUploadFile from "@molecules/InputUploadFile";

export default function FormUploadDocuments(){
    return (
        <form className="flex flex-1 flex-col justify-between gap-5 mt-10">
            <div className="flex flex-col justify-between gap-10">
                <InputUploadFile text="Upload your ID" id="userID"/>
                <InputUploadFile text="Upload your photo" id="userPhoto"/>
            </div>
            <div className="text-center flex flex-col items-center mb-6">
                <Button to="/wallet">Next</Button>
            </div>
        </form>
    )
}