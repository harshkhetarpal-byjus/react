import PropTypes from 'prop-types'

const Paragraph = ({ text, style }) => {
  return (
    <>
        <p style={style} className='mt-4 mb-4'>{text}</p>
    </>
  )
}

Paragraph.defultProps = {
  text : 'This is Paragraph',
  style : {}
}
  
Paragraph.propTypes = {
  text : PropTypes.string.isRequired,
  style : PropTypes.object  
}

export default Paragraph