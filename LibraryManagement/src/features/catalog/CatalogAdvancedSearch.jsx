import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const CatalogAdvancedSearch = () => {

    const navigate = useNavigate();

    const isbnRef = useRef(null);
    const titleRef = useRef(null);
    const authorRef = useRef(null);
    const subjectRef = useRef(null);
    const descriptionRef = useRef(null);
    const genreRef = useRef(null);

    const search = () => {
        let query = "";

        if(isbnRef && isbnRef.current && isbnRef.current.value !== '') query += `?barcode=${isbnRef.current.value}`;

        if(titleRef && titleRef.current && titleRef.current.value !== '') {
            query += query === '' ? `?title=${titleRef.current.value}` : `&title=${titleRef.current.value}`;
        }

        if(authorRef && authorRef.current && authorRef.current.value !== '') {
            query += query === '' ? `?author=${authorRef.current.value}` : `&author=${authorRef.current.value}`;
        }

        if(subjectRef && subjectRef.current && subjectRef.current.value !== '') {
            query += query === '' ? `?subject=${subjectRef.current.value}` : `&subject=${subjectRef.current.value}`;
        }

        if(descriptionRef && descriptionRef.current && descriptionRef.current.value !== '') {
            query += query === '' ? `?description=${descriptionRef.current.value}` : `&description=${descriptionRef.current.value}`;
        }

        if(genreRef && genreRef.current && genreRef.current.value !== '') {
            query += query === '' ? `?genre=${genreRef.current.value}` : `&genre=${genreRef.current.value}`;
        }

        navigate(`/catalog${query}`);

    }

  return (
    <div className="w-full h-fit flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold text-slate-700">Advanced Book Search</h2>
    <p className="text-gray-600 mb-4">
      Fill in as many or little fields to narrow down your search results
    </p>
  
    <form className="w-full h-fit flex justify-evenly items-center mb-4">
      <div className="w-[15%]">
        <p className="text-gray-700 font-medium">ISBN</p>
        <input
          id="isbn"
          className="flex h-8 text-sm text-start items-center w-full p-2  border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-600"
          placeholder="ISBN"
          ref={isbnRef}
        />
      </div>
  
      <div className="w-[15%]">
        <p className="text-gray-700 font-medium">Title</p>
        <input
          id="title"
          className="flex h-8 text-sm text-start items-center w-full p-2  border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-600"
          placeholder="Title"
          ref={titleRef}
        />
      </div>
  
      <div className="w-[15%]">
        <p className="text-gray-700 font-medium">Author</p>
        <input
          id="author"
          className="flex h-8 text-sm text-start items-center w-full p-2  border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-600"
          placeholder="Author"
          ref={authorRef}
        />
      </div>
  
      <div className="w-[15%]">
        <p className="text-gray-700 font-medium">Description</p>
        <input
          id="description"
          className="flex h-8 text-sm text-start items-center w-full p-2  border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-600"
          placeholder="Description"
          ref={descriptionRef}
        />
      </div>
  
      <div className="w-[15%]">
        <p className="text-gray-700 font-medium">Subject</p>
        <input
          id="subject"
          className="flex h-8 text-sm text-start items-center w-full p-2  border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-600"
          placeholder="Subject"
          ref={subjectRef}
        />
      </div>
  
      <div className="w-[15%]">
        <p className="text-gray-700 font-medium">Genre</p>
        <input
          id="genre"
          className="flex h-8 text-sm text-start items-center w-full p-2  border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-600"
          placeholder="Genre"
          ref={genreRef}
        />
      </div>
    </form>
  
    <button
      className="mt-4 w-[30%] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
      onClick={search}
    >
      Search
    </button>
  </div>
  
  )
}

export default CatalogAdvancedSearch;
