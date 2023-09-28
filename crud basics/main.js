const form = document.getElementById('form');
const input = document.getElementById('input');
const msg = document.getElementById('msg');
const posts =document.getElementById('posts');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

const formValidation=()=>{
    if(input.value === ""){
      msg.innerText = `Please ensure field is filled`;

    }else{
        msg.innerHTML ="";    
        acceptData(); 
    }
   
}

// creating an object
const data = {};

//accepting data
const acceptData =()=>{
    data['text'] =input.value;
    console.log(data);
    createPost();
}


//creating post
const createPost =()=>{
    posts.innerHTML += `
          <div class="content">
             <p>${data.text}</p>
            <span class="options">
               <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
               <i onClick="deletePost(this)" class="fa-solid fa-trash"></i>
           </span>
           </div>
            `;
    input.value ="";        
}

// deleting post
const deletePost =(e)=>{
    e.parentElement.parentElement.remove();
}

//updating post
const editPost =(e)=>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
}