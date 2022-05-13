import PropTypes from 'prop-types'

const Lists = ({ title , color}) => {
  console.log(color);
  return (
    <a style={{ maxWidth: 20 }} className={ `p-3 ${color}` } href='1'>{title}</a>
  )
}

Lists.defaultProps = {
  title : 'Nav Link',
  color : 'text-dark'
}

Lists.propTypes = {
  title : PropTypes.string.isRequired,
  color : PropTypes.string
}

export default Lists