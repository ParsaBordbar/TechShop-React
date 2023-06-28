interface headEl{
    variant?: string;
    title?: string;
    desc?: string;
    imgSrc?: string;
}

const HeadElement = (props : headEl) =>{
    if(props.variant === "black"){
        return(
            <div className="content flex justify-center flex-col bg-slate-800">
            <img className="w-2/4" src={props.imgSrc} alt="" />
            <h1 className="text-7xl cursor-pointer
            transition duration-150 ease-out hover:ease-in text-slate-100 hover:text-red-800">{props.title}</h1>
            <h3 className="text-xl pt-3 text-slate-100">{props.desc}.</h3>
            <a href="#" className="text-blue-500">see more</a>
        </div>
        )
    }
    return(
        <div className="content  flex justify-center flex-col">
            <img className="w-2/4" src={props.imgSrc} alt="" />
            <h1 className="text-7xl pb-2 cursor-pointer
            transition duration-150 ease-out hover:ease-in hover:text-red-800">{props.title}</h1>
            <h3 className="text-xl">{props.desc}.</h3>
            <a href="#" className="text-blue-500">see more</a>
        </div>
    )
}
export {HeadElement}