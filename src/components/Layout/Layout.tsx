import { Link, Outlet } from 'react-router-dom'
import './styles.sass'
import { Footer } from '../Footer'

export const Layout = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav__container">
          <img src="assets/logo.svg" className="nav__logo" alt="Flash Logo" />
          <div className="nav__link">
            <Link to="/logout" data-testid="cypress-link-signout">
              Sign Out
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  )
}
