const colors = ["green", "red", "rgba(133,122,200)", "#f15025","pink","grey","brown"];
//!Seleccionar boton
const btn = document.querySelector("#btn");
const color = document.querySelector(".color")

// console.log(btn,color);
btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * colors.length);  
  
  color.innerHTML = colors[random]
  document.body.style.backgroundColor = colors[random];




});
