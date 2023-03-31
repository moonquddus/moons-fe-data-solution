import LogoDesktopImg from '../../../assets/images/logo_full.png'
import LogoMobileImg from '../../../assets/images/logo_icon.png'
import NavbarItem from '../NavbarItem/NavbarItem'
import './Navbar.css'

import AccountIcon from '../../../assets/icons/account.svg'
import HomeIcon from '../../../assets/icons/home.svg'
import InsightsIcon from '../../../assets/icons/insights.svg'

function Navbar(props: React.HTMLAttributes<HTMLElement>) {
  /**
   * This navbar makes a lot of assumptions
   * ie. we're already logged in, and we're called John
   * Probably a tooltip would have been useful when it collapses
   */
  const baseClass = 'f-navbar'
  return (
    <nav className={baseClass} data-testid='Navbar' {...props}>
      <img className={`${baseClass}__logo u-desktop-only`} alt="Calliper logo" src={LogoDesktopImg} />
      <img className={`${baseClass}__logo u-mobile-only`} alt="Calliper logo" src={LogoMobileImg} />
      <ul className={`${baseClass}__nav-list`}>
        <NavbarItem to='/' icon={HomeIcon} data-testid='NavbarHome'>Home</NavbarItem>
        <NavbarItem to='/insights' icon={InsightsIcon} data-testid='NavbarInsights'>Insights</NavbarItem>
      </ul>
      <div className={`${baseClass}__user`}>
        <img className={`${baseClass}__icon`} src={AccountIcon} role="presentation" alt={`Icon for John Smith`} />
        <span className='u-desktop-only'>John Smith</span>
      </div>
    </nav>
  )
}

export default Navbar
