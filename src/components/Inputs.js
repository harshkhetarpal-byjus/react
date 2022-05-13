
import PropTypes  from 'prop-types'

const Inputs = ({ type, inputName, id, placeholder}) => {
  return (
    <>
        <input type={type} name={inputName} id={id} placeholder={placeholder} autoComplete={'off'} className={`form-control`} />
    </>
  )
}

Inputs.defaultProps = {
    type : 'text', 
    inputName : 'text', 
    id : 'text', 
    placeholder : 'Text'
}

Inputs.propTypes = {
    type : PropTypes.string.isRequired, 
    inputName : PropTypes.string.isRequired, 
    id : PropTypes.string.isRequired, 
    placeholder : PropTypes.string
}

export default Inputs