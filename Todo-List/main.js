//DOM
const form = document.getElementById('form');
const text = document.getElementById('textInput');
const date = document.getElementById('dateInput');
const textArea = document.getElementById('textarea');
const errorMessage = document.getElementById('msg');
const tasks = document.getElementById('tasks');
const  closeModal = document.getElementById('add');


//button click submit
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    formValidation();

});

  //form validation
const formValidation =()=>{
    if(text.value === "" || date.value === "" ||textArea.value === ""){
        errorMessage.innerText = `Please Ensure all fields are filled`;
    }else{
        errorMessage.innerText = "";
        acceptData();
        add.setAttribute("data-bs-dismiss", "modal");
        add.click()
        

        // IIEF Immediately Invoked Expression Functions
        (()=>{
            add.setAttribute("data-bs-dismiss", "");
        })()
    }  
}

//creating an empty object
const data = {}


//accepting and storing data
const acceptData =()=>{
    data["text"] = text.value;
    data["date"] = date.value;
    data["description"] = textArea.value;

    createTasks();


    console.log(data);
}

//creating tasks
const createTasks =()=>{
    tasks.innerHTML +=
    `
    <div>
    <span class="fw-bold">${data.text}</span>
    <span class="small text-secondary">${data.date}</span>
    <p>${data.description}</p>


    <span class="span-options">
        <i onClick ="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-regular fa-pen-to-square"></i>
        <i onClick="deleteTask(this)" class="fa-solid fa-trash"></i>
    </span>
     </div>
    `

    resetForm();
}

//resetting the form
const resetForm =()=>{
    text.value ="";
    date.value ="";
    textArea.value = "";
}


//deleting task
const deleteTask =(e)=>{
  e.parentElement.parentElement.remove();
}

//editing task
const editTask =(e)=>{
    const selectedTask = e.parentElement.parentElement;
    text.value =selectedTask.children[0].innerHTML;
    date.value =selectedTask.children[1].innerHTML;
    textArea.value = selectedTask.children[2].innerHTML;


    selectedTask.remove();

}