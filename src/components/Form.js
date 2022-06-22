import React from 'react';

const Form = ({ onChange, todoItem, onClick }) => {
  return (
    <>
      <input
        onChange={onChange}
        type='text'
        className='form-control mt-3 p-3'
        placeholder='Enter your task'
        value={todoItem}
      />
      <button
        onClick={onClick}
        type='button'
        className='btn btn-secondary mt-3 w-100 p-3'
      >
        Add new Task
      </button>
    </>
  );
};

export default Form;
