

import { book } from './database.js';
import { Card } from './card.js';


class SearchBook {
    books = []

    searchBooks(category, wordSearch) {
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

    getBooks() {
        return this.books
    }
}



function handleClick(e) {
    if (e.target.matches(".select-box") || e.target.matches(".selected-value")) {
        toggleSelectBox(e.target);
        return;
    }

    if (e.target.matches(".option")) {
        selectOption(e.target, e);
        return;
    }

    if (!e.target.closest(".material-select")) {
        closeAllSelects(e);
    }
}


function toggleSelectBox(selectBox) {
    const wrapper = selectBox.closest(".material-select");
    const options = wrapper.querySelector(".options");
    selectBox.classList.toggle("active");
    options.classList.toggle("show");
}

function selectOption(option, e) {
    const wrapper = option.closest(".material-select");
    const box = wrapper.querySelector(".select-box");
    const value = wrapper.querySelector(".selected-value");
    const options = wrapper.querySelectorAll(".option");

    options.forEach((opt) => opt.classList.remove("selected"));
    option.classList.add("selected");
    value.textContent = option.textContent;

    box.classList.add("filled");
    box.classList.remove("active");
    wrapper.querySelector(".options").classList.remove("show");
}

function closeAllSelects(e) {
    document.querySelectorAll(".material-select").forEach((wrapper) => {
        wrapper.querySelector(".options").classList.remove("show");
        wrapper.querySelector(".select-box").classList.remove("active");
    });
}



const searchBook = new SearchBook()


document.addEventListener("click", handleClick);

document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const category = document.querySelector(".option.selected")?.getAttribute("data-category");
    const wordSearch = document.getElementById("searchInput")?.value;

    if (!wordSearch) {
        flashy("Por favor, proporciona un dato de búsqueda", "warning");
        return;
    }
    
    if (!category) {
        flashy("Por favor, selecciona una categoría de búsqueda", "warning");
        return;
    }

    searchBook.books = []
    searchBook.searchBooks(category, wordSearch);
    const results = searchBook.getBooks();
    const container = document.getElementById("container");
    container.innerHTML = '';
    
    if(results.length === 0) {
        container.innerHTML = `<p>No se ha obtenido ningún resultado</p>`;
        return;
    }
    
    results.forEach( book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'accordion active';
        bookElement.innerHTML = Card(book);
        container.appendChild(bookElement);
    })
    
});

