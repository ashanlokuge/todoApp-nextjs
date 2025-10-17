import React from 'react'
import CheckIcon from './icons/CheckIcon';
import CrossIcon from './icons/CrossIcon';
import CalenderIcon from './icons/CalenderIcon';
import { useState } from 'react';
import { todoDeleted } from '@/app/features/todo/todoSlice';
import { useDispatch } from 'react-redux';

type Todo = { id: number; name: string };
type TodoItemProps = { todo: Todo };

const TodoItem = ({ todo }: TodoItemProps) => {
  const [done, setDone] = useState(false)
  const dispatch = useDispatch();
  return (
    <div className="mt-2 flex justify-between">
        <div className={`bg-[#FFECA4] p-2 px-6 rounded-full justify-between w-full flex h-12 font-20px ${done?"line-through":""}`}>
          {todo.name}
          <div className='flex justify-between w-1/4 items-center pl-8'>
            <button className='w-4 h-4 bg-red-500 rounded-full'></button>
            <div className='bg-[#FBD752]  flex rounded-0.75xl justify-center gap-4 items-center w-3/4 h-6'>
                <div className='cursor-pointer'>
                  <CalenderIcon/>
                </div>
                <div>5/9/2024</div>
            </div>
          </div>  
        </div>

        <div className='flex gap-4 ml-3 items-center'>
          <button className='bg-[#FF8282]  w-8 h-8 p-2 rounded-full cursor-pointer'
          onClick={()=>dispatch(todoDeleted(todo.id))}
          >
            <CrossIcon/>
          </button>
          <button className='bg-[#C3FFAD]  w-10 h-10 p-2 rounded-full cursor-pointer items-center 
          '
          onClick={() => setDone(!done)}>
            <CheckIcon/> 
          </button>
        </div>   
    </div>
  )
}

export default TodoItem