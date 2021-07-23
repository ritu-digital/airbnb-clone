import { Button } from '@material-ui/core';
import React from 'react';
import '../Hero.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import HeaderHero from './HeaderHero';
import Header from './Header';

const Hero = () => {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeHeader = () => {
    window.scrollY >= 100 ? setNavbar(true) : setNavbar(false);
  };
  window.addEventListener('scroll', changeHeader);

  return (
    <div className='hero'>
      {navbar ? <Header /> : <HeaderHero />}

      <div className='hero__image'>
        <img
          src='https://img.freepik.com/free-vector/vector-landscape-with-swamp-night-forest_107791-2070.jpg?size=626&ext=jpg&ga=GA1.2.2078662437.1626739200'
          alt='hero'
        />
      </div>
      {!navbar && (
        <>
          <div className='hero__headerDetail'>
            <div className='hero__datePicker'>
              <div className='location'>
                <p>Location</p>
                <input placeholder='Where are you going?' />
              </div>
              <div className='checkIn'>
                <p>Check In</p>
                <input placeholder='Add dates' />
              </div>
              <div className='checkOut'>
                <p>Check Out</p>
                <input placeholder='Add dates' />
              </div>
              <div className='guests'>
                <p>Guests</p>
                <input placeholder='Add guests' />
              </div>
              <div className='searchbtn'>
                {showSearch && <Search />}
                <Button
                  variant='contained'
                  startIcon={<SearchIcon />}
                  style={{
                    width: '120px',
                    borderRadius: '65px',
                    padding: '12px',
                    backgroundColor: '#ff7779',
                  }}
                  onClick={() => setShowSearch(!showSearch)}
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
      <div className='hero__info'>
        <h1>Experiences that can last a lifetime!</h1>
        <Button variant='outlined' onClick={() => history.push('/searchpage')}>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
};

export default Hero;
