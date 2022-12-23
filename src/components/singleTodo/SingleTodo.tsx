import React, { useEffect, useRef, useState } from 'react';
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
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(todos.map((todo) => (
      todo.id === id ? { ...todo, todo: editTodo } : todo
    )))
    setEdit(false)
  }

  const inputEditRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputEditRef.current?.focus();
  }, [edit])

  return (
    <form className='single-todo ' onSubmit={(e) => handleEdit(e, todo.id)}>
      {
        edit ? (
          <input
            ref={inputEditRef}
            value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className='input-edit-text' type="text" name="" id="" />
        ) : (

          todo.isDone ? (
            <s className='todos-single-text'>{todo.todo}</s>
          ) : (
            <span className='todos-single-text'>{todo.todo}</span>
          )

        )
      }


      <div>
        <div className='icon'>
          <span onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit)
            }
          }}> <RiEdit2Fill /></span>
          <span onClick={() => handleDelete(todo.id)}><RiDeleteBin5Fill /></span>
          <span onClick={() => handleDone(todo.id)}><BsCheckLg /></span>

        </div>
      </div>
    </form >


  );
};

export default SingleTodo;