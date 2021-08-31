            

var todoList = document.getElementById("todo-list")
var form = document.getElementById("todo-form")
var input = document.getElementById("todo-input")
var c = document.getElementsByClassName("card")

function renderCard(todoText){
    // <div class="card">
    //             <p class="todo-msg">Buy mango</p>
    //             <i class="fas fa-trash"></i>
    //         </div>
    var card = document.createElement("div")
    card.classList.add("card")
    var msg = document.createElement('p')
    msg.classList.add("todo-msg")
    var del = document.createElement("i")
    del.classList.add("fas")
    del.classList.add("fa-trash")
    msg.innerHTML = todoText
    card.appendChild(msg)
    card.appendChild(del)
    todoList.appendChild(card)
    console.log(card)
    
    del.addEventListener("click", function(e){
        card.remove()
    })

}


    


form.addEventListener("submit", function(e){
    e.preventDefault()
    if(input.value !== ""){
        renderCard(input.value)
        input.value = ""
    }else{
        alert("enter a todo Item")
    }


})


// var todoForm = document.getElementById("todo-form");
// var todoInput = document.getElementById("todo-input");
// var todoList = document.getElementById("todo-list");

// function renderTodoCard(todoText) {
//     // <div class="todo-card">
//     //     <p class="todo-message">Buy Apples!</p>
//     // </div>

//     var card = document.createElement("div");
//     card.classList.add("todo-card");

//     var message = document.createElement("p");
//     message.classList.add("todo-message");
//     message.innerHTML = todoText;
//     card.appendChild(message);

//     // console.log(card);
//     todoList.appendChild(card);
// }

// todoForm.addEventListener("submit", function(e) {
//     e.preventDefault();
//     if(todoInput.value !== "") {
//         renderTodoCard(todoInput.value);
//         todoInput.value = "";
//     } else {
//         alert("Please enter a TODO")
//     }
// })