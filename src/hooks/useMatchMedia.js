import { useState, useEffect } from "react"

const useMatchMedia = query => {
  const [queryMatch, setQueryMatch] = useState(null)

  useEffect(() => {
    const match = window.matchMedia(query)
    setQueryMatch(match.matches)

    const handleMatchListener = () => {
      setQueryMatch(match.matches)
    }

    match.addListener(handleMatchListener)

    return () => {
      match.removeListener(handleMatchListener)
    }
  }, [query])

  return queryMatch
}

export default useMatchMedia
