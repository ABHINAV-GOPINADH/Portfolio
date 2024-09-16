import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
  const skills = ["Javascript","python","mongoDB","Firebase","Java"]
  return (
    <div>
      <SectionTitle title="About" />
      <div className='flex w-full items-center sm:flex-col'>
        <div className='h-[70vh] w-1/2 sm:w-full'>
          <dotlottie-player src="https://lottie.host/506e8839-9af7-4ac2-90ad-f8249c91fa76/Kd1SiZMBKq.json" background="transparent" speed="1" autoplay></dotlottie-player>
        </div>
        <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
          <p className='text-white'>
            Hello! I am Abhinav. I am enjoying creating things  that live on internet.
            My interest is in AI and Software engineering.lrgbepuqevqeheqruboepqrbqerb
            qerberbqetbhytbtbqebeqthbqtehqtbgbnrtjukmytwnqetgqerhqthergqteh7jynqebe
            berer
            betqbtqrtrn
            rtbqethtqqnj
            qerberbqetbhytbtbqebeqthbqtehqtbgbnrtjukmytwnqetgqerhqthergqteh7jynqebehbqteh
          </p>
          <p className='text-white'>
            Hello! I am Abhinav. I am enjoying creating things  that live on internet.
            My interest is in AI and Software engineering.lrgbepuqevqeheqruboepqrbqerb
            qerberbqetbhytbtbqebeqthbqtehqtbgbnrtjukmytwnqetgqerhqthergqteh7jynqebe
            berer
            betqbtqrtrn
            rtbqethtqqnj
            qerberbqetbhytbtbqebeqthbqtehqtbgbnrtjukmytwnqetgqerhqthergqteh7jynqebehbqteh
          </p>
        </div>
      </div>
      <div className='py-5'>
        <h1 className='text-tertiary text-2xl'>
          Here are a few technologies I've been working with recently.
        </h1>
        <div className='flex flex-wrap gap-10 mt-5'>
        {skills.map((skill,index)=>(
          <div className='border border-tertiary py-3 px-10'>
            <h1 className='text-tertiary'>{skill}</h1>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default About