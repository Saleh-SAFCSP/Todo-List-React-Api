import React from 'react';
import ListItem from './ListItem';

const ListGroup = ({ todoList, onDeleteClick }) => {
  return (
    <ul className='border list-group p-3'>
      {todoList.map((item, index) => (
        <ListItem onDeleteClick={onDeleteClick} key={index} item={item} />
      ))}
    </ul>
  );
};

export default ListGroup;
