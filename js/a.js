var post = document.getElementsByClassName("buttonPost");
var clear = document.getElementsByClassName("buttonClear");
var mark = document.getElementsByClassName("buttonMark");
var del = document.getElementsByClassName("buttonDelete");

post.addEventListener("click", TodoPost); 
clear.addEventListener("click", TodoClear); 
mark.addEventListener("click", TodoMark); 
del.addEventListener("click", TodoDel);


function TodoPost(event) { // porque esta adentro de un formulario 
    event.preventDefault(); //<!---------------
    var to_do=document.getElementById("todoText").value; 
    var list=document.getElementById("todoList");

    var currentListHTML=list.innerHTML; 
    list.innerHTML = currentListHTML + `<input type ="checkbox" name="todo" /> ${to_do} <br>`
}

function TodoClear() {
    
}

function TodoMark() {
    
}

function TodoDel() {
    
}
