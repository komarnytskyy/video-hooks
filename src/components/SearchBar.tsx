import React, { useState } from 'react';

export const SearchBar = ({onFormSubmit}: any) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event: any) => {
    setTerm(event.target.value);
  }
  const onSubmit = (event: any) => {
    event.preventDefault();
    onFormSubmit(term);
  }

  return (
    <div className='search-bar ui segment'>
      <form onSubmit={onSubmit} className='ui form'>
        <div className="field">
          <label htmlFor="search-input">Video Search</label>
          <input
            id='search-input'
            type="text"
            value={term}
            onChange={onInputChange}/>
        </div>
      </form>
    </div>
  );
};
