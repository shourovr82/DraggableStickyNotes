import React, { useRef } from 'react'
import './input.css'

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {

  const inputRef = useRef<HTMLInputElement>(null);



  return (
    <div className='input-main'>
      <form
        onSubmit={e => {
          handleAdd(e)
          inputRef.current?.blur();
        }}
        className='input'>
        <input
          ref={inputRef}
          value={todo}
          onChange={
            e => setTodo(e.target.value)
          }
          type="input" placeholder='Enter a task' className='input-box' />
        <button className='input-submit' type='submit'>GO</button>
      </form>
    </div>
  )
}

export default InputField