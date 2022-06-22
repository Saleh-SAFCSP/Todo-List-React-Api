import '../App.css';
import ListGroup from './list/ListGroup';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import Form from './Form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { errorAlert, successAlert } from '../util/alerts';

const App = () => {
  const mySwal = withReactContent(Swal);

  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [fetchData, setFetchData] = useState(false);

  const onClick = async () => {
    const request = await fetch('http://localhost:8080/api/v1/todo', {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: todoItem }),
      method: 'POST',
    });

    const data = await request.json();

    if (request.status === 201) {
      successAlert(mySwal, data.message);
      setFetchData(!fetchData);
      setTodoItem('');
    } else {
      errorAlert(mySwal, data.message);
    }
  };

  const onChange = (e) => {
    setTodoItem(e.target.value);
  };

  const onDeleteClick = async (e) => {
    const id = e.target.parentNode.parentNode.parentNode.id;

    const request = await fetch('http://localhost:8080/api/v1/todo/' + id, {
      method: 'DELETE',
    });

    const data = await request.json();

    if (request.status === 200) {
      setFetchData(!fetchData);
      successAlert(mySwal, data.message);
    } else {
      errorAlert(mySwal, data.message);
    }
  };

  useEffect(() => {
    const getTodoList = async () => {
      const request = await fetch('http://localhost:8080/api/v1/todo');

      const data = await request.json();

      setTodoList(data);

      console.log(data);
    };
    getTodoList();
  }, [fetchData]);

  return (
    <>
      <Navbar projectName='Todo List' />
      <div className='container'>
        <h1 className='text-center mb-3'>Todo List !</h1>
        <ListGroup onDeleteClick={onDeleteClick} todoList={todoList} />
        <Form onChange={onChange} todoItem={todoItem} onClick={onClick} />
      </div>
    </>
  );
};

export default App;
