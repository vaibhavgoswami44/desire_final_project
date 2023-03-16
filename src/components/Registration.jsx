import { useState } from "react";
import { Link } from "react-router-dom";



var object = {

    fname: "",
    email: "",
    city: "",
    password: "",
    conPass: "",
    number: "",
    gender: ""

}

const Registration = () => {


    const [name, setname] = useState(object);


    const [FnameError, setFnameError] = useState()
    const [EmailError, setEmailError] = useState()
    const [passwordError, setPasswordError] = useState()
    const [cityError, setcityError] = useState()
    const [confirmPasswordError, setconfirmPasswordError] = useState()
    const [phoneNumbererror, setphoneNumbererror] = useState()
    const [genderError, setgenderError] = useState()


    const [PasswordType, setPasswordType] = useState("password")
    var a;


    const demo = (evt) => {

        var name = evt.target.name
        var value = evt.target.value

        setname((pval) => {

            switch (name) {


                case "fname":
                    return {
                        fname: value,
                        email: pval.email,
                        city: pval.city,
                        password: pval.password,
                        conPass: pval.conPass,
                        number: pval.number,
                        gender: pval.gender
                    }

                case "email":
                    return {
                        fname: pval.fname,
                        email: value,
                        city: pval.city,
                        password: pval.password,
                        conPass: pval.conPass,
                        number: pval.number,
                        gender: pval.gender
                    }

                case "city":
                    return {
                        fname: pval.fname,
                        email: pval.email,
                        city: value,
                        password: pval.password,
                        conPass: pval.conPass,
                        number: pval.number,
                        gender: pval.gender
                    }

                case "password":
                    return {
                        fname: pval.fname,
                        email: pval.email,
                        city: pval.city,
                        password: value,
                        conPass: pval.conPass,
                        number: pval.number,
                        gender: pval.gender

                    }

                case "conPass":
                    return {
                        fname: pval.fname,
                        email: pval.email,
                        city: pval.city,
                        password: pval.password,
                        conPass: value,
                        number: pval.number,
                        gender: pval.gender


                    }

                case "number":
                    return {
                        fname: pval.fname,
                        email: pval.email,
                        city: pval.city,
                        password: pval.password,
                        conPass: pval.conPass,
                        number: value,
                        gender: pval.gender
                    }

                case "gender":
                    return {
                        fname: pval.fname,
                        email: pval.email,
                        city: pval.city,
                        password: pval.password,
                        conPass: pval.conPass,
                        number: pval.number,
                        gender: value
                    }

                default:

            }
        })
    }

    const handleName = () => {
        if (name.fname.length < 3) {
            setFnameError(true)
            return a = 1;

        }
        else {
            setFnameError(false)
        }

    }

    const handleEmail = () => {
        if (name.email.length < 3) {
            setEmailError(true)
            return a = 1;
        }
        else {
            setEmailError(false)
        }

    }

    const handlPassword = () => {
        if (name.password.length < 8) {
            setPasswordError(true)
            return a = 1;

        }
        else {

            if (name.password.length > 16) {
                setPasswordError(true)
                return a = 1;

            }
            else {
                setPasswordError(false)
            }

        }

    }

    const handlephoneNumbererror = () => {
        if (name.number.length < 10) {
            setphoneNumbererror(true)
        }
        else {
            setphoneNumbererror(false)
        }
    }

    const showPassword = () => {

        if (PasswordType === "password") {
            setPasswordType("text")

        }
        else {
            setPasswordType("password")
        }

    }

    const handleConfirmPasswordError = () => {
        if (name.password !== name.conPass) {
            setconfirmPasswordError(true)
            return a = 1;
        }
        else {
            setconfirmPasswordError(false)
        }
    }

    const handlecityerror = () => {
        if (name.city.length < 1) {
            setcityError(true)
            return a = 1
        }
        else {
            setcityError(false)
        }
    }

    const handleGenderEror = () => {
        if (name.gender.length < 1) {
            setgenderError(true)
            return a = 1;
        }
        else {
            setgenderError(false)
        }
    }

    const formSubmit = (e) => {

        handleName()
        handleEmail()
        handlPassword()
        handlecityerror()
        handleConfirmPasswordError()
        handlephoneNumbererror()
        handleGenderEror()

        if (a === 1) {
            return e.preventDefault();
        }

    }


    return (

        <>
            <div onSubmit={formSubmit} className="  flex flex-col px-5 justify-center items-center">

                <form className=" xl:w-1/2 w-full  rounded-3xl m-5 p-5 md:p-10 xl:p-10 shadow-2xl  shadow-black flex flex-col justify-center items-center md:text-2xl bg-black text-gray-300 ">

                    <h1 className="px-1 pt-3 pb-1 mb-5 border-b-2 border-white">Registrar</h1>

                    <input type='text' name="fname" placeholder='Enter Your Name' className="xl:w-1/2  md:w-80 w-64 py-1 pl-1 mt-5 text-black placeholder-gray-500 rounded-sm" onChange={demo} />
                    {FnameError ? <span className=" text-xs float-left xl:w-1/2   w-64 p-1 text-red-600">*Invalid Name</span> : ""}

                    <input type='email' name="email" placeholder='Enter Your Email' className="xl:w-1/2 md:w-80  w-64 py-1 pl-1 mt-5 text-black placeholder-gray-500 rounded-sm" onChange={demo} />
                    {EmailError ? <span className=" text-xs float-left xl:w-1/2   w-64 p-1 text-red-600">*Invalid Email</span> : ""}

                    <input type='tel' name="number" placeholder='Enter Your Phone Number' className="xl:w-1/2  md:w-80 w-64 py-1 pl-1 mt-5 text-black placeholder-gray-500 rounded-sm" maxLength='10' onChange={demo} />
                    {phoneNumbererror ? <span className=" text-xs float-left xl:w-1/2   w-64 p-1  text-red-600">*Invalid Phone Number </span> : ""}

                    <select name="gender" className="w-64 md:w-80 py-1 pl-1 mt-5 text-black xl:w-1/2   text-gray-500" onChange={demo}  >

                        <option value="Gender" selected="selected" disabled >Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>

                    </select>
                    {genderError ? <span className=" text-xs float-left xl:w-1/2   w-64 p-1  text-red-600">*Select Gender </span> : ""}

                    <select name="city" className="w-64 md:w-80 py-1 pl-1 mt-5 text-black xl:w-1/2   text-gray-500" onChange={demo}  >

                        <option value="city" selected="selected" disabled >City</option>
                        <option value="modasa" >Modasa</option>
                        <option value="Ahmadabad">Ahmadabad</option>
                        <option value="Gandhinagar">Gandhinagar</option>
                        <option value="Surat">Surat</option>
                        <option value="Kachh">Kachh</option>

                    </select>
                    {cityError ? <span className=" text-xs float-left xl:w-1/2   w-64 p-1  text-red-600">*Select City</span> : ""}

                    <input name="password" type={PasswordType} placeholder='Enter Your Password' className="xl:w-1/2 md:w-80  w-64 py-1 pl-1 mt-5 text-black  placeholder-gray-500 rounded-sm" onChange={demo} />
                    {passwordError ? <span className=" text-xs float-left xl:w-1/2   w-64 p-1  text-red-600">*Password Length Must Be Greater 8 or Lessthen 16</span> : ""}

                    <input type={PasswordType} name="conPass" placeholder='Confirm Your Password' className="xl:w-1/2   w-64 py-1 pl-1 mt-5 text-black placeholder-gray-500 rounded-sm md:w-80" onChange={demo} />
                    {confirmPasswordError ? <span className=" text-xs float-left xl:w-1/2   w-64 p-1 text-red-600">*Password Not Match</span> : ""}

                    <h1 className="  text-base xl:w-1/2 pb-1  w-64  float-left " ><input onClick={showPassword} type="checkbox" className="mt-1" /> Show Password</h1>

                    <input type='submit' value="submit" className=" my-5 w-24 px-1 text-black rounded-sm bg-white" />
                    <input type='reset' value='Reset' className=" my-5 w-24 px-2 text-black rounded-sm bg-white" />
             
             <Link to='/Login'  ><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Login</button></Link>
                </form>

            </div>


            <div>

                <h1 className=" m-5 w-20 xl:w-16 px-2 xl:px-1 text-white rounded-md bg-black" >Preview</h1>

                <table className="border border-white m-3">

                    <tbody>

                        <tr>
                            <th className="border border-white py-2 px-3" >Name :</th>
                            <td className="border border-white py-2 px-1 w-24" >{name.fname}</td>
                        </tr>

                        <tr>
                            <th className="border border-white py-2 px-3" >Email :</th>
                            <td className="border border-white py-2 px-1 w-24" >{name.email}</td>
                        </tr>

                        <tr>
                            <th className="border border-white py-2 px-3" >City :</th>
                            <td className="border border-white py-2 px-1 w-24" >{name.city}</td>
                        </tr>

                        <tr>
                            <th className="border border-white py-2 px-2 " >Password :</th>
                            <td className="border border-white py-2 px-1 w-24" >{name.password}</td>
                        </tr>

                        <tr>
                            <th className="border border-white py-2 px-2 " >Phone Number :</th>
                            <td className="border border-white py-2 px-1 w-24" > {name.number}</td>
                        </tr>

                        <tr>
                            <th className="border border-white py-2 px-2 " >gender :</th>
                            <td className="border border-white py-2 px-1 w-24" > {name.gender}</td>
                        </tr>

                    </tbody>

                </table>

            </div>
        </>
    )
}

export default Registration;
