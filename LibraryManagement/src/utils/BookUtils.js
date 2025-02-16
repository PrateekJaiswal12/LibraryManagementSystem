

export function mapAuthorsToString(book) {
  let authors = "";

  for(let author of book.authors) {
    authors += author;
    authors += ", ";
  }

  return authors.slice(0, authors.length - 2);
} 