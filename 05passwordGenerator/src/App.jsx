import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)
  const PasswordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed)
    str += "0123456789"

    if(charAllowed)
    str += "!@#$%^&*"

    for(let i = 1; i<=length; i++)
    {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass);
  }
  ,[length , numberAllowed, charAllowed, setPassword])

  useEffect(()=>{
    PasswordGenerator()
  },[length, numberAllowed, charAllowed, PasswordGenerator])

const copypassword = useCallback(()=>{
  passwordRef.current?.select()
  // passwordRef.current?.setSelectionRange(0, 999);
  window.navigator.clipboard.writeText(password)},
  [password])




  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value = {password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={()=>{copypassword()}} className='bg-blue-500 px-3 transition-all 
            duration-300 transform hover:scale-105 hover:opacity-70'>Copy</button>
          </div>
          <div className = 'flex items-center gap-x-1'>
            <input type="range"
             min = {6}
             max = {100}
             className='cursor-pointer'
             onChange={(e)=>{
              setLength(e.target.value);
           }}
            />
            <label> Length :{length}</label>
            <input type="checkbox"
             defaultChecked = {numberAllowed}
             id = "numberInput"
             onChange={()=>{
                setNumberAllowed((prev)=>(!prev));
             }}
            />
            <label>Numbers</label>
            <input type="checkbox"
             defaultChecked = {charAllowed}
             id = "charInput"
             onChange={()=>{
                setCharAllowed((prev)=>(!prev));
             }}
            />
            <label>Characters</label>
          </div>
      </div>
    </>
  )
}

export default App





