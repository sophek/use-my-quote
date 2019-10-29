import React from 'react'
import { useMyQuote } from '@sophek/use-my-quote'

const App = () => {
  const { say } = useMyQuote()
  return (
    <div>
      {say}
    </div>
  )
}
export default App
