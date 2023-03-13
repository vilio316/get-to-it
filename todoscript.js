//Badge Functionality
let badges = document.querySelectorAll(".badge");
function badgeUpdate() {
  for (let i = 0; i < badges.length; i++) {
    let tasks = document.querySelectorAll(".tasks");
    badges[i].textContent = tasks[i].children.length;
  }
}
badgeUpdate();
//
let clicks;
if (localStorage.length > 0) {
  clicks = (localStorage.length - 1) / 2;
} else {
  clicks = 0;
}
const clickCount = () => {
  clicks += 1;
  localStorage.setItem("clicks", clicks);
};
// Movement, Delete Logic
let tasks_undone = document.querySelector("#todo");
let tasks_done = document.querySelector("#done");
let tasks_classless;
//

//Tracking The Buttons
function doneUpdate() {
  let done_button = document.querySelectorAll(".madone");
  tasks_classless = document.querySelectorAll(".task");
  for (let i = 0; i < done_button.length; i++) {
    done_button[i].onclick = () => {
      console.table(localStorage);
      console.log(done_button);
      if (done_button[i].textContent == "Mark as Done") {
        done_button[i].textContent = "Mark as Undone";
        localStorage.setItem(
          `task_done ${i + 1}`,
          localStorage.getItem(`task_name ${i + 1}`)
        );
        localStorage.setItem(
          `task_desc_done ${i + 1}`,
          localStorage.getItem(`task_details ${i + 1}`)
        );
        localStorage.removeItem(`task_details ${i + 1}`);
        localStorage.removeItem(`task_name ${i + 1}`);
        tasks_done.appendChild(tasks_classless[i]);
      } else {
        done_button[i].textContent = "Mark as Done";
        localStorage.setItem(
          `task_name ${i + 1}`,
          localStorage.getItem(`task_desc_done ${i + 1}`)
        );
        localStorage.setItem(
          `task_details ${i + 1}`,
          localStorage.getItem(`task_desc_done ${i + 1}`)
        );
        localStorage.removeItem(`task_desc_done ${i + 1}`);
        localStorage.removeItem(`task_done ${i + 1}`);
        tasks_undone.appendChild(tasks_classless[i]);
      }
      badgeUpdate();
      console.table(localStorage);
    };
  }
}
doneUpdate();

let taskChildren;
function deleteUpdate() {
  let delete_button = document.querySelectorAll(".delete");
  tasks_classless = document.querySelectorAll(".task");
  for (let j = 0; j < delete_button.length; j++) {
    delete_button[j].onclick = () => {
      taskChildren = Array.from(tasks_undone.children);
      let task_pos = taskChildren.indexOf(tasks_classless[j]);

      console.table(localStorage);
      if (task_pos !== -1) {
        tasks_undone.removeChild(tasks_classless[j]);
        localStorage.removeItem(`task_details ${j + 1}`);
        localStorage.removeItem(`task_name ${j + 1}`);
      } else {
        tasks_done.removeChild(tasks_classless[j]);
        localStorage.removeItem(`task_desc_name ${j}`);
        localStorage.removeItem(`task_done ${j}`);
      }
      badgeUpdate();
      console.table(localStorage);
    };
  }
}
deleteUpdate();
//

//Task Headers
function descUpdate() {
  let taskheaders = document.querySelectorAll(".task-head");
  let taskbodies = document.querySelectorAll(".task-description");
  for (let b = 0; b < taskheaders.length; b++) {
    taskheaders[b].onclick = () => {
      if (taskbodies[b].className.indexOf("show") == -1) {
        taskbodies[b].classList.replace("none", "show");
      } else {
        taskbodies[b].classList.replace("show", "none");
      }
    };
  }
}
descUpdate();
//

