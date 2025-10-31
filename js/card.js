export function Card(book) {
    return `
        <div class="item">
            <div class="header">
                <span>${book.nameB} </span>
                <span class="arrow">▶</span>
            </div>
            <div class="content">
                <p>🛍️ Ubicación: ${book.location} </p>
                <p>👤 Autor: ${book.Author} </p>
            </div>
        </div>`
}