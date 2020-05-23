class Book {
    constructor(title, author, isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

class UI {

    //add book to list
    addBookToList(book) {
        
        const list = document.getElementById('book-list')
        
        //create tr element
        const row = document.createElement('tr')

        //Insert cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X<a></td>
        `
        //append row to book list
        list.appendChild(row)
    }

    //show alert
    showAlert(message, className) {
        //create div
        const div = document.createElement('div')
        //add classes
        div.className = `alert ${className}`
        //add text
        div.appendChild(document.createTextNode(message))
        //get parent
        const container = document.querySelector('.container')
        //get form
        const form = document.querySelector('#book-form')
        //insert alert
        container.insertBefore(div,form)

        //time-out after 3 secs
        setTimeout(function(){
            document.querySelector('.alert').remove()
        },3000)
    }

    //delete book
    deleteBook(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove()
        }
    }

    //clear fields
    clearFields() {
        document.getElementById('title').value = ''
        document.getElementById('author').value = ''
        document.getElementById('isbn').value = ''
    }
}

//Event Listener for add book
document.getElementById('book-form').addEventListener('submit',function(e){
    //get form values
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isbn = document.getElementById('isbn').value

    //instantiate book
    const book = new Book(title, author, isbn)

    //instantiate UI
    const ui = new UI()

    //Validate
    if(title === '' || author === '' || isbn === ''){
        //Error Alert
        ui.showAlert('Please fill in all fields','error')
    } else {
        //Add book to List
        ui.addBookToList(book)

        //Show success
        ui.showAlert('Book Added!','success')

        //Clear fields
        ui.clearFields()
    }
    
    e.preventDefault()
})

//Event Listener for delete
document.getElementById('book-list').addEventListener('click',function(e){

    //Instantiate UI
    const ui = new UI()

    //Delete book
    ui.deleteBook(e.target)

    //show message
    ui.showAlert('Bood Removed!','success')

    e.preventDefault()
})
