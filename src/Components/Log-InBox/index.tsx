import { useForm } from "react-hook-form";

const LogInBox = () =>{

    const { register, handleSubmit } = useForm()

    const handleForm = (data: any) =>{
        console.log(data)
    }

    return(
        <div className="make-it-primary mt-20 rounded-2xl w-1/3  text-zinc-50 flex flex-col items-center">
            <div className="layer2 spacer2"></div>
            <h1 className="text-3xl font-bold"> Log-In </h1>
            <form onSubmit = {handleSubmit(handleForm)} className="flex gap-4 flex-col w-80"
            action="">
                <input id="userName" placeholder="UserName" className="mt-9 h-7 rounded-md p-2.5 text-black" type="text" {...register('username',{
                    maxLength: 18,
                    minLength: 5,
                    required: true
                })} />
                <input placeholder="Email" className="h-7 rounded-md p-2.5 text-black" type="e-mail " {...register('email',{
                    required: true
                })}/>
                <input placeholder="Password"className="h-7 rounded-md p-2.5 text-black" type="password" {...register('password')} />
                <input className="mt-9 hover:bg-red-800 rounded-md text-xl transition duration-500 ease-out hover:ease-in h-10" type="submit" />
            </form>
        </div>
    )
}
export default LogInBox;