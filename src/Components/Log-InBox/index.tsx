import { yupResolver } from "@hookform/resolvers/yup";
import { AccountCircle, Visibility } from "@mui/icons-material";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from 'axios'

type IRegisterData = {
    email: string,
    password: string
}

const registerSchema = yup.object({
    email: yup.string().required('Email is Required').email(),
    password: yup.string().required("Password is Required"),
})

const LogInBox = () =>{
    const { register, handleSubmit, formState:{ errors } } = useForm<IRegisterData>({
        resolver: yupResolver(registerSchema),
        mode:'onSubmit'
    })

    const handleForm = (data: IRegisterData) =>{
        console.log(data)
        axios.post('https://reqres.in/api/register', data).then(res => {
            console.log(res);
        })
    }

    return(
        <div className="make-it-primaryLight mt-20 rounded-2xl w-1/3 h-2/4 flex flex-col items-center justify-center shadow-black shadow-xl">
            <div className=" flex flex-col mt-7 justify-center items-center">
                <h1 className="text-3xl font-bold"> Sign-In </h1>
                <p className="p-2">Register now</p>
                <form onSubmit = {handleSubmit(handleForm)} className="flex gap-4 flex-col w-80"
                action="">  
                    <Box className="rounded-xl"  sx={{ display: 'flex', alignItems: 'flex-end',
                        }}>
                        <AccountCircle sx={{ color: 'black', mr: 1, my: 0.5 }} />
                        <TextField sx={{ width:"80%",}} {...register('email')} id="input-with-sx" label="email" variant="standard" />
                    </Box>
                    {errors.email?.message}

                    <Box className="rounded-xl"  sx={{ display: 'flex', alignItems: 'flex-end'}}>
                        <Visibility sx={{ color: 'black', mr: 1, my: 0.5 }} />
                        <TextField  {...register('password')} id="input-with-sx" label="password" type="password" variant="standard" 
                            sx={{ width:"80%",}}
                        />
                    </Box>
                    {errors.password?.message}
                    <input className="mt-10 mb-5 outline hover:bg-slate-700 hover:text-gray-50 rounded-xl text-xl transition  duration-400 ease-out hover:ease-in h-10" type="submit" />
                </form>
            </div>
        </div>
    )
}
export default LogInBox;