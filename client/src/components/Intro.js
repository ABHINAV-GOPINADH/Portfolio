import React from 'react'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
        <h1 className='text-white'>Hi, I am</h1>
        <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>
            Abhinav K Gopinadh
        </h1>
        <h1 className='text-7xl sm:text-3xl text-white font-semibold'>
            I build for the Apps and Webs.Focusing in AI
        </h1>
        <p className='text-white'>I am FullStack Web Developer/Instructor.Currently I am working as a 
            React Developer in India.Also sharing my knowledge to the students that I have gained in my carrier through
            online teaching across the world.
        </p>
        <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
    </div>
  )
}

export default Intro