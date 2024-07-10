const newtaskinput= document.querySelector("#newtask")
const addtaskbtn= document.querySelector("#addtaskbtn")
const todolist= document.querySelector("#todo-list")
function createTaskElement(taskTest){
    let taskElement=document.createElement("div")
    taskElement.innerHTML=`
    <span>${taskTest}</span>
    <button id="editTask">Edit</button>
     <button id="deletetask">Delete</button>
    `;
    // these element in taskElemnt not in document 
    let deletebtn=taskElement.querySelector("#deletetask");
    deletebtn.addEventListener("click",()=>{
        taskElement.remove();
    })
    let editbttn=taskElement.querySelector("#editTask");
    editbttn.addEventListener("click",()=>{
       let newtasktext=prompt("edit your task",taskTest);
       if(newtasktext!=""){
       taskElement.querySelector("span").innerText=newtasktext;
       }
    })
    return taskElement;
}
addtaskbtn.addEventListener("click",()=>{
    let taskTest= newtaskinput.value;
    // console.log(taskTest);
    if(taskTest!=""){
        let taskElement=createTaskElement(taskTest)
        // console.log(taskElement);
        todolist.appendChild(taskElement);
        newtaskinput.value="";
    }
})