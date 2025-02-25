import { useState } from 'react'
import AppRouter from './Routes/Routes'

function App() {
  const [ count, setCount ] = useState(0)

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
