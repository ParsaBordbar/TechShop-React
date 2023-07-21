import ImageMasonry from "../../Components/MasonaryMUI";

const PhoneList = () =>{
    function handleClose(event: MouseEvent<HTMLLIElement, MouseEvent>): void {
        throw new Error("Function not implemented.");
    }

    return(
        <>  
        <div className="flex layer3 spacer3 flex-col items-center">
            <div className="mt-10">
                <ImageMasonry/>        
            </div>
        </div>
        </>
    )
}

export default PhoneList;