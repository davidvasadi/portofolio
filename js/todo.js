window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
 
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        
        task_el.appendChild(task_actions_el);
        
        list_el.appendChild(task_el);
        
        input.value = '';
        
        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });
        
        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        });
        const reset_el = document.querySelector(".reset");
        reset_el.addEventListener('click',()=>{
            list_el.removeChild(task_el);
        })
    });
});





















/* let input = document.querySelector(".input");
let confirmBtn = document.querySelector(".confirm");
let resetBtn = document.querySelector(".reset");
let div = document.querySelector(".todo-value");

confirmBtn.addEventListener('click',()=>{
    classList.add('active');
})
resetBtn.addEventListener('click',()=>{
    resetBtn.classList.add('hidden');
})
//Add Function
function add(){
  console.log(div.classList.add('inactive'));
  console.log(div.c("inactive"));
/*     let divElement = document.createElement('div');
    let todoContainer = document.querySelector('.todo-container');
    let inputValue = document.createTextNode(input.value);

    //console.log(divElement.classList.add('.todo-container')); ;
    console.log(divElement.appendChild(inputValue)); ;
    console.log(todoContainer.appendChild(divElement)); ; */










//let newItemArea = document.querySelector('.newItemArea').innerHTML;
//let input = document.querySelector('#input');
/* let addBtn = document.querySelector('.addBtn');
let deleteBtn = document.querySelector('.deleteBtn');

//Add button
addBtn.addEventListener('click', () => {
    if (input.value === '') {
        input.style.font = 'red';
        input.style.borderColor = 'red';
        input.style.borderRadius = '5px';
    }
    else (addFunc())
});
//Create element with add button
function addFunc() {
    let divElement = document.createElement('div');
    let wrapDiv = document.querySelector('.wrap');
    let textNode = document.createTextNode(input.value);
    input.style.borderColor = 'lightgreen';
    input.style.borderRadius = '5px';
    divElement.classList.add('newItemArea');
    divElement.appendChild(textNode);
    wrapDiv.appendChild(divElement)
}
//Delete button
deleteBtn.addEventListener('click', () => {
    let selectedDiv = document.querySelector('.newItemArea');
    input.style.borderRadius = '5px';
    selectedDiv.remove()
})

//Ready button

let readyBtn = document.createElement('button');
readyBtn.setAttribute('class', 'readyBtn');
readyBtn.innerHTML = 'Ready';
document.body.appendChild(readyBtn);

// Ready event 
readyBtn.addEventListener('click', () => {
    let selecting = document.querySelectorAll('.newItemArea');
    //selecting.forEach(element => {
    //    element.style.color = 'green'
    //})
    document.body.classList.remove('newItemArea')
    console.log(selecting);

})
// Selecting remove 





//Password element 
let passwordElement = document.createElement('input');
passwordElement.setAttribute('type', 'password');
passwordElement.setAttribute('class', 'passwordElement');
passwordElement.setAttribute('placeholder', 'password');
document.body.appendChild(passwordElement);

//Password again element
let passwordAgain = document.createElement('input');
passwordAgain.setAttribute('type', 'password');
passwordAgain.setAttribute('class', 'passwordAgain');
passwordAgain.setAttribute('placeholder', 'password again');
document.body.appendChild(passwordAgain);

//Send button
let passwordSender = document.createElement('button');
passwordSender.setAttribute('class', 'passwordSender');
passwordSender.innerHTML = "Send";
document.body.appendChild(passwordSender);

passwordSender.addEventListener('click', passwordChecker);


//Password checker 

function passwordChecker() {
    if (passwordElement.value === '', passwordAgain.value === '') {
        console.log('need any character');
        let empty = document.createElement('div');
        document.body.appendChild(empty)
        empty.innerHTML = 'Need any character';
        empty.style.color = 'red';
    }
    //Success 
    else if (passwordElement.value === passwordAgain.value) {
        let success = document.createElement('div');
        document.body.appendChild(success)
        let successTry = success.innerHTML = 'Succesfull';
        success.style.color = "green";
        console.log("password is correct");
    }
    else (piros(), console.log('wrong character'))


    function piros() {
        passwordSender.style.border = "green";
        let failed = document.createElement('div');
        document.body.appendChild(failed)
        failed.innerHTML = 'Failed';
        failed.style.color = "red";
    }

}
 */