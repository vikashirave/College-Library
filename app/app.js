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
    let book = new Book(name,  a)
    e.preventDefault();
}