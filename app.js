
let userInput = document.querySelector(".user-input")
const addBtn = document.querySelector(".add-btn")
const liContainer = document.querySelector(".items")
const items = document.querySelectorAll(".item")
let myNodeList = document.querySelectorAll(".item")
let closeBtn = document.querySelector(".delete-btn")
const editBtn=document.querySelectorAll(".edit-btn")
const list = document.querySelector('ul');
const liBtn = document.getElementById("buttons")



window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    addBtn.addEventListener('click', addTodo);
})

// *********Todo task added function*****************

function addTodo() {
    const text =  userInput.value.trim();
    if (text === "") {
        alert("Please Enter Something..!");
    }
    else {
        listItems(`${text}`)
    }
}

function listItems(text) {
    const li = document.createElement("li")
    li.classList.add('item');
    li.innerHTML = `   <span class="task-text">${text}</span>
    <div id="buttons">
    <i class="fa-regular fa-pen-to-square edit-btn"></i>
    <i class="fa-solid fa-trash delete-btn"></i>
    </div>`
    liContainer.appendChild(li)
    userInput.value = ""
    myNodeList = document.querySelectorAll(".item")
 }


//************Save Task****************** */

list.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completeTask');
    }
}, false);

//***********Delete todo************ */

document.addEventListener("click", function (e) {
 
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.parentElement.classList.add("hide");
        // console.log( e.target.parentElement.parentElement);
    }
});


// Function to handle edit operation

document.addEventListener("click", function (e) {
  
    if (e.target.classList.contains("edit-btn")) {
        let item = e.target.parentElement.parentElement
        console.log(item);
        let textElem=item.querySelector(".task-text")
        let newText = prompt("Edit yor task" , textElem.textContent)
      
       if(newText===""){
        textElem.textContent=textElem.textContent
       }
       else{
        textElem.textContent=newText
       }
    }
});
