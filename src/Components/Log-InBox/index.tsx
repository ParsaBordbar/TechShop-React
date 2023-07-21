import { yupResolver } from "@hookform/resolvers/yup";
import { AccountCircle, Visibility } from "@mui/icons-material";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { instance } from "../../api/constants";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


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

    const navigate = useNavigate()

    const handleForm = (data: IRegisterData) =>{
        console.log(data)
        instance.post('/api/register', data).then(res => {
            console.log(res);
            Cookies.set('token', 'value', { expires: 7 })
            navigate('/')
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
                    <LoadingButton sx={{background:"#1E1E1E", borderRadius: '.8rem',}} type="submit" variant="contained" size='large'>Register</LoadingButton>
                </form>
            </div>

        </div>
    )
}
export default LogInBox;