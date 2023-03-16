import Array from './Homearray'
import Demo from './Homeprops'

const Home =()=>{
  
    return(
     

        <>
       
        <div className='flex  flex-wrap justify-around m-1 p-10'>
          {Array.map((item )=>{
            return(
                <>
                <Demo key={item.id} img={item.img} title={item.title} p={item.p} alt={item.alt} button={item.button}/>
                </>
            );
          })}
          </div>
    
 
          
        </>
    )
}

export default Home;