
const buttonOne = document.getElementById("buttonOne");

buttonOne.addEventListener("mouseover", function()
{
    //this.classList.remove("buttonOneAnimationDown");
    this.classList.add("buttonUpAnimation");
}
);

buttonOne.addEventListener("mouseout", function()
{
    this.classList.remove("buttonUpAnimation");
}
);