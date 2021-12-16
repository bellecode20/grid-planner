let today = new Date();
let date =
  today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
document.getElementById("date__today").innerHTML = date;
