import BookOfTheWeek from '@/features/book/landing/BookOfTheWeek'
import ContactUs from '@/features/book/landing/ContactUs'
import LibraryCard from '@/features/book/landing/LibraryCard'
import LibraryHours from '@/features/book/landing/LibraryHours'
import UpcomingEvents from '@/features/book/landing/UpcomingEvents'
import React from 'react'


const HomePage = () => {

  return (
    <div className=''>
      <div className="w-full flex h-full p-4 items-start shadow-lg justify-between">
        <div className="w-3/4 h-fit flex flex-col justify-start items-start">
          <BookOfTheWeek/>
          <UpcomingEvents/>
          <LibraryCard />
        </div>
        <div className="w-1/4 h-full flex flex-col justify-start items-start">
          <LibraryHours />
          <ContactUs/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
