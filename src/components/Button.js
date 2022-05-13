
import PropTypes from 'prop-types'

import React from 'react'

const Button = ({title, styleType}) => {
  return (
    <>
        <button className={ `btn ${styleType}` } >{title}</button>
    </>
  )
}

Button.defaultProps = {
    title : 'Button',
    styleType : ''
}

Button.propsTypes = {
    title : PropTypes.string.isRequired,
    styleType : PropTypes.string
}

export default Button