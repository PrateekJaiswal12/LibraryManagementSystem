import { queryBooks } from '@/redux/slices/BookSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import BookCard from '../book/BookCard';
import CatalogAdvancedSearch from './CatalogAdvancedSearch';
import CatalogSearchPageNavigator from './CatalogSearchPageNavigator';

const CatalogSearch = () => {

    const bookState = useSelector((state) => state.book);
    const dispatch = useDispatch();
    const location = useLocation();
    

    useEffect(() => {
        dispatch(queryBooks(location.search));
    },[location.search]);

  return (
    <div className='w-full h-fit flex flex-col p-4 justify-center items-center'>
      <div className="w-[95%] h-fit justify-center items-center mb-4">
        <hr />
        <CatalogAdvancedSearch />
      </div>
      {
        !bookState.loading ?
            <>
                <h2 className='font-bold text-4xl px-4 py-6 mb-4'>Displaying {bookState.pagingInformation?.pageCount} books out of {bookState.pagingInformation?.totalCount}</h2>
                <div className="w-full flex justify-center h-fit items-center gap-4 flex-wrap">
                    {bookState.books.map((book) => <BookCard key={book.barcode} book={book} />)}
                </div>
                <div className="w-full h-fit flex items-center justify-center">
                    <CatalogSearchPageNavigator/>
                </div>
            </>
            :<></>
      }
    </div> 
  )
}

export default CatalogSearch
