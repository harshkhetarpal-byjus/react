import Header from './components/Header'
import Footer from './components/Footer'
import Images from './components/Images'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import Inputs from './components/Inputs'
import Button from './components/Button'

import './App.css';

function App() {
  return (
    <div className='container-full'>
      
      <Header />

      <div className='row p-0 m-0 mt-5 mb-5'>
        <div className='col-lg-6 offset-lg-1'>
          <Heading title={'Generating the Much Needed Visitor Traffic & Sales'} type={1} />
          <Paragraph text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magni, cum debitis, tenetur tempore laudantium maiores provident deleniti nulla magnam minus quibusdam laborum commodi. Laudantium, blanditiis. Hic nulla consectetur quam.'} />
        </div>
        <div className='col-lg-4'>
          <Images 
            imagePath={'http://iadvertex.com/wp-content/uploads/2019/02/home-version-8-banner-image.png'} 
            width={502} 
            height={447}
          />
        </div>
      </div>

      <div className='row p-0 m-0 mt-5 mb-5'>
        <div className='col-lg-4 offset-lg-1'>
          <Images 
            imagePath={'http://iadvertex.com/wp-content/uploads/2019/02/home-version-8-banner-small.png'} 
            width={502} 
            height={447}
          />
        </div>
        <div className='col-lg-6 offset-lg-1'>
          <Heading title={'Leading a group of Talented SEO Analysts'} type={1} />
          <Paragraph text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magni, cum debitis, tenetur tempore laudantium maiores provident deleniti nulla magnam minus quibusdam laborum commodi. Laudantium, blanditiis. Hic nulla consectetur quam.'} />
        </div>
      </div>

      <div className='row bg-dark text-white p-0 m-0 mt-5 mb-5'>
        <div className='col-lg-12'>
          <Heading title={'Avail your quotes now'} type={1} style={{ textAlign: 'center', marginTop: '50   !important' }} />
          <Paragraph style={{ textAlign: 'center', marginTop: '50   !important' }} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magni, cum debitis, tenetur tempore laudantium maiores.'} />
        </div>
        
        <div className='col-lg-12 pb-4' style={{textAlign: 'center'}}>
          <div className='row'>
            <div className='col-lg-4 offset-lg-2'>
              <Inputs type={'email'} inputName={'email'} id={'email'} placeholder={'Your Email address.'} /> 
            </div>
            <div className='col-lg-4'>
              <Inputs type={'number'} inputName={'mobile'} id={'mobile'} placeholder={'Your Mobile NUmber'} />
            </div>
            <div className='col-lg-12 pt-4' style={{textAlign: 'center'}}>
              <Button title={'GET QUOTE'} styleType={'btn-light'} />
            </div>
          </div>
        </div>
      </div>

      <div className='row p-0'>
        <div className='col-lg-12'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
