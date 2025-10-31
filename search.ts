
interface Book {
    nameB:string,
    Author:string
}

const book:Book[] = [
    {
        nameB:'Libro oscuro de la persuasión',
        Author:'Alejandro Yantada',
    },

    {
        nameB:'48 leyes del poder',
        Author:'Robert Greene',
    },

    {
        nameB:'Camino a la ruina, el plan secreto de la elite para el proxima crisis mundial',
        Author:'James Rickards',
    },
]


class SearchBook {
    private books:Book[] = []


    public searchBooks(category:string, wordSearch:string) {
        wordSearch = wordSearch.trim().toLowerCase()
        book.forEach( (word) => {
            if (category === 'name') {
                word.nameB.toLowerCase().includes(wordSearch) ? this.books.push(word) : null
            }
            if (category === 'author'){ 
                word.Author.toLowerCase().includes(wordSearch) ? this.books.push(word) : null
            }
        })
    }

    public getBooks(): Book[] {
        return this.books
    }
}

const searchBook = new SearchBook()
searchBook.searchBooks('name', 'libro oscuro')
console.log(searchBook.getBooks())