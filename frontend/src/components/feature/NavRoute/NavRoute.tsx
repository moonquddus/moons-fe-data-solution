import Navbar from "../Navbar/Navbar"
import './NavRoute.css'

function NavRoute({children}: React.PropsWithChildren) {
  const baseClass = 'f-nav-route'
  return (
    <>
      <Navbar tabIndex={0} />
      <main tabIndex={1} className={`${baseClass}__main`}>
        {children}
      </main>
    </>
  )
}

export default NavRoute
