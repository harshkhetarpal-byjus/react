
import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Images from '../components/Images'

const About = () => {

  const about_des = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae alias doloremque fugit non consequuntur maiores omnis neque laudantium. Tempora aliquam suscipit aliquid ad fugiat qui in, animi quos sapiente vel?Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae alias doloremque fugit non consequuntur maiores omnis neque laudantium. Tempora aliquam suscipit aliquid ad fugiat qui in, animi quos sapiente vel?';

  return (
    <div className='container-full'>

      <Header />

      <div className='row p-0 m-0 mt-5 mb-5'>
        <div className='col-lg-6 offset-lg-1'>
          <Heading title={'Hosting Company is an Established hosting company in World!'} type={1} />
          <Paragraph text={`${about_des} ${about_des}`} />
        </div>
        <div className='col-lg-4'>
          <Images 
            imagePath={'http://iadvertex.com/wp-content/uploads/2018/07/About-Dynamic-Image.png'} 
            width={502} 
            height={447}
          />
        </div>
      </div> 

      <div className='row p-0'>
        <div className='col-lg-12'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default About