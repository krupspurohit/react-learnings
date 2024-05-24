import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Home = () => {
    return (
        <>
            <div className='flex flex-wrap bg-gradient-to-t from-indigo-200 via-purple-200 to-pink-200 w-full justify-center items-center'>
                <div className='flex flex-wrap w-full justify-center items-center'>

                    <div className='w-full justify-start p-3'>

                    </div>

                    <div className='justify-end  text-black flex flex-wrap text-lg'>
                        <NavLink
                            to='' className={({ isActive }) =>
                                'p-4 hover:text-pink-900 $ {isActive ? "text-red-900" :"text-gray-700"}'} >
                            <div className='p-4 hover:text-pink-900'>Home</div>
                        </NavLink>

                        <NavLink to="/about"
                            className={({ isActive }) =>
                                'p-4 hover:text-pink-900 $ {isActive ? "text-red-900" :"text-gray-700"}'}

                        >
                            <div className='p-4 hover:text-pink-900'>About Us</div>
                        </NavLink>


                        <NavLink
                            to="/contact" className={({ isActive }) =>
                                'p-4 hover:text-pink-900 $ {isActive ? "text-red-900" :"text-gray-700"}'}

                        >
                            <div className='p-4 hover:text-pink-900'>Contact Us</div>
                        </NavLink>

                        <button className=' border-2 border-black m-3 hover:bg-slate-200'>
                            Sign In
                        </button>

                    </div>
                </div>
            </div>
            <div>
                {/* {/ <video src="./src / assets / Homevideo.webm" className='w-full h-screen'></video> /} */}
            <video className="h-full w-screen rounded-lg" controls autoPlay>
                <source
                    src="./src/assets/Homevideo.webm"
                    type="video/mp4" />
            </video>
        </div >
    </>
  )
}