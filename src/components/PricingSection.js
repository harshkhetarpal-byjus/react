
import Heading from "./Heading"
import Pricing from "./Pricing";

const PricingSection = () => {
  const pricingDes = [
    '10 users included', '2 GB of storage', 'Email support', 'Help center access'
  ];
  
  const pricingDesPro = [
    '100 users included', '500 GB of storage', 'Email support', 'SSL Certificates', '10 Email', 'Help center access'
  ];
  
  const pricingDesEnt = [
    'Unlimited Website', 'Unlimited domain', 'Unlimited users included', 'Unlimited GB of storage', 'Email support', 'SSL Certificates', 'Unlimited Email', 'Help center access'
  ];

  return (
    <>
        <div className='row p-0 m-0 mt-5 mb-5'>
            <div className='col-lg-12'>
              <Heading title={'Pricing'} type={1} style={{ textAlign: 'center' }} />
            </div>
            <div className='col-lg-3 offset-lg-1' style={{ marginLeft : 190 }}>
              <Pricing heading={'Free'} price={0} description={pricingDes} buttonTitle={'Sign Up For Free'} buttonStyleType={'btn-lg btn-block btn-outline-primary'}  />
            </div>
            <div className='col-lg-3'>
              <Pricing heading={'Pro'} price={159} description={pricingDesPro} buttonTitle={'Get Started'} buttonStyleType={'btn-lg btn-primary'} />
            </div>
            <div className='col-lg-3'>
              <Pricing heading={'Enterprise'} price={459} description={pricingDesEnt} buttonTitle={'Get Started'} buttonStyleType={'btn-lg btn-primary'} />
            </div>
        </div>
    </>
  )
}

export default PricingSection