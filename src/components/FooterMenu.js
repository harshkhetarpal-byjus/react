import Proptypes from 'prop-types'
import './FooterMenu.css'
import Lists from './Lists';

const FooterMenu = ({ heading, links }) => {
  return (
    <>
        <div className='footer-menu p-3'>
            <h4 className='footer-heading p-3'>{heading}</h4>
            <ul className='footer-items'>
                {
                    links.map( (link, index) => {
                        return <li key={index} className='footer-item'> 
                            <Lists title={link.text} color={'text-white'} /> 
                        </li>  
                    })
                }
            </ul>
        </div>
    </>
  )
}

FooterMenu.propTypes = {
    heading: Proptypes.string.isRequired,
    links: Proptypes.array.isRequired,
}

export default FooterMenu