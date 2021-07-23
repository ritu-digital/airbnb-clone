import React from 'react';
import '../Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Header = () => {
  const history = useHistory();
  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'
          alt='airbnb logo'
        />
      </Link>

      <div className='header__center'>
        <input type='text' placeholder='Start your search' />
        <SearchIcon
          className='search-icon'
          onClick={() => history.push('/searchpage')}
        />
      </div>
      <div className='header__right'>
        <p>Become a host</p>
        <LanguageIcon style={{ color: '#373333' }} />
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

export default Header;
