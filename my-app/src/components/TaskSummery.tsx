import Image from 'next/image'
import React from 'react'

const TaskSummery = () => {
  return (
    <div className='bg-[#3DBEFF] rounded-4xl text-black relative overflow-hidden p-6 shadow-lg'>
      <div className='absolute top-0 right-0 h-full w-1/3  '>
          <Image
            src= "/Layer_1.png"
            alt='illustration'
            fill
            className='object-cover opacity-80 '
          />
      </div>
      <div className='relative w-2/3 z-10'>
          <p className='font-bold '>You Have <span className='font-extrabold text-lg'>{3}</span></p>
          <h2 className='font-bold mt-2'> Tasks For Today</h2>
          <blockquote className='font-light mt-2'>&quot;It always seems impossible until it s done&quot;</blockquote>
          <p className='mt-8'>9th of September 2024</p>
      </div>

    </div>
  )
}

export default TaskSummery