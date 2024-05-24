import React from 'react'
import about from './About1.jpg'

export const About = () => {
  return (
   <>
   
   <div className='flex flex-wrap w-full  justify-center items-center'>
            <div className='flex w-full max-w-screen-lg justify-between items-center p-3'>
                    <div className='flex-1 p-3 '>
                        <h1 className='text-lg font-bold text-gray-400'>About Me</h1>
                        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nesciunt illo architecto nam maiores eum officia, aspernatur fugit sapiente ullam? Totam, suscipit quam. Eveniet ut aspernatur laborum explicabo quas nobis perferendis in molestias tenetur. Architecto quis odio iste sunt dicta laudantium quae consectetur, excepturi in, distinctio libero natus aliquam cumque?</div>
                    </div>
                    <div className='flex-1 p-3 flex justify-center '>
                            <img src={about} alt="" className='border-2 border-solid border-black rounded-md'/>
                    </div>
            </div>
   </div>
   </>
  )
}