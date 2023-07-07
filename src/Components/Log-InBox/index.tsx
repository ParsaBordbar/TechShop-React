import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";


type IRegisterData = {
    email: string,
    password: string
}

const registerSchema = yup.object({
    email: yup.string().required('Email is Required').email(),
    password: yup.string().required("Pass word is Required"),
})

const LogInBox = () =>{

    const { register, handleSubmit, formState:{ errors } } = useForm<IRegisterData>({
        resolver: yupResolver(registerSchema),
        mode:'onSubmit'
    })

    const handleForm = (data: IRegisterData) =>{
        console.log(data)
        fetch('https://reqres.in/api/register',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => {
            console.log(res);
        })
    }

    return(
        <div className="make-it-primary mt-20 rounded-2xl w-1/3  text-zinc-50 flex flex-col items-center">
            <div className="layer2 spacer2"></div>
            <div className=" flex flex-col mt-7 justify-center items-center">
                <h1 className="text-3xl font-bold "> Sign-In </h1>
                <p className="p-2">Register now</p>
                <form onSubmit = {handleSubmit(handleForm)} className="flex gap-4 flex-col w-80"
                action="">  
                    <input placeholder="Email" className="h-7 rounded-md p-2.5 text-black" type="e-mail " {...register('email')}/>
                    {errors.email?.message}
                    <input placeholder="Password"className="h-7 rounded-md p-2.5 text-black" type="password" {...register('password')} />
                    {errors.password?.message}
                    <input className="mb-14 bg-slate-600 hover:bg-slate-500 rounded-md text-xl transition duration-500 ease-out hover:ease-in h-10" type="submit" />
                </form>
            </div>
        </div>
    )
}
export default LogInBox;