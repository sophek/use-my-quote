import React from 'react'
import { useMyHook } from '@sophek/use-my-quote'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App