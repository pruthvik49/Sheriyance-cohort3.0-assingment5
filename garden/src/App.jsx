import React from 'react'
import m1 from './assets/m1.jpg'
import m2 from './assets/m2.avif'
import m3 from './assets/m3.avif'
import m4 from './assets/m4.jpg'
import m5 from './assets/m5.avif'

const App = () => {
  return (
    <>
    <main className='p-2   w-full '>
    <section className="bg-[url('./assets/m2.avif')] bg-cover bg-center w-full  ">

      <nav className="flex justify-end gap-10 p-5 text-white">
        <h1>ABOUT</h1>
        <h1>ARTICLES</h1>
        <h1>SUBSCRIBE</h1>
      </nav>

      <div className="flex flex-col items-center justify-center h-[80vh] text-white">
        <h1 className="text-6xl font-bold tracking-[10px]">
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
            <h1 className='text-4xl m-3  uppercase '>latest articles</h1>
            <hr className='border my-5 border-black w-[5%] h-2  bg-black  '/>
            <div className=" w-[85%] min-h-[60vh] ">
            {/* imsa and articles  */}
              <div className='w-full h-[50%]  flex flex-col items-center '>
                <div className='w-full  '>
                <img className='h-60  w-full    ' src={m3} alt="" />
                </div>

                <div className=' flex flex-col pt-20  pb-5  w-full border border-black items-center ' >
                <hr className='border border-black bg-black w-[5%]' />
                <p>How to use mindfullness <br />in your everybody life.</p>
                </div>
              </div>
             

              

            </div>
          </div>
        </section>
    </main>


    </>
  )
}

export default App
