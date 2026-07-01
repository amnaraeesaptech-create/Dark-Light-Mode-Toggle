const button = document.getElementById("theme-toggle");
const icon = document.getElementById("icon");

// Load saved theme
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    icon.textContent = "☀️";
}

button.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        icon.textContent = "☀️";
        localStorage.setItem("theme","dark");
    }else{
        icon.textContent = "🌙";
        localStorage.setItem("theme","light");
    }

});