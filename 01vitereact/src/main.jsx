import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

// const reactElement=React.createElement(
//   'a',
//   {href:'https://google.com',target:'_blank'},
//   'click me to visit google'
// )

function Myapp(){
  return(
    <div>
      <h1>Custum app !</h1>
    </div>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Myapp />
  </StrictMode>,
)

// reactElement