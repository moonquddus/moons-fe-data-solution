import { useMemo } from "react"
import { Link, To, useLocation } from "react-router-dom"
import './NavbarItem.css'

interface NavbarItemProps {
  to: To
  icon?: string
}

function NavbarItem(props: React.PropsWithChildren<NavbarItemProps>) {
  const { icon, to, children, ...data} = props
  const location = useLocation()

  const isActive = useMemo(() => {
    return location.pathname === to
  }, [location, to])

  const baseClass = 'f-navbar-item'
  return (
    <li tabIndex={-1}>
      <Link to={to} className={`${baseClass} ${isActive && `${baseClass}--active`}`} tabIndex={1} aria-label={`Navigate to ${children}`} {...data}>
        {icon && <img className={`${baseClass}__icon`} src={icon} role="presentation" alt={`Icon for ${children}`} />}
        <span className='u-desktop-only'>{children}</span>
      </Link>
    </li>
  )
}

export default NavbarItem
