import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer.css';
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer__title'>
          <div className='footer__about'>
            <h6>about</h6>
            <Link to='/process'>How Airbnb works</Link>
            <Link to='/newsroom'>Newsroom</Link>
            <Link to='/airbnb2021'>Airbnb 2021</Link>
            <Link to='/investors'>Investors</Link>
            <Link to='/airbnbplus'>Airbnb plus</Link>
            <Link to='/airbnbluxe'>Airbnb Luxe</Link>
            <Link to='/airbnbhotels'>Hotel Tonight</Link>
            <Link to='/airnbnbwork'>Airbnb for Work</Link>
            <Link to='/airbnbhosts'>Made possible by hosts</Link>
            <Link to='/careers'>Careers</Link>
          </div>
          <div className='footer__community'>
            <h6>community</h6>
            <Link to='/diversity'>Diversity and Belonging</Link>
            <Link to='/accessibility'>Accessibility</Link>
            <Link to='associates'>Airbnb Associates</Link>
            <Link to='frontline'>Frontline Stays</Link>
            <Link to='referrals'>Guest Referrals</Link>
            <Link to='/home'>Airbnb.org</Link>
          </div>
          <div className='footer__host'>
            <h6>host</h6>
            <Link to='/hosthome'>Host your home</Link>
            <Link to='/online'>Host an Online Experience</Link>
            <Link to='experience'>Host an Experience</Link>
            <Link to='hosting'>Responsible Hosting</Link>
            <Link to='resource'>Resource Centre</Link>
            <Link to='/community'>Community Centre</Link>
          </div>
          <div className='footer__support'>
            <h6>support</h6>
            <Link to='/hosthome'>Our Covid-19 Response</Link>
            <Link to='/online'>Help Centre</Link>
            <Link to='experience'>Cancellation Options</Link>
            <Link to='hosting'>Neighbourhood Support</Link>
            <Link to='resource'>Trust and Safety</Link>
          </div>
        </div>
      </div>
      <div className='footer__border'></div>
      <div className='footer__end'>
        <div className='footer__endLeft'>
          <p>&copy; 2020 Airbnb Clone</p>
          <p>Privacy • Terms • Sitemap • Company • Details</p>
        </div>
        <div className='footer__endRight'>
          <Link to='englishpage'>
            <LanguageIcon />
            <p>ENGLISH</p>
          </Link>
          <Link to='currencypage'>₹ INR</Link>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
    </>
  );
};

export default Footer;
