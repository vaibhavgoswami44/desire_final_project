import { Routes, Route } from 'react-router';
import Links from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Registration from './components/Registration';
import Homepage from './components/Homepage';
import { useNavigate } from 'react-router';
import './CSS/index.css';


function App() {

  var back = useNavigate()
  const backf = () => {
    back(-1)
  }
  const nextf = () => {
    back(+1)
  }
  return (
    <>
      <div className='flex bg-gray-500 flex-col ' style={{ height: '100vh' }}>
        <div className='bg-gray-500  '>
          <Links />
          <button onClick={backf} className=" border-t-2 border-r-2 border-b-2 border-black px-3 rounded-r-md " >back</button>
          <button onClick={nextf} className=" border-t-2 border-l-2 border-b-2 border-black px-3 float-right rounded-l-md " >next</button>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Registration' element={<Registration />} />
          </Routes>
        </div>
        <footer style={{ marginTop: 'auto' }}>
          <div className=" bg-black flex flex-col   justify-center items-center   h-40">



            <div className="  font-bold  text-xl md:text-2xl text-gray-400   mb-1"  >
              Social Follow
            </div>
            <div className=' flex  justify-center items-center px-1 mb-5 mt-0 '>
              <a href="https://www.facebook.com/" >  <img src="image/facebook.png" className=" w-10  mx-2 " alt="Facebook" /></a>
              <a href="https://www.instagram.com/" >  <img src="image/instagram.png" className=" w-10  mx-2" alt="instagram" /></a>
              <a href="https://twitter.com/i/flow/login" >  <img src="image/twitter.png" className=" w-12  mx-2" alt="twitter" /></a>
              <a href="https://www.youtube.com/" >   <img src="image/youtube.png" className=" w-12  mx-2" alt="youtube" /></a>

            </div>
          </div>
        </footer>

      </div>

    </>
  );
}

export default App;
