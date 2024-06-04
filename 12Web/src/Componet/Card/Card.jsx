import React from 'react'

export const Card = () => {
  return (
    <>
    {/* <div className='w-full h-screen'>
    <div className='text-lg font-bold border rounded bg-red-200 text-center m-5'>Please Login</div>
    </div> */}

    <div className='flex flex-wrap justify-center items-center rounded bg-white/60 m-4 w-full'>
      <div className='flex rounded m-4 justify-center items-center'>
        <div className='border rounded  inline bg-white/20 m-3'>
          <div className=' rounded-lg p-4 '><img src="./src/assets/card1.jpg"  /></div>
              <div className='font-bold px-2'>
                Lorem ipsum dolor sit amet.
              </div>
        </div>

        <div className='border rounded  inline bg-white/20 m-3'>
          <div className='rounded-lg p-4 '><img className='rounded-lg' src="./src/assets/card2.jpg"  /></div>
              <div className='font-bold px-2'>
                Lorem ipsum dolor sit amet.
              </div>
        </div>

        <div className='border rounded  inline bg-white/20 m-3'>
          <div className='rounded-lg p-4 '><img src="./src/assets/card3.jpg"  /></div>
              <div className='font-bold px-2'>
                Lorem ipsum dolor sit amet.
              </div>
        </div>
       

      </div>
    </div>
    </>
  )
}
