import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Chai from './Chai.jsx'
const username = "chai-aur-react"
function MyApp() {

  return (
    
      <h1>hello Priyanka | Custom  React {username}</h1>//variables curly braces mein likhe jate hn inhe bolte hn evaluated expression
      
  )
}

const ReactElement = {
  type : 'a',
  props : {
      href : 'https://google.com',
      target : '_blank'
  },
  children : 'Click me to visit google'
} 

//shi format agr react se render krna 
const AnotherElement = React.createElement(
   'a',
  {
      href : 'https://google.com',
      target : '_blank'
  },
  'Click me to visit google'
) 

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <>
    //  <App /> 
    // <Chai />
    // <MyApp />
    AnotherElement
    // </>
  // </React.StrictMode>,
)
