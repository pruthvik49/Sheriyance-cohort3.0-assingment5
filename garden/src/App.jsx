import React from 'react'
  import m4 from '../src/assets/m4.jpg'
import Card from '../components/Card'

const App = () => {
  return (
    <>
    <main className='p-2 w-full box-border overflow-x-hidden'>
    <section className="bg-[url('./assets/m2.avif')] bg-cover bg-center w-full">

      <nav className="flex justify-end gap-10 p-5 text-white max-[400px]:gap-4 max-[400px]:p-3 max-[400px]:text-xs">
        <h1>ABOUT</h1>
        <h1>ARTICLES</h1>
        <h1>SUBSCRIBE</h1>
      </nav>

      <div className="flex flex-col items-center justify-center h-[80vh] text-white px-4 text-center">
        <h1 className="text-6xl font-bold tracking-[10px] max-[400px]:text-3xl max-[400px]:tracking-[4px]">
          LOMBOOK
        </h1>

        <h1 className="mt-4 text-xl tracking-[4px] max-[400px]:text-xs max-[400px]:tracking-[2px]">
          HOLISTIC HEALTHY & MORE
        </h1>
        <hr className='border my-5 border-white w-[5%] h-2 bg-white max-[400px]:w-[15%] max-[400px]:h-[4px]'/>
      </div>

    </section>

        <section>
          <div className='flex flex-col items-center bg-gray-300 w-full my-4 py-6'>
            <h1 className='text-4xl m-3 uppercase max-[400px]:text-xl max-[400px]:my-2 text-center'>latest articles</h1>
            <hr className='border my-5 border-black w-[5%] h-2 bg-black max-[400px]:w-[15%] max-[400px]:my-3 max-[400px]:h-[4px]'/>
            <Card />
            <Card />
            <Card />
          </div>
        </section>

        <section className='bg-white w-auto mx-3 my-3 p-3 min-h-[80vh] max-[400px]:min-h-[40vh] flex flex-col items-center'>
          <img className='w-full h-[30vh] ' src={m4} alt="" />

        </section>
    </main>


    </>
  )
}

export default App
