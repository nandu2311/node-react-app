import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('')
  const API_URL = import.meta.env.VITE_API_URL || 'http://54.160.162.210:3000';
  useEffect(() => {
    axios.get('{API_URL}:3000/api/hello')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', textAlign: 'center' }}>
      <h1>React + Vite on GitHub Pages</h1>
      <p>Backend on EC2 + Database on RDS PostgreSQL</p>
      <p>{message}</p>
    </div>
  )
}

export default App
