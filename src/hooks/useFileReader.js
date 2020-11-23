import { useEffect, useState } from 'react'

const useFileReader = file => {
  const [blob, setblob] = useState(null)
  const [reading, setreading] = useState(false)
  const [error, seterror] = useState(null)
  useEffect(() => {
    seterror(null)

    if (file) {
      const reader = new FileReader()
      setreading(true)
      reader.onerror = () => {
        setreading(false)
        seterror()
      }
      reader.onload = () => {
        setreading(false)
        setblob(reader.result)
      }

      reader.readAsDataURL(file)
    } else setblob(null)

    return () => {}
  }, [file])

  return { result: blob, error, reading }
}

export default useFileReader
