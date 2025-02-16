import React from 'react'
import BookInfo from '../BookInfo'

const BookOfTheWeek = () => {
  return (
    <div className='h-fit w-[98%] rounded-xl shadow-xl p-4'>
         <hr />
      	<h1 className='text-4xl pt-4 text-center text-slate-600 font-extrabold'>Book of the week</h1>

      <BookInfo 
        book={
            {
                _id: 1234,
                barcode: 1234,
                cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1579621267i/968.jpg",
                title: "The Da Vinci Code",
                authors: ["Dan Brown"],
                description: "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols. As Langdon and gifted French cryptologist Sophie Neveu sort through the bizarre riddles, they are stunned to discover a trail of clues hidden in the works of Leonardo da Vinci—clues visible for all to see and yet ingeniously disguised by the painter.Even more startling, the late curator was involved in the Priory of Sion—a secret society whose members included Sir Isaac Newton, Victor Hugo, and Da Vinci—and he guarded a breathtaking historical secret. Unless Langdon and Neveu can decipher the labyrinthine puzzle—while avoiding the faceless adversary who shadows their every move—the explosive, ancient truth will be lost forever.",
                subjects: [
			"Suspense & Thriller",
			"Spiritual Fiction",
			"hieros gamos",
			"Priory of Sion",
			"Holy Grail",
			"Vitruvian Man",
			"Fibonacci sequence",
			"safe deposit boxes",
			"mystery & suspense",
			"Templars",
			"Manuscripts",
			"Last Supper in art",
			"Symbolism in architecture",
			"suspense fiction",
			"adventure fiction",
			"Catholics",
			"puzzles",
			"International thriller",
			"Code and cipher stories",
			"Mystery fiction",
			"crimes against art museum curators",
			"art appreciation",
			"thrillers",
			"suspense",
			"Historical Mystery & Detective Fiction",
			"Religious fiction",
			"Mystery",
			"Aventures",
			"Religious articles",
			"Crimes against",
			"Romans",
			"Appreciation",
			"Occultisme",
			"Art museum curators",
			"Sociedades secretas",
			"Grial",
			"Ficción",
			"Robert Langdon (Fictitious character)",
			"Novela",
			"Powiesc amerykanska",
			"T¿umaczenia polskie",
			"Polish language materials",
			"Secret societies",
			"Cryptographers",
			"Fiction",
			"Grail",
			"Reading Level-Grade 9",
			"Reading Level-Grade 8",
			"Reading Level-Grade 11",
			"Reading Level-Grade 10",
			"Reading Level-Grade 12",
			"Detective and mystery stories",
			"Cryptography",
			"Fictional Works",
			"American fiction",
			"Leonardo, da vinci, 1452-1519, fiction",
			"Paris (france), fiction",
			"Fiction, mystery & detective, general",
			"Langdon, robert (fictitious character), fiction",
			"Fiction, thrillers",
			"Fiction, thrillers, general",
			"Large type books",
			"Fiction, suspense",
			"Museumsdirektor",
			"Bruderschaft",
			"Mord",
			"Manuscritos",
			"Criptografía",
			"Belletristische Darstellung",
			"Maria Magdalena",
			"New York Times reviewed",
			"Religious",
			"General",
			"England, fiction",
			"Fiction, thrillers, suspense",
			"Chang pian xiao shuo",
			"collectionid:dbrl"
		],
		publicationDate: "2003-03-18T06:00:00.000Z",
		publisher: "Doubleday",
		pages: "489",
		genre: "Fiction",
		records: []
            }
        }
      />
    </div>
  )
}

export default BookOfTheWeek
