import { fetchAllBooks } from '@/redux/slices/BookSlice';
import { generateRandomGenre, getRandomBooksByGenre } from '@/utils/CatalogUtils';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CatalogOverviewSection from './CatalogOverviewSection';

const CatalogOverview = () => {

    const dispatch = useDispatch();
    const bookState = useSelector((state) => state.book);

     const [genres, setGenres] = useState(() => {
        return generateRandomGenre()
    });

    useEffect(() => {
        dispatch(fetchAllBooks());
    }, []);

  return (
    <>
        {
            bookState.books.length > 0 && !bookState.loading ?
            <div className='h-fit w-full text-center'>
                <h2 className='font-bold  text-4xl p-4 '>Welcome to our library, we currently have {bookState.books && bookState.books.length} books</h2>
                <h4 className='font-bold text-slate-500 text-3xl'>Browse our selected books below, or search for something using the top navigation bar.</h4>
                {genres.map((genre) => {
                    return <CatalogOverviewSection key={genre} books={getRandomBooksByGenre(genre, bookState.books)} label={genre} />
                })}
            </div> :
            <></>
        }
    </>
  )
}

export default CatalogOverview
