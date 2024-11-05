import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [principle,setPrinciple]=useState("")
  const [rate,setRate]=useState("")
  const [year,setYear]=useState("")
  const [IsPrinciple , setIsPriciple] =useState("")
  const [IsRate , setIsRate] =useState("")
  const [IsYear, setIsYear] =useState("")
  const [Interest,setInterest]=useState(0)
   

  const validate = (e)=>{

    const {name,value}=e.target   //taking input box values using e.target method
    console.log(name);
    console.log(value);

    //  match expressions 

    if(!!value.match('^[0-9]*$')) {
      if(name == 'principle'){
        setPrinciple(value)
        setIsPriciple(true)
      }
      else if(name == 'rate'){
        setRate(value)
        setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)
      }
    }
    else{
      if(name == 'principle'){
        setPrinciple(value)
        setIsPriciple(false)
      }
      else if(name == 'rate'){
        setRate(value)
        setIsRate(false)
      }
      else{
        setYear(value)
        setIsYear(false)
      }

    }
    
    
  }
    
  const handleReact =()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setIsPriciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }
  
  const calculate=()=>{
    setInterest((principle*rate*year)/100)
  }



  return (
    <>
    <div className='bg-dark d-flex justify-content-center align-items-center' style={{height:'100vh',width:'100%'}}>
      <div className='bg-light p-5 rounded-2' style={{width:'500px'}}>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple interest easily</p>
        <div className='bg-warning p-3 mt-4 d-flex justify-content-center align-items-center rounded flex-column' style={{height:'150px' }}>
          <h1>₹{Interest}</h1>
          <p>Total simple interest</p>
        </div>
          <div className='my-3 '>
          <TextField id="outlined-basic" className='w-100' value={principle} name='principle' label="₹ Principle Amount" variant="outlined" onChange={(e)=>validate(e)} />
            {IsPrinciple==false && <p className='text-danger'>*Invalid Input</p>}
          </div>
          <div className='mb-3 '>
          <TextField id="outlined-basic" className='w-100'value={rate} name='rate' label="Rate of Interest (%)" variant="outlined"  onChange={(e)=>validate(e)} />
          {IsRate==false && <p className='text-danger'>*Invalid Input</p>}
          </div>
          <div className='mb-3 '>
          <TextField id="outlined-basic" className='w-100'value={year} name='year' label="Year(Yr)" variant="outlined"  onChange={(e)=>validate(e)} />
          {IsYear==false && <p className='text-danger'>*Invalid Input</p>}
          </div>
          <div className='my-3'>
          <Button disabled={IsPrinciple &&  IsRate && IsYear? false : true} variant="contained" style={{width:'190px'}} color='success' className='p-3' onClick={calculate}>Calculate</Button>
          <Button variant="outlined"  style={{width:'190px'}} className='p-3 m-2' onClick={handleReact}>Reset</Button>
          </div>
      </div>

    </div>
    </>
  )
}

export default App
