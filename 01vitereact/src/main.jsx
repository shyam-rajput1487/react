import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

function Myapp() {
  return (
    <div>
      <h1>Custum app !</h1>
    </div>
  )
}
const anotherUser="Shyam" 
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me visit google',
  anotherUser
)

createRoot(document.getElementById('root')).
  render(
    // <StrictMode>
      // <App />
      reactElement
    // </StrictMode>
  )

