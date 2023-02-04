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
//Badge Functionality
let badges = document.querySelectorAll(".badge");
for (let i = 0; i < badges.length; i++) {
    let tasks = document.querySelectorAll(".tasks");
    badges[i].textContent = tasks[i].children.length;
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