function localLooper() {
  for (let a = 1; a < 30; a++) {
    let li_task = document.createElement("li");
    li_task.classList.add("task");
    let div_1 = document.createElement("div");
    let div_flexBetween = document.createElement("div");
    div_flexBetween.classList.add("flex");
    div_flexBetween.classList.add("between");
    let span_taskHead = document.createElement("span");
    span_taskHead.classList.add("task-head");
    if (
      localStorage.getItem(`task_name ${a}`) === null ||
      localStorage.getItem(`task_name ${a}`) === "null"
    ) {
      span_taskHead.textContent = localStorage.getItem(`task_name ${a + 1}`);
    } else {
      span_taskHead.textContent = localStorage.getItem(`task_name ${a}`);

      let div_2 = document.createElement("div");
      let button_madone = document.createElement("button");
      button_madone.classList.add("madone");
      button_madone.textContent = "Mark as Done";
      let button_delete = document.createElement("button");
      button_delete.classList.add("delete");
      button_delete.textContent = "Delete";

      let div_taskDescription = document.createElement("div");
      div_taskDescription.classList.add("task-description");
      div_taskDescription.classList.add("none");
      if (
        localStorage.getItem(`task_details ${a}`) === null ||
        localStorage.getItem(`task_details ${a}`) === "null"
      ) {
        div_taskDescription.textContent = localStorage.getItem(
          `task_details ${a + 1}`
        );
      } else {
        div_taskDescription.textContent = localStorage.getItem(
          `task_details ${a}`
        );
      }
      div_2.appendChild(button_madone);
      div_2.appendChild(button_delete);
      div_flexBetween.appendChild(span_taskHead);
      div_flexBetween.appendChild(div_2);
      div_1.appendChild(div_flexBetween);
      div_1.appendChild(div_taskDescription);
      li_task.appendChild(div_1);
      tasks_undone.appendChild(li_task);
      deleteUpdate();
      doneUpdate();
      badgeUpdate();
      descUpdate();
    }
  }
}
function localDoneLoop() {
  for (let a = 1; a < 30; a++) {
    let li_task = document.createElement("li");
    li_task.classList.add("task");
    let div_1 = document.createElement("div");
    let div_flexBetween = document.createElement("div");
    div_flexBetween.classList.add("flex");
    div_flexBetween.classList.add("between");
    let span_taskHead = document.createElement("span");
    span_taskHead.classList.add("task-head");
    if (
      localStorage.getItem(`task_done ${a}`) === null ||
      localStorage.getItem(`task_done ${a}`) === "null"
    ) {
      span_taskHead.textContent = localStorage.getItem(`task_done ${a + 1}`);
    } else {
      span_taskHead.textContent = localStorage.getItem(`task_done ${a}`);

      let div_2 = document.createElement("div");
      let button_madone = document.createElement("button");
      button_madone.classList.add("madone");
      button_madone.textContent = "Mark as Done";
      let button_delete = document.createElement("button");
      button_delete.classList.add("delete");
      button_delete.textContent = "Delete";

      let div_taskDescription = document.createElement("div");
      div_taskDescription.classList.add("task-description");
      div_taskDescription.classList.add("none");
      if (
        localStorage.getItem(`task_desc_done ${a}`) === null ||
        localStorage.getItem(`task_desc_done ${a}`) === "null"
      ) {
        div_taskDescription.textContent = localStorage.getItem(
          `task_desc_done ${a + 1}`
        );
      } else {
        div_taskDescription.textContent = localStorage.getItem(
          `task_desc_done ${a}`
        );
      }
      div_2.appendChild(button_madone);
      div_2.appendChild(button_delete);
      div_flexBetween.appendChild(span_taskHead);
      div_flexBetween.appendChild(div_2);
      div_1.appendChild(div_flexBetween);
      div_1.appendChild(div_taskDescription);
      li_task.appendChild(div_1);
      tasks_done.appendChild(li_task);
      deleteUpdate();
      doneUpdate();
      badgeUpdate();
      descUpdate();
    }
  }
}
//"New Task" button
let newTask = document.getElementById("new-task");
newTask.addEventListener("click", () => {
  let tasks = document.getElementById("task-create");
  if (tasks.className.indexOf("show") == -1) {
    tasks.classList.replace("none", "show");
  } else {
    tasks.classList.replace("show", "none");
  }
});
//

