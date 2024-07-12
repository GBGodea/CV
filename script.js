'use strict'

let bool = true;
const div = document.createElement("div");

document.querySelector(".profile_photo").addEventListener("click", function(event) {
        document.body.appendChild(div);
        div.style.width = `100%`;
        div.style.backgroundColor = "black";
        div.style.height = `100%`;
        div.style.position = "absolute";
        div.style.top = 0;
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        div.classList.add("modal_window");
        document.body.style.overflow = "hidden"; // Скрытие прокрутки

        const photo = document.createElement("img");
        div.append(photo);

        photo.src = "./image/годя резюме.jpg";
        
        photo.style.position = "relative";
        photo.style.width = `60%`;
        photo.style.display = "block";
        photo.style.margin = "auto";

        document.body.style.margin = 0;
})


div.addEventListener("click", function(event) {
    div.remove();
    const photo = div.querySelector("img");
    div.removeChild(photo);
    document.body.style.overflow = "auto";
}) 
