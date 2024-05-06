import MeetingTypeList from '@/components/MeetingTypeList'
import React from 'react'

const Home = () => {
  const now = new Date()

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  const date = (new Intl.DateTimeFormat('en-US' , {
    dateStyle: 'full' })).format(now)

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[370px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className='flex h-full flex-col justify-center max-md:px-5 max-md:py-8 lg:p-11'>
          <div className='flex flex-col gap-8 justify-center'>
            <h1 className='text-4xl font-extrabold lg:text-6xl'> {time} </h1>
            <p className='text-lg font-medium text-sky-1 lg:text-xl'> {date} </p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  )
}

export default Home