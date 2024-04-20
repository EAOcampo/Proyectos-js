const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", () => {
    const arrColor = []
    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * hex.length);
        arrColor.push(hex[random]);
    }
    let cadena = arrColor.join("");
        

  color.innerHTML = `#${cadena}`
  document.body.style.backgroundColor = `#${cadena}`;
});


