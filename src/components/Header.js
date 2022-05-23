import './Header.css'
import Lists from './Lists'

import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
        <nav className="navigation border-bottom shadow-sm">

            <h3 className='my-0 mr-md-auto font-weight-normal'>Hosting Company</h3>

            <nav className="my-2 my-md-0 mr-md-3">

                <Link to='/' className='p-3 nav-links text-dark' >Home</Link>
                <Link to='/about' className='p-3 nav-links text-dark' >About Us</Link>
                <Link to='/contact' className='p-3 nav-links text-dark' >Contact Us</Link>
                <Link to='/login' className='p-3 nav-links text-dark' >Login</Link>
            </nav>
        </nav>
    </>
  )
}

export default Header