//Theme Slider
let slider = document.getElementById("slider");
let themePicture = document.getElementById("theme");
let css_link = document.getElementById("css");
themePicture.src = "sun-solid.svg";
css_link.href = "todo_light.css";
slider.addEventListener("click", () => {
  if (!slider.className.includes("slid")) {
    slider.classList.replace("not", "slid");
    themePicture.src = "moon-solid.svg";
    css_link.href = "todo_dark.css";
    slider.style.boxShadow = "0";
  } else {
    themePicture.src = "sun-solid.svg";
    css_link.href = "todo_light.css";
    slider.style.boxShadow = "0.2rem 0.2rem black";
    slider.classList.replace("slid", "not");
  }
});
//

//Task Category Div Code
let category = document.querySelectorAll(".task-type");
let categories = Array.from(category);
//Click Event
for (let i = 0; i < categories.length; i++) {
  categories[i].addEventListener("click", () => {
    if (categories[i].className.indexOf("clicked") == -1) {
      categories[i].classList.add("clicked");
      categories[i].nextElementSibling.classList.replace("none", "show");
    } else {
      categories[i].classList.remove("clicked");
      categories[i].nextElementSibling.classList.replace("show", "none");
    }
  });
}

//
let close_button = document.querySelector("#close_button");
close_button.addEventListener("click", () => {
  let tasks = document.getElementById("task-create");
  if (tasks.className.includes("show")) {
    tasks.classList.replace("show", "none");
  }
});

let localGet = document.getElementById("localStore");
// Adding New Tasks with The Add Task Button
let makeTask = document.querySelector("#make-task");
const createTask = () => {
  let task_name = document.getElementById("task-name");
  let task_description = document.getElementById("task-desc");
  clickCount();
  //Creating the "Task Tree":
  localStorage.setItem(`task_name ${clicks}`, task_name.value);
  localStorage.setItem(`task_details ${clicks}`, task_description.value);
  let li_task = document.createElement("li");
  li_task.classList.add("task");

  let div_1 = document.createElement("div");
  task_name.value = "";
  task_description.value = " ";
  let div_flexBetween = document.createElement("div");
  div_flexBetween.classList.add("flex");
  div_flexBetween.classList.add("between");
  let span_taskHead = document.createElement("span");
  span_taskHead.classList.add("task-head");
  span_taskHead.textContent = localStorage.getItem(`task_name ${clicks}`);

  console.table(localStorage);
  let div_2 = document.createElement("div");
  let button_madone = document.createElement("button");
  button_madone.classList.add("madone");
  button_madone.textContent = "Mark as Done";
  let button_delete = document.createElement("button");
  button_delete.classList.add("delete");
  button_delete.textContent = "Delete";

  let div_taskDescription = document.createElement("div");
  div_taskDescription.classList.add("task-description");
  div_taskDescription.classList.add("none");
  div_taskDescription.textContent = localStorage.getItem(
    `task_details ${clicks}`
  );

  div_2.appendChild(button_madone);
  div_2.appendChild(button_delete);
  div_flexBetween.appendChild(span_taskHead);
  div_flexBetween.appendChild(div_2);
  div_1.appendChild(div_flexBetween);
  div_1.appendChild(div_taskDescription);
  li_task.appendChild(div_1);
  tasks_undone.appendChild(li_task);
  deleteUpdate();
  doneUpdate();
  badgeUpdate();
  descUpdate();
};

makeTask.addEventListener("click", () => {
  let tasks = document.getElementById("task-create");
  if (tasks.className.includes("show")) {
    tasks.classList.replace("show", "none");
  }
});
makeTask.addEventListener("click", createTask);

let undone = document.getElementById("undone");
undone.onload = localDoneLoop();
