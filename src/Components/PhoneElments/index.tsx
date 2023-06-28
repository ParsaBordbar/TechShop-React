interface phoneEl{
    variant?: string;
    title?: string;
    desc?: string;
    imgSrc?: string;
}

const PhoneElement = (props:phoneEl) =>{
    if(props.variant === 'small'){
        return(
            <>
            <div className="box w-1/4 h-52 justify-center items-center m-6 p-10 bg-slate-800 rounded-2xl">
                <img src={props.imgSrc} alt="" />
                <h1>{props.title}</h1>
                <h3>{props.desc}</h3>
            </div>
            </>
        )
    }
    if(props.variant === 'tablet'){
        return(
            <>
            <div className="box w-1/4 h-64 m-6 p-10  bg-slate-800 rounded-2xl">
                nigga cat ballsacks
            </div>
            </>
        )
    }
    return(
        <>
            <div className="rounded-2xl box w-1/4 h-96 justify-center items-center m-6 p-10  bg-slate-800">
                <img src={props.imgSrc} alt="" />
                <h1>{props.title}</h1>
                <h3>{props.desc}</h3>
            </div>
        </>
    )
}
export default PhoneElement;