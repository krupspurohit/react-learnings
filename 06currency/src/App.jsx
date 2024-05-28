import { useState } from 'react'
import InputBox from './Componet/InputBox'
import './App.css'
import useCurrency from './assets/hooks/Currencyconverter'

function App() {
const [amount, setamount] = useState(0)
const [From , setFrom] = useState(0)
const [To, setTo] = useState(0)
const [convertedamount , setconvertedamount] = useState(0)

const currencyinfo = useCurrency(From)

const option = object.keys(currencyinfo)

const swap = (()=>{
  setFrom(To)
  setTo(From)
  setconvertedamount(amount)
  setamount(convertedamount)
})

const convert = (()=>{
  setconvertedamount(amount * currencyinfo[To])
})
  return (
    <>
           <div 
           className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
           style={{backgroundImage: 'url("./src/assets/currency.png")'}}
           >
              <div className='w-full'>
                <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>

                    <form 
                    onSubmit={(e)=> {e.preventDefault();
                      convert()
                    }}>
                        <div className='w-full mb-1'>
                          <InputBox
                          label="From" 
                          amount={amount}
                          CurrencyOptions={option}
                          onCurrencyChange={(currency)=>
                              setamount(amount)
                            }
                            selectCurrency={From}
                          />
                        </div>
                        <div className='relative w-full h-0.5'>
                          <button
                          type='button'
                          className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white px-2 py-0.5'>
                              Swap
                          </button>
                              
                        </div>

                    </form>
                </div>
                
              </div>
            </div>

          
    </>
  )
}

export default App
