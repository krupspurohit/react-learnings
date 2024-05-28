import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'




function App() {

  const [length, setlenght] = useState(8)
  const [number, setNumber] = useState(false)
  const [charallow, setChar] = useState(false)
  const [password, setpass] = useState("")
  const passref = useRef(null)



  const passgen = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopalkjhsgdfzxcvbnm"

    if (number) {
      str += "0123456789"
    }

    if (charallow) {
      str += "!@#$%^&*"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      console.log(char)
    }

    setpass(pass)

    console.log(pass)

  }, [length, number, charallow, setpass])

  const copyclip = useCallback(() => {
    passref.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => { passgen() }, [length, number, charallow, passgen])

  console.log(password)


  return (
    <>
      <div className="w-full max-w-md max-auto shadow-md rounded-sm px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-center text-2xl text-white my-3">Password Generator</h1>
        <div className="shadow rounded-md overflow-hidden mb-4 flex">
          <input
            type="text"
            placeholder="Password"
            value={password}
            readOnly
            className="outline-none w-full py-1 px-3"
            ref={passref}
          />
          <button onClick={copyclip} className="outline-none bg-blue-500 text-white px-5 py-3 shrink-0 hover:bg-orange-400 hover:rounded-full">Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setlenght(e.target.value) }}
            /> <label> Lenght: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="Num"
              onChange={() => { setNumber((prev) => !prev) }}
            >
            </input>
            <label>Number {number}</label>

          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charallow}
              // id="char11"
              onChange={() => { setChar((prev) => !prev) }}
            >
            </input>
            <label>Character {charallow}</label>

          </div>
        </div>
      </div>

    </>
  )
}

export default App