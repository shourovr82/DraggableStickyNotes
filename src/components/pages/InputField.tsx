import React from 'react'
import './input.css'

const InputField = () => {
  return (
    <div>
      <form className='input'>
        <input type="input" placeholder='Enter a task' className='input-box' />
        <button className='input-submit' type='submit'>GO</button>
      </form>
    </div>
  )
}

export default InputField