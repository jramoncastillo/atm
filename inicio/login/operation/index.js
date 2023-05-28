function formula1() {
    var totalAmount=parseInt(document.getElementById("amount").value);
    var amount1=parseInt(document.getElementById("balance").value);
    document.getElementById("balance").value=(amount1+totalAmount);
    var finalBalance = amount1+totalAmount;
    document.getElementById("balance").value = finalBalance;
    localStorage.setItem("finalBalance", finalBalance);
    location.href = "./success/index.html";
}



function formula2() {
    var totalAmount=parseInt(document.getElementById("amount").value);
    var amount1=parseInt(document.getElementById("balance").value);
    document.getElementById("balance").value=(amount1-totalAmount);
    var finalBalance = amount1-totalAmount;
    document.getElementById("balance").value = finalBalance;
    localStorage.setItem("finalBalance", finalBalance);
    location.href = "./success/index.html";
}




