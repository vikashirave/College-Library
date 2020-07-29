console.log("This is app.js");

//Constructor
function Book(name, author, type){
    this.name = name;
    this.author = author;
    this.type = type;
};
 
//Display Constructor
function Display(){

}

//Add methods to Display prototype





//Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
    console.log('You have submitted library from !'); 
    let name = documet.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    //fiction, prgramming, cooking

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    

    if(fiction.checked){
        type = fiction.value;
    }
    else if(programming.checked){
        type = programming.value;
    }
    else if(cooking.checked){
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log("book");
    e.preventDefault();

}