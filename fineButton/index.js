
const buttonOne = document.getElementById("buttonOne");

buttonOne.addEventListener("mouseover", function()
{
    this.classList.remove("buttonOneAnimationDown");
    this.classList.add("buttonOneAnimation");
}
);

buttonOne.addEventListener("mouseout", function()
{
    this.classList.remove("buttonOneAnimation");
    this.classList.add("buttonOneAnimationDown");
}
);

const buttonTwo = document.getElementById("buttonTwo");

buttonTwo.addEventListener("mouseover", function()
{
    this.classList.remove("buttonTwoAnimationUp");
    this.classList.add("buttonTwoAnimation");
}
);

buttonTwo.addEventListener("mouseout", function()
{
    this.classList.remove("buttonTwoAnimation");
    this.classList.add("buttonTwoAnimationUp");
}
);