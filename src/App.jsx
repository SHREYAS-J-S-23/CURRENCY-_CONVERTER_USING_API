import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import useCurrency from './hooks/usecurrencyinfo'
import {Input} from './components/indexx'
function App() {
 
  const[amount,setamount]=useState(0)
  const[from,setfrom]=useState("usd")
  const[to,setto]=useState("inr")
  const[convertedamount,setconvertedamount]=useState(0)
  const currencyinfo = useCurrency(from)
  const options=Object.keys(currencyinfo)
  const convert=()=>(setconvertedamount(amount*currencyinfo[to]))
  return (
    <>
      
    <Input

    amount={amount}
    currencyOptions={options}
    onAmountChange={setamount}
  onFromChange={(currency)=>setfrom(currency)}
  onToChange={(currency)=>setto(currency)}
  fromCurrency = {from}
  toCurrency = {to}
  convert={convert}
  convertedamount={convertedamount}
    

    
    />
    
    
    </>

  )
}

export default App;

