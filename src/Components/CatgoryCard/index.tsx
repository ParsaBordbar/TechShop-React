interface CardEl{
    variant?: string;
    title?: string;
    desc?: string;
    src?:string;
}

const CatCard = (props: CardEl) =>{
    if (props.variant === 'black'){
        return(
            <>
            <div className='w-1/2 h-96 flex make-it-primary rounded-3xl flex-col p-12'>
                <h1 className=" text-slate-100 justify-start  text-7xl items-end cursor-pointer hover:text-red-600 transition duration-150 ease-out hover:ease-in">
                    {props.title}
                </h1>
                <p className=" text-slate-100">
                    {props.desc}
                </p>
            </div>
            </>
            ) 
    }
    return(
    <>
    <div className='flex w-1/2 h-96  bg-slate-200 rounded-3xl'>
        <h1 className="flex text-slate-900 items-end p-12 text-7xl cursor-pointer hover:text-red-600 transition duration-150 ease-out hover:ease-in">
            {props.title}
        </h1>
        <span>
            {props.desc}
        </span>
    </div>
    </>
    )
}
export default CatCard;