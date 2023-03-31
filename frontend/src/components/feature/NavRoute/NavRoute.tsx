import Navbar from "../Navbar/Navbar"
import './NavRoute.css'

function NavRoute({children}: React.PropsWithChildren) {
  const baseClass = 'f-nav-route'
  /**
   * I would have probably made several variations of this
   * One being if you're not logged in, or don't need a navbar at all (fullscreen view)
   */
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
