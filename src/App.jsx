import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ContactUsForm} from './components/contact.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ContactUsForm />
    </div>
  )
}

export default App
