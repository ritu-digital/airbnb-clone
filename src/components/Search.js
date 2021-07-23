import React from 'react';
import '../Search.css';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import PeopleIcon from '@material-ui/icons/People';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div className='search'>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <div className='search__info'>
        <h2>
          Number of guests
          <PeopleIcon />
        </h2>
        <input type='number' min={0} defaultValue={2} />
        <Button
          variant='outlined'
          style={{ borderRadius: '4px' }}
          onClick={() => history.push('/searchpage')}
        >
          Search Airbnb
        </Button>
      </div>
    </div>
  );
};

export default Search;
