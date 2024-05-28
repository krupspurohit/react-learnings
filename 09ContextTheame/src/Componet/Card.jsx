import React from 'react'

export const Card = () => {
  return (
   <>
   <div className='bg-gray-600 rounded-lg m-5 border-4 dark:bg-white'>
   <div className='  dark:bg-black bg-gray-400 content-center'>
      <div className='p-4 justify-center items-center rounded-md border-2'>
         <div className=' p-5 border-2 rounded-lg inline-block'>
            <img src="/src/assets/react.svg" alt="" />
         </div>
         <div className='text-xl font-bold text-black dark:text-white block'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, quod.</p>
         </div>
      </div>
   </div>
   </div>
   </>
  )
}
