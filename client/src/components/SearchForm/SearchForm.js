import React from 'react';

const SearchForm = props => {
  return (
    <form className='col s12'>
      <div className='input-field'>
        <label htmlFor='search'>Search for a book</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          id='search'
          type='text'
        />
      </div>
      <button
        className='btn'
        type='submit'
        id='searchSubmit'
        onClick={props.handleSearch}
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
