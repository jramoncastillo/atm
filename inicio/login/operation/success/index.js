var finalBalance = localStorage.getItem("finalBalance");
document.getElementById("inputBalance").value=finalBalance;

console.log("Hola");
document.getElementById("exitButton").addEventListener("click", function() {
    location.href="./exit/index.html";

});