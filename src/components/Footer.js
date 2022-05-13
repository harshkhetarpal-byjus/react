import './Footer.css'
import FooterMenu from './FooterMenu'

const Footer = () => {
    const importantLinks = [
        { text: 'Home', to: 'home' },
        { text: 'About Us', to: 'about_us' },
        { text: 'Contact Us', to: 'contatc_us' },
        { text: 'Login', to: 'login' },
    ];
    
    const featuredServicesLinks = [
        { text: 'Windows Hosting', to: 'windows_hosting' },
        { text: 'Linux Hosting', to: 'linux_hosting' },
        { text: 'Cloud Hosting', to: 'cloud_hosting' },
        { text: 'Webmail', to: 'webmail' },
    ];
    
    const contactUsLinks = [
        { text: 'Bengaluru, Karnataka - 560698', to: 'address' },
        { text: 'Phone: +91-99999999', to: 'call' },
        { text: 'Email: info@hosting.com', to: 'mail' },
    ];
    

  return (
    <>
        <footer className='footer bg-dark p-4 text-white'>

            <div className='footer-logo pt-5'>
                <h2>Hosting Company</h2>
            </div>

            <FooterMenu heading={'Important Links'} links={importantLinks} />
            <FooterMenu heading={'Featured Services'} links={featuredServicesLinks} />
            <FooterMenu heading={'Contact Us'} links={contactUsLinks} />

        </footer>
    </>
  )
}

export default Footer