const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(){

taskList.innerHTML="";

tasks.forEach((task,index)=>{

const li=document.createElement("li");

li.innerHTML=`
<span class="${task.completed ? "completed" : ""}">
${task.text}
</span>

<div>
<button onclick="toggleTask(${index})">✔</button>
<button onclick="deleteTask(${index})">❌</button>
</div>
`;

taskList.appendChild(li);

});

localStorage.setItem("tasks",JSON.stringify(tasks));

}

function addTask(){

if(taskInput.value==="") return;

tasks.push({
text:taskInput.value,
completed:false
});

taskInput.value="";
renderTasks();

}

function toggleTask(index){

tasks[index].completed=!tasks[index].completed;
renderTasks();

}

function deleteTask(index){

tasks.splice(index,1);
renderTasks();

}

renderTasks();
