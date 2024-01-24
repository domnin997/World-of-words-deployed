import { createContext, useMemo, useState } from 'react'

export const PageLayoutContext = createContext()

export function PageLayoutContextProvider({ children }) {
  const [headerLeftElement, setHeaderLeftElement] = useState(null)
  const [headerRightElement, setHeaderRightElement] = useState(null)
  const [footerElement, setFooterElement] = useState(null)
  const value = useMemo(
    () => ({
      headerLeftElement,
      headerRightElement,
      setHeaderLeftElement,
      setHeaderRightElement,
      footerElement,
      setFooterElement,
    }),
    [footerElement, headerLeftElement, headerRightElement]
  )
  return (
    <PageLayoutContext.Provider value={value}>
      {children}
    </PageLayoutContext.Provider>
  )
}