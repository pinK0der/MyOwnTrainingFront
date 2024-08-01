
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