function changer() {
    event.preventDefault();
    var valeur = document.getElementById("i").value;
    document.getElementById("pro").innerText = valeur;
    if (valeur === "1") {
      document.getElementById("pro").style.backgroundColor = "red";
    } else if (valeur === "2") {
      document.getElementById("pro").style.backgroundColor = "blue";
    } else {
      document.getElementById("pro").style.backgroundColor = "green";
    }
  }
  