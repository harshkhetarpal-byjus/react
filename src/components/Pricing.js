import PropTypes from 'prop-types'
import Heading from './Heading'
import Button from './Button'

const Pricing = ({heading, price, description, buttonTitle, buttonStyleType}) => {
  return (
    <>
        <div className='card mb-4 box-shadow'>
            <div className="card-header">
                <Heading title={heading} type={4} style={{ textAlign: 'center' }} />
            </div>
            <div className="card-body text-center">
                <h1 className="card-title pricing-card-title">
                    ${price} <small className="text-muted">/ mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                    {
                        description.map( (des, index) => {
                            return <li key={index}> {des} </li>  
                        })
                    }
                </ul>
                <Button title={buttonTitle} styleType={buttonStyleType} />
                {/* <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button> */}
            </div>
        </div>
    </>
  )
}

Pricing.defautProps = {
    heading : 'Free',
    price : 0,
    description : [
        '10 users included', '2 GB of storage', 'Email support', 'Help center access'
    ]
}

Pricing.propTypes = {
    heading : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    description : PropTypes.array.isRequired
}

export default Pricing