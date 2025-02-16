import { calculatePaging } from '../../utils/CatalogUtils';
import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';

const CatalogSearchPageNavigator = () => {

    const pagingInformation = useSelector((state) => state.book.pagingInformation);

    const navigate = useNavigate();
    const {search}  = useLocation();

    const navigatePrevious = () => {
        if(pagingInformation && pagingInformation.currentPage > 1) {
            if(search.includes("&page=")) {
                let splitString = search.split("&page=");
                let newTerms = splitString[0] + `&page=${pagingInformation.currentPage -1}`;
                navigate(`/catalog${newTerms}`);
            } else{
                let newTerms = search + `&page=${pagingInformation.currentPage -1}`;
                navigate(`/catalog${newTerms}`);
            }
        }

    }

    const navigateToNumber = (e) => {
        if(search.includes("&page=")) {
            let splitString = search.split("&page=");
            let newTerms = splitString[0] + `&page=${e.currentTarget.id}`;
            navigate(`/catalog${newTerms}`);
        } else{
            let newTerms = search + `&page=${e.currentTarget.id}`;
            navigate(`/catalog${newTerms}`);
            console.log(newTerms);

        }
    }

    const navigateNext = () => {
        if(pagingInformation && pagingInformation.currentPage < pagingInformation.totalPages) {
            if(search.includes("&page=")) {
                let splitString = search.split("&page=");
                let newTerms = splitString[0] + `&page=${pagingInformation.currentPage + 1}`;
                navigate(`/catalog${newTerms}`);
            } else{
                let newTerms = search + `&page=${pagingInformation.currentPage + 1}`;
                // console.log(newTerms)
                navigate(`/catalog${newTerms}`);
            }
        }
    }
    // console.log(pagingInformation?.totalPages);
    // console.log(calculatePaging(pagingInformation))

  return (
    <div className='w-full flex font-semibold justify-center p-2 rounded-lg items-center mt-8'>
      <p className='cursor-pointer mx-2 p-2 text-sm hover:bg-slate-100 shadow-md rounded-sm' onClick={navigatePrevious} >Prev</p>
      <div className="flex justify-center items-center h-fit">
      {pagingInformation &&
            calculatePaging(pagingInformation).map((num) => {
                if(`${pagingInformation.currentPage}` === num ) {
                    return <p key={num} className='bg-slate-200 p-2 m-2 text-sm shadow-md rounded-sm'>{num}</p>
                }  
                
                return <p key={num} id={num} onClick={navigateToNumber} className='hover:bg-gray-200 p-2 text-sm shadow-md rounded-sm cursor-pointer'>
                        {num}
                    </p>
                
            })
        }


      </div>
      <p className='cursor-pointer mx-2 hover:bg-slate-100 p-2 text-sm shadow-md rounded-sm' onClick={navigateNext}>Next</p>
    </div>
  )
}

export default CatalogSearchPageNavigator
