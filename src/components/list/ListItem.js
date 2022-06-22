import React from 'react';
import { FaTrash } from 'react-icons/fa';

const ListItem = ({ item, onDeleteClick }) => {
  return (
    <li
      id={item.id}
      className='shadow border list-group-item  d-flex justify-content-between my-1 '
    >
      <h3 className='text-center mx-auto'>{item.message}</h3>
      <h3>
        <FaTrash
          onClick={onDeleteClick}
          style={{ color: 'red', cursor: 'pointer' }}
        />
      </h3>
    </li>
  );
};

export default ListItem;
