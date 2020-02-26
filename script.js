var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];

var displayEle = document.querySelector(".display");
var displayEle1 = document.querySelector(".display1");
var displayEle2 = document.querySelector(".display2");
var displayEle3 = document.querySelector(".display3");
var displayEle4 = document.querySelector(".display4");
var displayEle5 = document.querySelector(".display5");
var ageEle = document.querySelector(".age");
var ageEle1 = document.querySelector(".age1");
var ageEle2 = document.querySelector(".age2");
var ageEle3 = document.querySelector(".age3");
var ageEle4 = document.querySelector(".age4");
var ageEle5 = document.querySelector(".age5");
var addEle = document.body.querySelector(".add");
var totalEle = document.body.querySelector(".total");
var number = 0;
var ele = document.createElement("div");


totalEle.innerHTML = number;

for (var i = 0; i < list.length; i++) {
  displayEle.innerHTML = "Name: " + list[0].name;
  ageEle.innerHTML = "Age: " + list[0].age;
  
  ele.appendChild(displayEle);
  ele.appendChild(ageEle);
  ele.appendChild(displayEle1);
  ele.appendChild(ageEle1);
  ele.appendChild(displayEle2);
  ele.appendChild(ageEle2);
  ele.appendChild(displayEle3);
  ele.appendChild(ageEle3);
  ele.appendChild(displayEle4);
  ele.appendChild(ageEle4);
  ele.appendChild(displayEle5);
  ele.appendChild(ageEle5);
  document.body.appendChild(ele);
  //0
  if (list[0].age <= 20) {
    ageEle.style.color = "blue";
    displayEle.style.color = "blue";
  } else if (list[0].age >= 40) {
    ageEle.style.color = "red";
    displayEle.style.color = "red";
  } //1
  displayEle1.innerHTML = "Name: " + list[1].name;
  ageEle1.innerHTML = "Age: " + list[1].age;
  if (list[1].age <= 20) {
    ageEle1.style.color = "blue";
    displayEle1.style.color = "blue";
  } else if (list[1].age >= 40) {
    ageEle1.style.color = "red";
    displayEle1.style.color = "red";
  } //2
  displayEle2.innerHTML = "Name: " + list[2].name;
  ageEle2.innerHTML = "Age: " + list[2].age;
  if (list[2].age <= 20) {
    ageEle2.style.color = "blue";
    displayEle2.style.color = "blue";
  } else if (list[2].age >= 40) {
    ageEle2.style.color = "red";
    displayEle2.style.color = "red";
  } //3
  displayEle3.innerHTML = "Name: " +list[3].name;
  ageEle3.innerHTML = "Age: " +list[3].age;
  if (list[3].age <= 20) {
    ageEle3.style.color = "blue";
    displayEle3.style.color = "blue";
  } else if (list[3].age >= 40) {
    ageEle3.style.color = "red";
    displayEle3.style.color = "red";
  } //4
  displayEle4.innerHTML = "Name: " + list[4].name;
  ageEle4.innerHTML = "Age: " + list[4].age;
  if (list[4].age <= 20) {
    ageEle4.style.color = "blue";
    displayEle4.style.color = "blue";
  } else if (list[4].age >= 40) {
    ageEle4.style.color = "red";
    displayEle4.style.color = "red";
  } //5
  displayEle5.innerHTML = "Name: " + list[5].name;
  ageEle5.innerHTML = "Age: " + list[5].age;
  if (list[5].age <= 20) {
    ageEle5.style.color = "blue";
    displayEle5.style.color = "blue";
  } else if (list[5].age >= 40) {
    ageEle5.style.color = "red";
    displayEle5.style.color = "red";
  }
}

function increase(num) {
  number = number + num;
  totalEle.innerHTML = number;
}
addEle.addEventListener("click", function() {
  increase(1);
});