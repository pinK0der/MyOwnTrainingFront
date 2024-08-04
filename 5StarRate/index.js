const stars = document.querySelectorAll(".star");

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        console.log(`Star ${index1 + 1} clicked`);

        stars.forEach((star, index2) => {
            if (index1 >= index2) {
                star.classList.add("active");
                console.log(`Star ${index2 + 1} set to active`);
            } else {
                star.classList.remove("active");
                console.log(`Star ${index2 + 1} removed from active`);
            }
        });
    });
});