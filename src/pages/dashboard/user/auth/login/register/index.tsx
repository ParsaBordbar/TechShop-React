const RegisterScreen = () => {
    return(
        <div className="flex justify-center make-it-primary font-semibold">
            <div className="flex justify-center items-center m-16 rounded-2xl justify-self-center">
            <form className="flex gap-5 flex-col w-80"
            action="">
                <label htmlFor="userName">USER NAME</label>
                <input id="userName" className=" rounded-lg p-2" type="text" />
                <input className=" rounded-lg p-2" type="e-mail" />
                <input className=" rounded-lg p-2" type="password" />
                <input className="bg-stone-500 p-2 rounded-lg" type="submit" />
            </form>
            </div> 
        </div>
    )
}
export default RegisterScreen;