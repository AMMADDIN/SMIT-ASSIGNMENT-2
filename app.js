// Question 1
function add(fNum) {
    return function (secNum) {
        return secNum + fNum;
    }
}
const addition = add(5);
console.log(addition(10));

//   Question 2
const arr = [22, 56, 93, 44, 94];
function search(arr, val) {
    if (arr.length === 0) {
        return false;
    }
    else if (arr[0] === val) {
        return true;
    }
    else {
        return search(arr.slice(1), val);
    }

}
console.log(search(arr, 10));
console.log(search(arr, 93));

// Question 3
function addingPara(para) {
    let newPara = document.getElementById("para1");
    newPara.innerText = para;
}
addingPara("Hello, This is a Paragraph");

// Question 4

function addItems(listText) {
    const ulist = document.getElementById("unodered");
    const list = document.getElementById("list");
    list.innerText = listText;
}
addItems("Added in unodered list");

// Question 5

function colorChange(color) {
    const secondPara = document.getElementById("para2");
    secondPara.style.backgroundColor = color;
}
colorChange('blue');

// Question 6

const person = {
    Name: 'Nadir',
    Designation: 'Junior Developer',
    contact: 1234567890,
}
function saveInLs(person) {
    localStorage.setItem(person, JSON.stringify(person));
}
saveInLs(person);

// Question 7

function retrive(getFromLs) {
    const jstr = localStorage.getItem(person)
    if (!jstr) {
        return null;
    }
    return JSON.parse(jstr);
}
const gettingData = retrive(person);
if (gettingData) {
    console.log(person.Name)
    console.log(person.contact)
    console.log(person.Designation)
} else {
    console.log("Error, Not Found in Local storage");
}

// Question 8
function saveObjectToLocalStorage(obj) {
    for (let data in person) {
      localStorage.setItem(data, JSON.stringify(person[data]));
    }
    let obj2 = {};
    for (let i = 0; i < localStorage.length; i++) {
      let data = localStorage.key(i);
      obj2[data] = JSON.parse(localStorage.getItem(data));
    }
    return obj2;
  }