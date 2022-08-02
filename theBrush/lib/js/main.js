
let brush = document.querySelector(".main_container");

brush.addEventListener("click", rengarSummon);

function rengarSummon() {
    let rengar = document.getElementById("rengar");
    rengar.setAttribute("src", "assets/rengar.png");
    alert("You've been deleted!");
}
