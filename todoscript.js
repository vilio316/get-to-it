//Badge Functionality
let badges = document.querySelectorAll(".badge");
function badgeUpdate(){
for (let i = 0; i < badges.length; i++) {
    let tasks = document.querySelectorAll(".tasks");
    badges[i].textContent = tasks[i].children.length;
}
}
badgeUpdate();
let newTask= document.getElementById("new-task")
newTask.addEventListener('click', ()=> {
    let tasks= document.getElementById("task-create");
    if(tasks.style.display == "none") {tasks.style.display = "block";}
    else{tasks.style.display= "none";}
})
let slider= document.getElementById("slider");
let themePicture= document.getElementById("theme");
themePicture.src= "sun-solid.svg"
slider.addEventListener('click', ()=> {
    let slideContainer = document.getElementById("theme-slider");
    if (slideContainer.style.justifyContent == "flex-start"){
        slideContainer.style.justifyContent = "flex-end";
        themePicture.src= "moon-solid.svg";
        slider.style.boxShadow = "0";
    }
    else{
        slideContainer.style.justifyContent = "flex-start"; 
        themePicture.src= "sun-solid.svg"; 
        slider.style.boxShadow = "0.2rem 0.2rem black"
    }
}
)

//Deletion and Movement Logic
let tasks_undone= document.querySelector("#todo");
let tasks_done= document.querySelector("#done");

//Tracking The Buttons
let done_button = document.querySelectorAll(".madone");
for (let i = 0; i < done_button.length; i++) {
    done_button[i].textContent = "Mark as Done";
    
    // Listeners for Category Switching Here:
    done_button[i].addEventListener("click", ()=> {
        if(done_button[i].textContent == "Mark as Done"){
            done_button[i].textContent = "Mark as Undone";
            tasks_done.appendChild(taskheaders[i].parentNode.parentNode.parentNode);
            badgeUpdate();
        }
        else{done_button[i].textContent = "Mark as Done";
        tasks_undone.appendChild(taskheaders[i].parentNode.parentNode.parentNode);
        badgeUpdate();
    }
    })
}

//Task Category Div Code
let category = document.querySelectorAll(".task-type");
let categories= Array.from(category);
//Click Event
for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener("click" , ()=>{
        if (categories[i].className.indexOf("clicked") == -1) {
             categories[i].classList.add("clicked");
             categories[i].nextElementSibling.classList.replace('none', "show")
    }
    else{
        categories[i].classList.remove("clicked");
        categories[i].nextElementSibling.classList.replace("show", "none");
    }
}
    )
}


//Task Headers
let taskheaders = document.querySelectorAll(".task-head");
for (let b = 0 ; b < taskheaders.length; b++) {
let taskbodies = document.querySelectorAll(".task-description");
taskheaders[b].addEventListener("click", ()=>{
    if(taskbodies[b].className.indexOf("show") == -1){
    taskbodies[b].classList.replace("none", "show")
}
else{taskbodies[b].classList.replace("show", "none")}
}
)
}
