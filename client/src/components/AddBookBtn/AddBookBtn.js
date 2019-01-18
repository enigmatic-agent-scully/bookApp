import React from 'react';

const AddBookBtn = props => {
  return (
    <button
      href='/'
      className='btn-floating waves-effect waves-light red'
      onClick={props.addBook}
    >
      <i className='material-icons' value={props.id}>
        add
      </i>
    </button>
  );
};

export default AddBookBtn;
