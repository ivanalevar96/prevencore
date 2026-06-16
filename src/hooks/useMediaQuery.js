import { useState, useEffect } from 'react'

/**
 * Dynamic media-query hook. Re-renders the component whenever the query's
 * match state changes (e.g. on resize / orientation change), enabling fully
 * dynamic responsive behaviour without page reloads.
 */
export function useMediaQuery(query) {
  const getMatch = () =>
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia(query).matches
      : false

  const [matches, setMatches] = useState(getMatch)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mql = window.matchMedia(query)
    const handler = (e) => setMatches(e.matches)
    setMatches(mql.matches)
    // addEventListener is the modern API; fall back for older Safari
    if (mql.addEventListener) mql.addEventListener('change', handler)
    else mql.addListener(handler)
    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', handler)
      else mql.removeListener(handler)
    }
  }, [query])

  return matches
}

// Shared breakpoints
export const useIsMobile = () => useMediaQuery('(max-width: 939px)')
export const useIsTablet = () => useMediaQuery('(max-width: 767px)')
export const usePrefersReducedMotion = () =>
  useMediaQuery('(prefers-reduced-motion: reduce)')
