import { useState , useEffect} from "react";

function useCurrency(Currency){
    const [data , setdata]= useState({})
   useEffect(()=>{
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json')
    .then((res) => res.json())
    .then((res)=> setdata(res[Currency]))
    console.log(data);
   }, [Currency])
console.log(data)
   return [data]
}

export default useCurrency;
