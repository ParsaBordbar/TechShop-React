import PhoneElement from "../../Components/PhoneElments";

const PhoneList = () =>{
    return(
        <>
        <div className="flex justify-center">
            <PhoneElement title="iphone14" desc="iphone is OVERPRICED as FUCK" variant="small"/>
            <PhoneElement variant="tablet"/>
            <PhoneElement title="iphone14" desc="iphone is OVERPRICED" />
            <PhoneElement title="iphone14" desc="iphone is OVERPRICED as FUCK" variant="small"/>
            <PhoneElement/>
        </div>
        <div className="flex justify-center">
            <PhoneElement title="iphone14" desc="iphone is OVERPRICED as FUCK" variant="small"/>
            <PhoneElement variant="tablet"/>
            <PhoneElement title="iphone14" desc="iphone is OVERPRICED as FUCK" variant="small"/>
            <PhoneElement title="iphone14" desc="iphone is OVERPRICED" />
            <PhoneElement/>
        </div>
        </>
    )
}

export default PhoneList;