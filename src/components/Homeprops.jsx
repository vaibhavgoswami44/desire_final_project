function Demo(props) {
    return (
        <>

            <div className=" w-64 md:w-1/4 shadow-2xl shadow-black bg-black rounded-3xl text-white   p-5 my-10 m-2 flex flex-col justify-center items-center">

                <img src={props.img} className=" w-10   " alt={props.alt} />
                <h1 >{props.title}</h1>
                
                <p className="text-xs  text-center my-5">{props.p}</p>
                <button >{props.button}</button>
            </div>

        </>
    )
}
export default Demo;