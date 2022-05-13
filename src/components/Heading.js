import PropTypes from 'prop-types'

const Heading = ({ title, type, style }) => {

  if(type === 1){
    return ( <> <h1 style={style} className='mt-4 mb-4'>{title}</h1> </> )
  }
  
  if(type === 2){
    return ( <> <h2 style={style} className='mt-4 mb-4'>{title}</h2> </> )
  }
  
  if(type === 3){
    return ( <> <h3 style={style} className='mt-4 mb-4'>{title}</h3> </> )
  }
  
  if(type === 4){
    return ( <> <h4 style={style} className='mt-4 mb-4'>{title}</h4> </> )
  }
  
  if(type === 5){
    return ( <> <h5 style={style} className='mt-4 mb-4'>{title}</h5> </> )
  }
  
  if(type === 6){
    return ( <> <h6 style={style} className='mt-4 mb-4'>{title}</h6> </> )
  }

  return ( <> <h1 style={style} className='mt-4 mb-4'>{title}</h1> </> )
}

Heading.defultProps = {
    title : 'This is Heading',
    type: 1,
    style: {}
}

Heading.propTypes = {
  title : PropTypes.string.isRequired,
  type : PropTypes.number, 
  style : PropTypes.object,
}

export default Heading