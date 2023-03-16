import { useState } from "react"

const Login = (props) => {
    var [PasswordType, setPasswordType] = useState("password")

    const showPassword = () => {

        if (PasswordType === "password") {
            setPasswordType("text")

        }
        else {
            setPasswordType("password")
        }

    }
    return (

        <>
            <div   className="  flex flex-col  justify-center items-center">

                <form className="rounded-3xl m-10 p-10 md:p-20 flex flex-col justify-center items-center md:text-2xl bg-black  shadow-2xl shadow-black	 text-gray-300 ">

                    <h1 className="px-1 pt-3 pb-1 mb-5 border-b-2 border-white">Login</h1>



                    <input type='text' value={props.fname} placeholder='Enter Your UserName' className="  w-64 py-1 pl-1 my-5 text-black placeholder-gray-500 rounded-sm" required />


                    <input type={PasswordType} placeholder='Enter Your Password' className="  w-64 py-1 pl-1 mt-5 text-black placeholder-gray-500 rounded-sm" required />
                    <h1 className="  text-base    w-64  float-left " ><input onClick={showPassword} type="checkbox" className="mt-1" /> Show Password</h1>


                    <input type='submit' value='Login' className=" my-5 w-24 px-1 text-black rounded-sm bg-white" />





                </form>
            </div>
        </>
    )
}

export default Login;