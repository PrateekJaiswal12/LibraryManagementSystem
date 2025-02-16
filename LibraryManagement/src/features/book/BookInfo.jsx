import { mapAuthorsToString } from '@/utils/BookUtils'
import React from 'react'


const BookInfo = ({ book }) => {
  return (
    <div className='w-full h-fit rounded-lg p-4'>
      <div className="w-full flex justify-evenly items-start">
        <img className="w-1/4 mr-6 rounded-sm hover:border- " src={book?.cover}/>
        <div className="w-3/4">
            <h2 className='font-bold mt-3 md:text-4xl text-3xl'>{book?.title}</h2>
            <h3 className='font-semibold mt-2 italic hover:underline'><span className='font-bold text-slate-600'>Author: </span>{mapAuthorsToString(book)}</h3>
            <div className='flex justify-start gap-2'>
                <p><span className='font-bold text-slate-600'>Published by:</span> {book?.publisher},</p>
                <p><span className='font-bold text-slate-600'>On: </span>{book?.publicationDate.slice(0,10)}</p>
            </div>
            <p className='italic mt-1'>{book?.description}</p>
        </div>

      </div>
    </div>
  )
}

export default BookInfo
