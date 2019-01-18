import React from 'react';

const DeleteBtn = props => {
  return (
    <button
      href='/'
      className='btn-floating waves-effect waves-light red'
      onClick={props.deleteBook}
    >
      <i className='material-icons' value={props.id}>
        delete_forever
      </i>
    </button>
  );
};

export default DeleteBtn;
