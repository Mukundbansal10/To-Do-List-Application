const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    // if box empty then create alert 
    if(inputBox.value===''){
        alert("you must write something!");
    }
    else{
        // otherwise create a list element , put the value of inputbox  and add it to the list container
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "&#10008";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
inputBox.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();