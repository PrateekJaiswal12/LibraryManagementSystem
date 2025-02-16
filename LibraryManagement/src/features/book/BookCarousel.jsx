import React, { useState } from 'react'
import BookCard from './BookCard';

const BookCarousel = ({books}) => {

    const [order, setOrder] = useState(books);

    const moveLeft = () => {
        let item = order[0];
        let reordered = order.slice(1, order.length);

        reordered.push(item);
        setOrder(reordered);
    }

    const moveRight = () => {
        let item = order[order.length - 1];
        let reordered = order.slice(0, order.length - 1);

        reordered = [item, ...reordered];
        setOrder(reordered);
    }

    // console.log(books)

  return (
    <div className="relative w-full h-[450px] shadow-sm flex justify-center flex-wrap overflow-hidden items-center p-4 rounded-md gap-x-2 gap-y-4">
    {/* Left Navigation Button */}
    <button 
        className="absolute left-3 top-1/2 flex h-10 w-10 items-center justify-center rounded-full text-xl hover:bg-slate-100 cursor-pointer select-none transform -translate-y-1/2"
        onClick={moveLeft}
    >
        {`<`}
    </button>

    {/* Right Navigation Button */}
    <button 
        className="absolute right-3 top-1/2 flex h-10 w-10 items-center justify-center rounded-full text-xl hover:bg-slate-100 cursor-pointer select-none transform -translate-y-1/2"
        onClick={moveRight}
    >
        {`>`}
    </button>
    <div className="flex flex-row gap-x-2 flex-nowrap">

    {/* Book Cards */}
    {order.map((item) => (
        <BookCard key={item.barcode} book={item} />
    ))}
    </div>
</div>

  )
}

export default BookCarousel
