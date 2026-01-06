// Theme toggle
const toggle=document.getElementById("themeToggle");
toggle.onclick=()=>{
document.body.classList.toggle("light");
toggle.textContent=
document.body.classList.contains("light")?"🌞":"🌙";
};

// Scroll animation
const reveals=document.querySelectorAll(".reveal");
const show=()=>{
reveals.forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add("show");
}
});
};
window.addEventListener("scroll",show);
show();
