document.addEventListener("DOMContentLoaded", ()=>{
    let inputText = document.getElementById("new_task_field");
    document.querySelector('form').addEventListener('submit', (e)=>{
        e.preventDefault();
        buildToDo(inputText.value)
        
    })
})

function buildToDo(todo){
    let li = document.createElement('li');
    let btn = document.createElement('button');
    btn.addEventListener('click', handleDelete);
    li.textContent=`${todo}`;
    document.getElementById('tasks').appendChild(li);
    btn.innerText='x';
    li.appendChild(btn);
    postTask(todo);
}



function handleDelete(e){
e.target.parentNode.remove();
}


function postTask(task){
    let taskObject ={
        Task:task,
        dateAdded:"test string",
    }
fetch('http://localhost:3000/ToDoList', {
    method: 'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(taskObject)
})
.then(res => res.json())
.then(task => console.log(task))

}

