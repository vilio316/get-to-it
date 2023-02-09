//Badge Functionality
let badges = document.querySelectorAll(".badge");
function badgeUpdate(){
for (let i = 0; i < badges.length; i++) {
    let tasks = document.querySelectorAll(".tasks");
    badges[i].textContent = tasks[i].children.length;
}
}
badgeUpdate();
//

// Movement, Delete Logic
let tasks_undone= document.querySelector("#todo");
let 
tasks_done= document.querySelector("#done");
let tasks_classless;
//

//To Do and Done Lists
let taskContainer= document.getElementById("todo");
let doneContainer = document.getElementById("done");
//

//Tracking The Buttons
 function doneUpdate(){
let done_button = document.querySelectorAll(".madone");
tasks_classless= document.querySelectorAll(".task");
for (let i = 0; i < done_button.length; i++) {
    done_button[i].textContent = "Mark as Done";
    done_button[i].onclick= ()=> {
        if(done_button[i].textContent == "Mark as Done"){
            done_button[i].textContent = "Mark as Undone";
            tasks_done.appendChild(tasks_classless[i]);
          
        }
        else{
            done_button[i].textContent = "Mark as Done";
            tasks_undone.appendChild(tasks_classless[i]);
    }
    badgeUpdate();
    }
}
}
doneUpdate();

let taskChildren;
function deleteUpdate(){
    let delete_button = document.querySelectorAll(".delete");
    tasks_classless= document.querySelectorAll(".task");
for(let j=0; j < delete_button.length; j++){
    delete_button[j].textContent= "Delete";
    delete_button[j].onclick = ()=> {
        taskChildren = Array.from(taskContainer.children);
        let task_pos = taskChildren.indexOf(tasks_classless[j])
        if(task_pos !== -1){
       taskContainer.removeChild(tasks_classless[j]);
        }
        else{ doneContainer.removeChild(tasks_classless[j]);}
    badgeUpdate();
    }
}
}
deleteUpdate();
//


//Task Headers
function descUpdate(){
let taskheaders = document.querySelectorAll(".task-head");
let taskbodies = document.querySelectorAll(".task-description");
for (let b = 0 ; b < taskheaders.length; b++) {
taskheaders[b].addEventListener("click", ()=>{
    if(taskbodies[b].className.indexOf("show") == -1){taskbodies[b].classList.replace("none", "show")}
else{taskbodies[b].classList.replace("show", "none")}
})
}
}
descUpdate();
//

//"New Task" button
let newTask= document.getElementById("new-task")
newTask.addEventListener('click', ()=> {
    let tasks= document.getElementById("task-create");
    if(tasks.className.indexOf("show") == -1) {tasks.classList.replace("none","show")}
    else{tasks.classList.replace("show", "none")}
})
//

//Theme Slider
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
//



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




//
let close_button =document.querySelector("#close_button");
close_button.addEventListener("click", ()=> {
    let tasks= document.getElementById("task-create");
    if(tasks.className.includes('show')) {tasks.classList.replace("show","none")}
})

// Adding New Tasks with The Add Task Button
let  makeTask = document.querySelector("#make-task");
makeTask.addEventListener("click", ()=> {
    let task_name = document.getElementById("task-name");
    let task_description = document.getElementById("task-desc");

    //Creating the "Task Tree":
    let li_task = document.createElement("li");
    li_task.classList.add("task");

    let div_1 = document.createElement("div");
    
    let div_flexBetween = document.createElement("div");
     div_flexBetween.classList.add("flex"); div_flexBetween.classList.add("between")
    let span_taskHead = document.createElement("span"); span_taskHead.classList.add("task-head")
    span_taskHead.textContent= task_name.value;

    let div_2 = document.createElement('div');
    let button_madone = document.createElement("button"); button_madone.classList.add("madone");
    button_madone.textContent= "Mark As Done"
    let button_delete = document.createElement("button"); button_delete.classList.add("delete");
    button_delete.textContent= "Delete"

    let div_taskDescription = document.createElement("div"); 
    div_taskDescription.classList.add("task-description"); div_taskDescription.classList.add("none")
    div_taskDescription.textContent= task_description.value;

    div_2.appendChild(button_madone); div_2.appendChild(button_delete);
div_flexBetween.appendChild(span_taskHead); div_flexBetween.appendChild(div_2);
div_1.appendChild(div_flexBetween); div_1.appendChild(div_taskDescription);
li_task.appendChild(div_1);
tasks_undone.appendChild(li_task);
deleteUpdate();
doneUpdate();
badgeUpdate();
descUpdate();
})


makeTask.addEventListener("click", ()=> {let tasks= document.getElementById("task-create");
if(tasks.className.includes('show')) {tasks.classList.replace("show","none")}});