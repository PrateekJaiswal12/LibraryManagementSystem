import { setCurrentBook } from "@/redux/slices/BookSlice";
import { setDisplayLoan } from "@/redux/slices/ModalSlice";
import { mapAuthorsToString } from "@/utils/BookUtils";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BookCard = ({ book }) => {

    const user = useSelector((state) => state.authentication.loggedInUser);
    const dispatch = useDispatch();

    const [available, setAvailable] = useState(() => {
      if(book.records.length === 0) return true;

      return book.records[0].status === 'AVAILABLE'
    });

    const [buttonClass, setButtonClass] = useState("");

    const handleLoan = (e) => {
      e.stopPropagation();
      if(user?.type === 'EMPLOYEE') {
        dispatch(setCurrentBook(book));
        dispatch(setDisplayLoan(true));
      }
    }

    const navigate = useNavigate();
    const displayBook = () => {
        navigate(`/resource/${book.barcode}`);
    }


    useEffect(() => {
        let c = 'book-card-loan-button';

        if(available) {
          c += ' available';
        }   else{
          c += ' unavailable';
        }

        if(user && user.type === 'EMPLOYEE' && available) {
            c += ' checkout'
        }   else{
          c += ' checkin';
        }

        setButtonClass(c);
    },[available, user?.type, book.records])

  if (!book) {
    return <p className="text-red-500 text-center">No book details available</p>;
  }

  return (
    <div id="book-card" className="h-[420px] w-[300px] bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200" onClick={displayBook}>
      <img
        className="w-full h-60 object-contain"
        src={book?.cover}
        alt={book?.title}
      />
      <div className="p-4 ">
        <h2 className="text-xl font-semibold whitespace-nowrap text-ellipsis text-gray-800">{book?.title}</h2>
        <p className="text-gray-600 whitespace-nowrap text-ellipsis text-sm">by {mapAuthorsToString(book)}</p>
        <p className="text-gray-700  text-left text-sm mt-2 line-clamp-2">{book?.description}</p>
      </div>
      <Button className={buttonClass} onClick={handleLoan}>Status : {available ? 'AVAILABLE' : 'UNAVAILABLE'}</Button>
    </div>
  );
};

export default BookCard;
