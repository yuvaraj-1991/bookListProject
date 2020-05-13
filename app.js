//UI Variables
const form = document.getElementById('book-form')
const title = document.getElementById('title')
const author = document.getElementById('author')
const isbn = document.getElementById('isbn')
const tbody = document.getElementById('book-list')


form.addEventListener('submit',function(e){
    e.preventDefault()

      
    //function titledata(){

        const titleInput = title.value
    
        //Create Elements 
        const titleInputValue = document.createElement('td')
        //Create ClassName
        titleInputValue.className = 'titleInput'
        //Add text content 
        titleInputValue.innerHTML = titleInput
    
        //Create link
        const link = document.createElement('link')
        //Create ClassName
        link.className = 'link'
        //Add Icon to link
        link.innerHTML = 'X'
        //Append link to titleInput
        //titleInputValue.appendChild(link)
    
        tbody.appendChild(titleInputValue)
    //}
    
    //function authorData(input){
        const authorInput = author.value
    
        //Create Element
        const authorInputValue = document.createElement('td')
        //Create ClassName
        authorInputValue.className = 'authorInput'
        //Add text content
        authorInputValue.innerHTML = authorInput
        //Append link
       // authorInputValue.appendChild(link)
    
        tbody.appendChild(authorInputValue)

    //function isbn data

    const isbnInput = isbn.value

    //Create element
    const isbnInputValue = document.createElement('td')
    //Create Classname
    isbnInputValue.className = 'isbninput'
    //Text content
    isbnInputValue.innerHTML = isbnInput
    //Append Link
    //isbnInputValue.appendChild(link)

    tbody.appendChild(isbnInputValue)

    tbody.appendChild(link)
    })

    
    



