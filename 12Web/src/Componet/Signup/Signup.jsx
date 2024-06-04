import React from 'react'

export const Signup = () => {
  return (
     <>
       <div className='font-bold text-xl  text-center'>Sign Up</div>
      <div className="flex flex-wrap items-center justify-center w-full">
      
        <form className="w-1/3">
          <div>
            <label htmlFor="" className="font-bold my-3">
              Name:
            </label>
          </div>
          <input
            type="text"
            required
            placeholder="Enter Your name...."
            className="bg-black text-white p-4 w-full rounded"
          />

<div>
            <label htmlFor="" className="font-bold my-3">
              Email:
            </label>
          </div>
          <input
            type="email"
            required
            placeholder="Enter Your email...."
            className="bg-black text-white p-4 w-full rounded"
          />

          <div>
            <label htmlFor="" className="font-bold my-3">
              Password:
            </label>
          </div>
          <input
            type="password"
            required
            placeholder="Enter Your password...."
            min={6}
            className="bg-black text-white p-4 w-full rounded"
          />

          <button type="submit" 
          className="bg-black/50 text-white rounded p-2 m-3 align-middle">Sign up</button>
        </form>
      </div>
     </>
  )
}
