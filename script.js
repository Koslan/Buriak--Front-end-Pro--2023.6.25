let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let selectedItem = null;

// For hm11
function addElement() {
  let inputValue = document.getElementById('numberInput').value;
  numbers.push(inputValue);
  updateList();
}


function editElement() {
  let inputValue = document.getElementById('numberInput').value;
  if(selectedItem != null){
    numbers[selectedItem] = inputValue;
    updateList();
  }
}


function removeElement() {
  if(selectedItem != null){
    numbers.splice(selectedItem, 1);
    updateList();
  }
}


function orderElements() {
  numbers.sort((a, b) => a - b);
  updateList();
}


// For hm12
function generateKeyButtonOnClick() {
  const lengthInput = document.getElementById('lengthInput');
  const result = document.getElementById('charactersInput');
  console.log(lengthInput);
  console.log(characters);
  const key = generateKey(parseInt(lengthInput.value), characters);
  console.log(lengthInput);
  result.value = key;
}

function generateKey(length, characters) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
}

// For hm13
function calculatePowerButtonOnClick() {
  const numInput = document.getElementById('numInput');
  const degreeInput = document.getElementById('degreeInput');
  const resultInput = document.getElementById('resultInput');
  const result = pow(parseFloat(numInput.value), parseInt(degreeInput.value));
  resultInput.value = result;
}

function pow(num, degree) {
  if (degree === 0) {
    return 1;
  }
  return num * pow(num, degree - 1);
}


function loadTabContent(tabId) {
  const tabs = document.getElementsByClassName('tab');
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = 'none';
  }
  document.getElementById(tabId).style.display = 'block';
}


function selectElement(index) {
  selectedItem = index;
  updateList();
}


function updateList() {
  let list = document.getElementById('numberList');
  let listHTML = '';
  numbers.forEach((number, index) => {
    let itemHTML = `<div class="my-2">
                      <div id="item${index}" class="h5 d-flex justify-content-center">${number}</div>
                      <button onclick="selectElement(${index})" class="btn btn-dark btn-sm mt-2">Select</button>
                    </div>`;
    if(index === selectedItem){
      itemHTML = `<div class="my-2">
                    <div id="item${index}" class="h5  text-danger d-flex justify-content-center">${number}</div>
                    <button onclick="selectElement(${index})" class="btn btn-dark btn-sm mt-2">Select</button>
                  </div>`;
    }
    listHTML += itemHTML;
  });
  list.innerHTML = listHTML;
}


loadTabContent('hm11');
updateList();

document.getElementById('task-select').addEventListener('change', (event) => {
  loadTabContent(event.target.value);
});

window.onload = function () {
    const currentPageUrl = window.location.href;
    const username = currentPageUrl.split('/')[2].split('.')[0];
    const repoName = currentPageUrl.split('/')[3];
    const githubRepoUrl = `https://github.com/${username}/${repoName}`;

    document.getElementById('github-link').href = githubRepoUrl;
};
