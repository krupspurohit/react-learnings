import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  // let Counter = 15
  let [counter, setcounter] = useState(0)
  const addvalue = () => {

    counter = counter + 1;
    setcounter(counter);
    console.log("Value Added : ", counter);
  }

  const removeval = () => {
    counter = counter - 1;
    setcounter(counter);
    console.log("Value Remove : ", counter);
  }
  return (
    <>
      <h1>Chai Or React</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addvalue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeval}>remove value</button>
    </>
  )
}

export default App
