import { Link } from "react-router-dom";

const Links = () => {

    return (


        <>
            <nav className="   bg-black flex mb-1   ">
                <div className=" w-full ">
                    <Link to='/Login'         className=" float-right  my-2   xl:p-3  px-2  py-1  xl:pb-4  text-white   text-sm  xl:text-2xl">Login</Link>
                    <Link to='/Registration'  className=" float-right  my-2   xl:p-3  px-2  py-1  xl:pb-4  text-white   text-sm  xl:text-2xl">Registration</Link>
                    <Link to='/About'         className=" float-right  my-2   xl:p-3  px-2  py-1  xl:pb-4  text-white   text-sm  xl:text-2xl">About</Link>
                    <Link to='/Home'          className=" float-right  my-2   xl:p-3  px-2  py-1  xl:pb-4  text-white   text-sm  xl:text-2xl">Home</Link>
                </div>
            </nav>
        </>

    )
}
export default Links;