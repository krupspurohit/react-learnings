import React from 'react'


export const Contact = () => {
  return (
    <>

<div className='text-4xl bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent font-bold text-center py-2 font-serif'><h1>Send a Message</h1></div> 

    <div className='flex flex-wrap w-full justify-center items-center h-screen'>

      <div className=' border-gray-300 rounded-md border-2 flex justify-evenly m-5 items-center w-full h-screen'>
       
        <div className='justify-start w-full flex-1 m-5  py-8 h-screen'>
        {/* {/ <div className='text-4xl bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent font-bold text-center py-2 font-serif'><h1>Send a Message</h1></div> /} */}
   <form action="" >
                <div className='w-full'>
                <div> <label htmlFor='name' className='inline'>Name:</label></div>
                        <input 
                        type='text'
                        placeholder='Enter Your Name'
                        id='name'
                        required
                        className='border-2 border-black rounded-md m-2'>
                        </input>
                </div>

                    <div>
                    <div> <label htmlFor="email">Email:</label></div>
                                        <input 
                                        type='email'
                                        placeholder='Enter Your Email'
                                        id='email'
                                        required
                                        className='border-2 border-black rounded-md m-2'>
                                        </input>
                    </div>

                    <div>
                    <div><label htmlFor='msg' className='text-center'>Message:</label></div>
                    <textarea
                    id="message"
                    placeholder='Enter Your Message'
                    required
                    className='border-2 border-black rounded-md m-2'>
                    </textarea>
                    </div>

                  <button type='submit' className='bg-blue-200 border-2 border-blue-900 rounded-md p-1 ml-16'>Submit</button>
        </form>
       </div>

        <div className='justify-center flex-2 w-full m-5 py-8 h-screen'>
          <div className='text-center text-2xl font-bold'>Contact Us</div>
          <div><b>Addres:</b> 12/14, Vidya Nagar Main Rd, Manhar Plot, Bhakti Nagar, Rajkot, Gujarat 360001</div>
          <div><b>Call:</b> +91 7874804852</div>
        </div>

          <div className='justify-end flex-3 w-full m-5 py-8 h-screen'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.7457664029225!2d70.79187587434423!3d22.287618343356865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb7337737307%3A0xde8564445a27f967!2sGokul%20hospital%20Rajkot!5e0!3m2!1sen!2sin!4v1716532548417!5m2!1sen!2sin" 
          
          className='w-full border-0 h-full px-6 py-2 justify-end'
        ></iframe>
          </div>

   </div>
    </div>
    </>
  )
}