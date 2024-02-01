import './workPage.css'
import { PageLayoutContext } from '../../../../context/layoutContext'
import { useContext } from 'react'

export default function WorkPage ({ children }) {
  const {
    setHeaderLeftElement,
    setHeaderRightElement,
    setFooterElement,
  } = useContext(PageLayoutContext)

  return (
    <section className='page-section'>
      <div className='headers-wrapper'>
        <div className='header-left'
             ref={(node) => {setHeaderLeftElement(node)}}>
        </div>
        <div className='header-right'
             ref={(node) => {setHeaderRightElement(node)}}>
        </div>
      </div>
      <div className='content-container'>
        {children}
      </div>
      <div className='page-footer'
           ref={(node) => {setFooterElement(node)}}>
      </div>
    </section>
  )
}