document.addEventListener("DOMContentLoaded", ()=>{
    let inputText = document.getElementById("new_task_field");
    document.querySelector('form').addEventListener('submit', (e)=>{
        e.preventDefault();
        buildToDo(inputText.value)
    })
})

function buildToDo(todo){
    let p = getElementById('tasks')
    let btn = document.createElement('button');
    btn.addEventListener('click', handleDelete);
}

function handleDelete(){
    
}