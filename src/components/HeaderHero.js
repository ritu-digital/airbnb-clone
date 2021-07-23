import React from 'react';
import '../HeaderHero.css';
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const HeaderHero = () => {
  return (
    <div className='headerhero'>
      <Link to='/'>
        <img
          className='headerhero__logo'
          src='https://www.heroes.liftoff.io/wp-content/uploads/2018/01/airbnb-logo-white.png'
          alt='airbnb logo'
        />
      </Link>

      <div className='headerhero__center'>
        <Link to='travel'>Places to stay</Link>
        <Link to='experiences'>Experiences</Link>
        <Link to='online'>Online Experiences</Link>
      </div>
      <div className='headerhero__right'>
        <p>Become a host</p>
        <LanguageIcon style={{ color: '#ffffff' }} />
        <Button
          className='sign-upBtn'
          variant='outlined'
          color='white'
          startIcon={<MenuIcon style={{ fontSize: '18px' }} />}
          endIcon={
            <AccountCircleIcon style={{ fontSize: '32px', color: '#717171' }} />
          }
        ></Button>
      </div>
    </div>
  );
};

export default HeaderHero;
