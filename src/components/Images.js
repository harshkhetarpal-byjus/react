import PropTypes from 'prop-types'

const Images = ({ imagePath, width, height, className }) => {
  return (
    <>
        <img src={imagePath} alt={'this is alt'} width={width} height={height} />
    </>
  )
}

Images.defaultProps = {
    imagePath : 'No path', 
    width : 100, 
    height: 100, 
    className : ''
}

Images.defaultProps = {
    imagePath : PropTypes.string.isRequired,
    width : PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    className : PropTypes.string,
}

export default Images