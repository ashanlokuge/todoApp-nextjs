"use client";
import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'

type Todo = { id: number; name: string };

function TaskList() {
  const todos = useSelector((state: RootState) => state.todo.todos) as Todo[] | undefined;
  console.log(todos);
  const list = Array.isArray(todos) ? todos : [];

  if (list.length === 0) {
    return (
      <div className='mt-4'>
        <div className='font-bold text-lg'>Available Tasks</div>
        <div className='mt-2 text-gray-500'>No tasks yet.</div>
      </div>
    );
  }

  return (
    <div className='mt-4'>
       <div className='font-bold text-lg'>Available Tasks</div>
       <ul>
          {list.map((todo) => (
            <li key={todo.id}><TodoItem todo={todo} /></li>
          ))}

       </ul>
    </div>
  )
}

export default TaskList
