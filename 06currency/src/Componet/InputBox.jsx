import { useId } from "react";
import React  from "react";

function InputBox({
    label,
    amount,
    onAmountchange,
    selectCurrency = "usd",
    onCurrencyChange,
    CurrencyOptions = [],
    amountDisable = false,
    currencyDisable = false,



}) {
 const amountInputId = useId()
    return(
        <div className="bg-white p-3 rounded-lg text-sm flex">
     <div className="w-1/2">
            <label className="text-black/40 mb-2 inline-block"
                htmlFor={amountInputId}
            >
                {label}
            </label>
            <input 
            className="outline-none w-full bg-transparent inline-block"
            id={amountInputId}
            type="number"
            placeholder="Amount" 
            value={amount}
            disabled = {amountDisable}
            onChange={(e)=> onAmountchange && onAmountchange(Number(e.target.value))}
            />

     </div>
     <div className="flex flex-wrap w-1/2 justify-end text-right">
        <p className="text-black/40 mb-2 w-full">
            Currency Type
        </p>
        <select
        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        value={selectCurrency}
        disabled ={currencyDisable}
        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
         >
            {CurrencyOptions.map((currency)=>{
                <option key={currency} value={currency}>
                {currency}
            </option>
            })}

        </select>

     </div>
        </div>
    )
}

export default InputBox;