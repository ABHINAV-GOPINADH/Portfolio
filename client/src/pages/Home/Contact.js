import React from 'react'
import SectionTitle from '../../components/SectionTitle';

function Contact() {
    const user={
        name: 'Abhinav Gopinadh',
        age: '22',
        gender: 'Male',
        email: 'abhinavgopinadh@gmail.com',
        mobile: '8590353527',
        country: 'India'
    };
  return (
    <div>
        <SectionTitle title='Say Hello!'/>
        <div className='flex sm:flex-col items-center justify-between'>
            <div className='flex flex-col gap-1'> 
            <p className='text-tertiary text-sm'>{'{'}</p>
            {Object.keys(user).map((key)=>(
                <p className='ml-5 text-sm'>
                    <span className='text-tertiary'>{key}:{" "}</span> 
                    <span className='text-tertiary'>{user[key]}</span>
                </p>
            ))}
            <p className='text-tertiary text-sm'>{'}'}</p>
            </div>
            <div className='h-[500px]'>
            <dotlottie-player src="https://lottie.host/7095946f-8f8c-4279-9a01-bb63120c3764/HIy3acVZy8.json" background="transparent" speed="1" autoplay></dotlottie-player>
            </div>
        </div>
    </div>
  )
}

export default Contact