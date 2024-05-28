import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

export const Login = () => {

    const [username , setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser}= useContext(UserContext)
    const handlesubmit= (e)=>{
            e.preventDefault()
            setUser({username, password})
    }
  return (
    <div>
        <div>LogIn</div>
        <input 
        type='text'
        placeholder='Enter Your Name'
        required
        value={username}
        onChange={(e)=>{setusername(e.target.value)}}
        />
        {" "}
        <input 
        type='password'
        required
        placeholder='Enter Your Password'
        value={password}
        onChange={(e)=>{setpassword(e.target.value)}}
        pattern='Krupa12@'/>
        {" "}
        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}
