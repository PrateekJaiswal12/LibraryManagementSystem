import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import BookCarousel from '../book/BookCarousel';

const CatalogOverviewSection = ({ books, label }) => {

    const bookState = useSelector((state) => state.book);
    const navigate = useNavigate();

    const handleViewMore = () => {
        navigate(`catalog?genre=${label}&subject=${label}`);
    }

    // console.log(books.length)
    // console.log(label)
  return (
    <div className='w-full h-[500px]'>
      <div className="flex h-[10%] justify-between items-end px-4">
        <h4 className='font-bold text-2xl'>{ label }</h4>
        <p className='hover:underline hover:cursor-pointer' onClick={handleViewMore} >View more...</p>
      </div>
      { books.length > 0 && !bookState.loading && <BookCarousel books={books} /> }
    </div>
  )
}

export default CatalogOverviewSection
