import { Outlet } from "react-router"
import AppHeader from "../header/header"
import AppFooter from "../footer/footer"
import './root.css'

export default function Root () {
    
  return (
    <>
      <AppHeader/>
      <main className='workfield'>
        <Outlet />
      </main>
      <AppFooter/>
    </>
  )
}