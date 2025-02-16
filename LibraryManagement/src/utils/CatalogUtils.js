export function generateRandomGenre() {
    let choices = ['Non-Fiction', 'Childrens', 'Fantasy', 'Fiction', 'Biography', 'Romance', 'Science Fiction', 'Young Adult'];
    let chosen = [];

    while(chosen.length !== 5) {
        let num = Math.floor(Math.random() * 7);
        if(!chosen.includes(choices[num])) chosen.push(choices[num]);
    }

    return chosen;
}


export function getRandomBooksByGenre( genre, books ) {
    let filterdBooks = books.filter((book) => book.genre === genre);
    let randomBooks = [];

    if(filterdBooks.length < 10) return filterdBooks;

    while(randomBooks.length !== 10) {
        let index = Math.floor(Math.random() * filterdBooks.length);
        if(!randomBooks.some(b => b['barcode'] === filterdBooks[index].barcode)) randomBooks.push(filterdBooks[index]);
    }

    return randomBooks;
}

export function calculatePaging(pageInfo) {
    
    let pArr = [];
    if(pageInfo) {
        const totalPages = pageInfo?.totalPages;
        const currentPage = pageInfo?.currentPage;
        
        if (totalPages <= 10) {
            for (let i = 1; i <= totalPages; i++) {
                pArr.push(`${i}`);
            }
        } else if (totalPages > 10 && currentPage <= 7) {
            
            for (let i = 1; i <= 8; i++) {
                pArr.push(`${i}`);
            }

            pArr.push("...");
            for(let i = totalPages-1; i <= totalPages; i++) {
                pArr.push(`${i}`);
            }
        } else if (totalPages > 10 && totalPages - 7 > 0 && totalPages - currentPage > 5) {
            
            for (let i = 1; i <= 2; i++) {
                pArr.push(`${i}`);
            }
            pArr.push("...");
            
            for (let i = currentPage; i <= currentPage + 4; i++) {
                pArr.push(`${i}`);
            }
            pArr.push("...");
            for(let i = totalPages-1; i <= totalPages; i++) {
                pArr.push(`${i}`);
            }
        } else {
            for (let i = 1; i <= 2; i++) {
                pArr.push(`${i}`);
            }
        
            pArr.push("...");
            pArr.push("...");
            for(let i = totalPages-1; i <= totalPages; i++) {
                pArr.push(`${i}`);
            }
        }
    }   

  return pArr;
}