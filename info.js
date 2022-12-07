//Contact button redirect
let contactBtn = document.querySelector("#contactBtn");
contactBtn.onclick = function () {
  window.location.href = "#contact";
};

//Hiring form
var wage = document.querySelector(".wage");
let hire = document.querySelector("#hiring");
let ques = document.querySelector("#question");
let comment = document.querySelector("#comment");

window.onload = function () {
  comment.checked = true;
};
hire.onclick = function () {
  isChecked();
};
ques.onclick = function () {
  isChecked();
};
comment.onclick = function () {
  isChecked();
};

var isChecked = function () {
  if (hire.checked) {
    wage.style.display = "block";
  } else wage.style.display = "none";
};

//Submit form
var submit = document.querySelector("#submit");
var form = document.getElementById("form");
submit.onclick = function () {
  form.action = "https://httpbin.org/post";
  form.method = "POST";
  form.target = "_blank";
};