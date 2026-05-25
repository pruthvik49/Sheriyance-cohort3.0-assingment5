import React from 'react'
// import m1 from './assets/m1.jpg'
// import m2 from './assets/m2.avif'
  import m3 from '../src/assets/m3.avif'
// import m4 from './assets/m4.jpg'
// import m5 from './assets/m5.avif'

const Card = () => {
  return (
    <>
    <div className="bg-white my-4 w-[85%] shadow-md hover:shadow-lg transition-shadow duration-300 rounded-sm overflow-hidden">
            {/* image and articles */}
              <div className='w-full flex flex-col items-center'>
                <div className='w-full'>
                  <img className='h-60 w-full  max-[400px]:h-44' src={m3} alt="Mindfulness" />
                </div>
                <div className='flex flex-col pt-8 pb-6 px-4 w-full items-center text-center gap-4' >
                  <hr className='w-[10%] border-t border-gray-400 max-[400px]:w-[20%]' />
                  <p className='text-gray-700 font-medium text-sm leading-relaxed max-[400px]:text-xs px-2'>
                    How to use mindfulness in your everyday life.
                  </p>
                </div>
              </div>
            </div>
    
    </>
  )
}

export default Card