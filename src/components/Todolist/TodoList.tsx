import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../../boolHoooks';
import SingleTodo from '../singleTodo/SingleTodo';
import './todolist.css'

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[]
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos,
  setTodos, setCompletedTodos,
  completedTodos
}: Props) => {
  return (
    <div className='container-list'>

      <Droppable droppableId='todosList'>
        {
          (provided) => (
            <div className='todos' ref={provided.innerRef} {...provided.droppableProps}>
              <h4 className='todo-task-title'>
                Active Tasks
              </h4>
              {
                todos.map((todo, index) => (
                  <SingleTodo todo={todo} key={todo.id} todos={todos}
                    setTodos={setTodos}

                    index={index}
                  />
                ))
              }

              {provided.placeholder}

            </div>
          )
        }

      </Droppable>


      <Droppable droppableId='todosRemove'>
        {
          (provided) => (
            <div className='todos todos-complete remove'
              ref={provided.innerRef} {...provided.droppableProps}>
              <h4 className='todo-task-title'>
                Completed Tasks
              </h4>
              {
                completedTodos.map((todo, index) => (
                  <SingleTodo index={index} todo={todo} key={todo.id} todos={completedTodos}
                    setTodos={setCompletedTodos}
                  />
                ))
              }
              {provided.placeholder}
            </div>
          )
        }


      </Droppable>




    </div >
  )
}

export default TodoList