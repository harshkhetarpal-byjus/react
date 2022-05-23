import PropTypes from 'prop-types'

const Lists = ({ title , color, links}) => {
  return (
    <a style={{ maxWidth: 20 }} className={ `p-3 ${color}` } href={links}>{title}</a>
  )
}

Lists.defaultProps = {
  title : 'Nav Link',
  color : 'text-dark',
  links : '/'
}

Lists.propTypes = {
  title : PropTypes.string.isRequired,
  color : PropTypes.string,
  links : PropTypes.string
}

export default Lists