
function colorChange () {
  document.getElementById("naglowekPierwszy").style.color = "black";
  let inputValue = document.getElementById("inputField").value;
  document.getElementById("naglowekPierwszy").innerText = inputValue;
}
document.getElementById("naglowekPierwszy").onclick = colorChange;

let textToShow = "Number four is equal to 4";
document.getElementById("naglowekPierwszy").innerText = textToShow;
