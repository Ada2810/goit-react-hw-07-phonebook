import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';
import './Filter.css';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      className="filter-input"
    />
  );
};

export default Filter;
