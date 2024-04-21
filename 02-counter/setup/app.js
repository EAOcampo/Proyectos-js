const contador = document.querySelector("#value");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

let count = 0;

increase.addEventListener("click", () => {
  count++;
  contador.innerHTML = count;
  
  if (count > 0) {
    contador.style.color = "green";
  } else if (count < 0) {
    contador.style.color = "red";
  } else {
    value.style.color = "#222";
  }
});
decrease.addEventListener("click", () => {
  count--;
  contador.innerHTML = count;
  if (count > 0) {
    contador.style.color = "green";
  } else if (count < 0) {
    contador.style.color = "red";
  } else {
    value.style.color = "#222";
  }
});

reset.addEventListener("click", () => {
  count = 0;
  contador.innerHTML = count;
  if (count === 0) {
    value.style.color = "#222";
  }
});
