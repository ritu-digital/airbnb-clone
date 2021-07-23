import React from 'react';
import '../Home.css';
import Card from './Card';
import ExploreCard from './ExploreCard';
import Button from '@material-ui/core/Button';
import Hero from './Hero';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  return (
    <>
      <Hero />
      <div className='home'>
        <h2>Explore Nearby</h2>
        <ExploreCard />
        <div className='homeExplore__section'>
          <img
            // src='https://img.freepik.com/free-vector/cartoon-nature-landscape-with-mountain-forest-deciduous-trees-trunks-clearance_107791-3706.jpg?size=626&ext=jpg'
            src='https://cdn.pixabay.com/photo/2016/11/29/06/20/blonde-1867768_1280.jpg'
            alt='explore places'
          />
          <div className='homeExplore__sectionLeft'>
            <span>Not sure where to go? Perfect.</span>
            <Button onClick={() => history.push('/searchpage')}>
              I'm<span className='button-text'> flexible</span>
            </Button>
          </div>
        </div>
        <h2>Live anywhere</h2>
        <div className='home__section'>
          <Card
            src='https://i.travelapi.com/hotels/37000000/36980000/36974800/36974773/4b344076_z.jpg'
            title='Outdoor getaways'
            description='Unique activities we can do together, led by a world of hosts.'
          />
          <Card
            src='https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720'
            title='Unique stays'
            description='Spaces that are more than just a place to sleep.'
          />
          <Card
            src='https://pg.b5z.net/get/nb5z/m1200-*/i/u/10240357/i/Indoor_Outdoor_Living_Create_a_Backyard_Getaway.jpg'
            title='Entire homes'
            description='Comfortable private places, with room for friends or family.'
          />
          <Card
            src='https://rentmedenver.com/wp-content/uploads/pets-home-rental-property-landlord-rules.jpg'
            title='Pets allowed'
            description='Comfortable private places, with room for friends or family.'
          />
        </div>
        <h2>Discover Experiences</h2>
        <p>Unique activities with local experts - in person or online.</p>
        <div className='home__section'>
          <Card
            src='https://www.startupdonut.co.uk/sites/default/files/styles/landing_pages_lists/public/production%20image/pottery.jpg?itok=fPOtNyP2'
            title='Featured collection: Wanderlust'
            description='Travel from home with Online Experiences'
          />
          <Card
            src='https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/27f5d5372dfcfd14f2b9d2edaebb6914/original'
            title='Online Experiences'
            description='Live, interactive activities led by hosts'
          />
          <Card
            src='https://d1oh9y2nmj4y5b.cloudfront.net/uploads/photo/filename/3933/5_re.jpg'
            title='Experiences'
            description='Local things to do wherever you are'
          />
        </div>
        <div className='home__sectionLast'>
          <img
            src='https://www.westend61.de/images/0000995835pw/woman-at-home-with-cup-of-coffee-looking-out-of-balcony-door-RBF06385.jpg'
            alt='hosting home'
          />
          <div className='home__sectionLastInfo'>
            <span>Try Hosting</span>
            <span>
              Earn extra income and unlock new opportunities by sharing your
              space
            </span>
            <Button size='small' variant='contained'>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
