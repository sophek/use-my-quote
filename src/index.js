import { useState, useEffect } from 'react'

export const useMyQuote = () => {
  const [say, setSay] = useState('Sophek is cool')
  useEffect(() => {
    setSay('Sophek is very cool')
  }, [])
  return { say }
}
