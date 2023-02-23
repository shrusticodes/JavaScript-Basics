let arr = new Array();
function person(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
}
let i = 0;
function display() {
  const container = document.querySelector('#main');
  let label1 = document.createElement('label');
  label1.innerHTML = `Name: `;
  let inp1 = document.createElement('input');
  inp1.setAttribute('type', 'text');
  inp1.setAttribute('id', 'fname');
  label1.appendChild(inp1);
  let br1 = document.createElement('br');
  let br2 = document.createElement('br');
  label1.append(br1);
  label1.append(br2);
  let label2 = document.createElement('label');
  label2.innerHTML = `Age: `;
  let inp2 = document.createElement('input');
  inp2.setAttribute('type', 'text');
  inp2.setAttribute('id', 'age');
  label2.appendChild(inp2);
  let br3 = document.createElement('br');
  let br4 = document.createElement('br');
  label2.append(br3);
  label2.append(br4);
  let but = document.createElement('button');
  but.innerHTML = 'SUBMIT';
  but.setAttribute('id', 'main');
  but.addEventListener('click', function () {
    try {
      submit();
    } catch (e) {
      console.log(e);
    }
  });
  container.append(label1);
  container.append(label2);
  container.append(but);
}
display();
function submit() {
  const container = document.querySelector('#print');
  let fname = document.getElementById('fname').value;
  let age = parseInt(document.getElementById('age').value);
  let x = Math.floor(Math.random() * 1000 + 1);
  document.getElementById('fname').value = '';
  document.getElementById('age').value = '';
  append(x, fname, age);
  createElements(x);
}
function append(x, fname, age) {
  if (fname == '' || age == NaN) {
    alert('Enter the values in the text boxes');
  }
  arr.forEach((o) => {
    if (x == o.id) {
      x = Math.floor(Math.random() * 1000 + 1);
    }
  });
  let obj;
  if (fname != '' && age != NaN) {
    obj = new person(x, fname, age);
    arr.push(obj);
  }
  console.log(arr);
  return arr;
}
function createElements(x) {
  const container = document.querySelector('#print');
  const usersBox = document.createElement('div');
  usersBox.className = 'usersBox';
  const list = document.createElement('p');
  list.className = 'list';
  let m = arr.findIndex((o) => o.id == parseInt(x));
  const btn = document.createElement('button');
  btn.id = x;
  btn.className = 'delete';
  btn.innerText = 'Delete';
  btn.addEventListener('click', function () {
    let n = arr.findIndex((o) => o.id == parseInt(x));
    arr.splice(n, 1);
    console.log(n);
    console.log(arr);
    list.removeChild(btn);
    usersBox.removeChild(list);
    container.removeChild(usersBox);
  });
  list.innerText = `${arr[m].name}: ${arr[m].age}  `;
  usersBox.appendChild(list);
  list.appendChild(btn);
  container.appendChild(usersBox);
}
