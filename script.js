<<<<<<< HEAD
let display = document.getElementById('display');
let historyList = document.getElementById('historyList');
let memory = 0;

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value);
    historyList.innerHTML += `<li>${display.value} = ${result}</li>`;
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function useMemory(action) {
  switch (action) {
    case 'M+':
      memory += parseFloat(display.value) || 0;
      break;
    case 'M-':
      memory -= parseFloat(display.value) || 0;
      break;
    case 'MR':
      display.value += memory;
      break;
    case 'MC':
      memory = 0;
      break;
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
}
=======
let display = document.getElementById('display');
let historyList = document.getElementById('historyList');
let memory = 0;

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value);
    historyList.innerHTML += `<li>${display.value} = ${result}</li>`;
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function useMemory(action) {
  switch (action) {
    case 'M+':
      memory += parseFloat(display.value) || 0;
      break;
    case 'M-':
      memory -= parseFloat(display.value) || 0;
      break;
    case 'MR':
      display.value += memory;
      break;
    case 'MC':
      memory = 0;
      break;
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
}
>>>>>>> d186f12 (Initial commit)
