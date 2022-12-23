import React from 'react';
import { Todo } from '../../boolHoooks';
import { BsCheckLg } from 'react-icons/bs';
import { RiEdit2Fill, RiDeleteBin5Fill } from 'react-icons/ri';
import './singletodo.css'

type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className='single-todo '>
      <span className='todos-single-text'>{todo.todo}</span>
      <div>
        <div className='icon'>
          <span><RiEdit2Fill /></span>
          <span><RiDeleteBin5Fill /></span>
          <span><BsCheckLg /></span>

        </div>
      </div>
    </form>


  );
};

export default SingleTodo;