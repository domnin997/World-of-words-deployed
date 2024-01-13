import { Outlet } from "react-router"
import AppHeader from "../header/header"
import AppFooter from "../footer/footer"

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