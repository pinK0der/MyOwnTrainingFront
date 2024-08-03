
const buttonAdd = document.getElementById("buttonAdd");

buttonAdd.addEventListener("mouseover", function()
{
    this.classList.remove("buttonDownAnimation");
    this.classList.add("buttonUpAnimation");
}
);

buttonAdd.addEventListener("mouseout", function()
{
    this.classList.remove("buttonUpAnimation");
    this.classList.add("buttonDownAnimation");
}
);

const inputBox = document.getElementById("inputBox");
const tasksList = document.getElementById("tasksList");

function addTask()
{
    if(inputBox.value === '')
    {
        alert("Please enter a task");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        tasksList.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

tasksList.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData()
{
    localStorage.setItem("data", tasksList.innerHTML);
}

function showTask()
{
    tasksList.innerHTML = localStorage.getItem("data");
}

showTask();