import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('')
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  useEffect(() => {
    axios.get('http://localhost:3000/api/hello')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <div>
      <h1>React + Vite + Node.js</h1>
      <p>{message}</p>
    </div>
  )
}

export default App
