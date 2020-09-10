//BOOK CONSTRUCTOR
function Book(title,author,isbn) {
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}

function Ui(){}



//Add book

Ui.prototype.addBooks=function(book){
const list=document.getElementById("list");
const tr= document.createElement('tr');
tr.innerHTML=`<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="">X</a></td>`;
}



//Alert
Ui.prototype.showAlert=function(message, className) {
    //create div
    let  div=document.createElement("div");
    div.className=`alert ${className}`;
    div.appendChild(document.createTextNode(message));

    //get parent
    const container=document.querySelector(".container");
    //get form
    const form=document.querySelector('#form-book')
    container.insertBefore(div,form);
    setTimeout(function(){
        document.querySelector('.alert').remove();
      }, 3000);
    
}
document.getElementById("form-book").addEventListener("submit",function(e){

//GET FORM VALUE
const title=document.getElementById("title").value;
const author=document.getElementById("author").value;
const ISBN=document.getElementById("ISBN").value;
const book=new Book(title,author,ISBN);
const ui=new Ui();
if(title=="" || author=="" || ISBN==""){
   
ui.showAlert("fill all the blanks",'error');
}else{
   
ui.addBooks(book);
ui.showAlert("added successfully",'success')
}



    e.preventDefault();
})
