var parent = document.querySelector(".modal-parent");
var btn = document.querySelector("button");
var X = document.querySelector('.X');
var section = document.querySelector('section');


btn.addEventListener("click", appear);

function appear() {
    parent.style.display = "block";
    section.style.filter = "blur(5px)";
}

X.addEventListener("click", hideit);

function hideit() {
    parent.style.display = "none";
    section.style.filter = "blur(0px)"
}
parent.addEventListener("click", disapear);
function disapear(e) {
    if (e.target.className == "modal-parent") {
        parent.style.display = "none";
        section.style.filter = "blur(0px)"
    }

}