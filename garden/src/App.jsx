import React from 'react'
// import m2 from '../src/assets/m2/avif'

const App = () => {
  return (
    <>
    <main className='p-2   w-full '>
<section className="bg-[url('/src/assets/m2.avif')] bg-cover bg-center w-screen  ">
  
  <nav className="flex justify-end gap-10 p-5 text-white">
    <h1>ABOUT</h1>
    <h1>ARTICLES</h1>
    <h1>SUBSCRIBE</h1>
  </nav>

  <div className="flex flex-col items-center justify-center h-[80vh] text-white">
    <h1 className="text-9xl font-bold tracking-[10px]">
      LOMBOOK
    </h1>

    <h1 className="mt-4 text-xl tracking-[4px]">
      HOLISTIC HEALTHY & MORE
    </h1>
    <hr className='border my-5 border-white w-[5%] h-2  bg-white '/>
  </div>

</section>
    
    <section>
      <div  className='flex flex-col items-center bg-gray-300  w-full my-4  '>
        <h1 className='text-5xl font-bold tracking-[10px]'>latest articles</h1>
            <hr className='border my-5 border-black w-[5%] h-2  bg-black  '/>
        <div>
{/* imsa and articles  */}
          <div>
            <img src="" alt="" />
            <hr />
            <p></p>
          </div>
 
          <div>
            <img src="" alt="" />
            <hr />
            <p></p>
          </div>

          <div>
            <img src="" alt="" />
            <hr />
            <p></p>
          </div>
        
        </div>
      </div>
    </section>
    </main>
    
    
    </>
  )
}

export default App