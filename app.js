//Book Constructor
function Book(title, author, isbn){
    this.title = title
    this.author = author
    this.isbn = isbn
}

//UI Constructor
function UI() {}

//Add book to List
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list')

    //Create tr element
    const row = document.createElement('tr')

    //Insert columns
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `

    //Append to the list
    list.appendChild(row)
}

//Clear Fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
}

//Event Listeners
document.getElementById('book-form').addEventListener('submit',function(e){
    
    //UI Variables & Get Form values
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isbn = document.getElementById('isbn').value
    
    //Instantiate Book
    const book = new Book(title, author, isbn)
    
    //Instantiate UI
    const ui = new UI()
    
    //Add book to List
    ui.addBookToList(book)

    //Clear fields
    ui.clearFields()

    e.preventDefault()
})