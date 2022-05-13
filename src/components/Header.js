import './Header.css'
import Lists from './Lists'

const Header = () => {
  return (
    <>
        <nav className="navigation border-bottom shadow-sm">

            <h3 className='my-0 mr-md-auto font-weight-normal'>Hosting Company</h3>

            <nav className="my-2 my-md-0 mr-md-3">
                <Lists title='Home' />
                <Lists title='About Us' />
                <Lists title='Contact Us' />
                <Lists title='Login' />
            </nav>
        </nav>
    </>
  )
}

export default Header