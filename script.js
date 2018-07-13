const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete'
};

let itemCount = 0;

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
    itemCount--;
    getItemCount('unchecked-count');
  }
});

// Create a new list item when clicking on the "New Todo" button
newTodo = () => {
  const li = document.createElement('li');
  const inputTodo = document.getElementById(classNames.TODO_TEXT).value;
  const text = document.createTextNode(inputTodo);
  li.appendChild(text);
  document.getElementById(classNames.TODO_TEXT).value = '';

  // increment item coount
  itemCount++;
  getItemCount('item-count');
  getItemCount('unchecked-count');

  // add a close button to the item list
  const span = document.createElement('SPAN');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);
  document.getElementById('todo-list').appendChild(li);

  // click close button and display none the item list
  const closeButton = document.getElementsByClassName('close');
  for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = () => {
      const listItem = closeButton[i].parentElement;
      console.log(listItem);
      listItem.style.display = 'none';
      itemCount--;
      getItemCount('item-count');
    };
  }
};

getItemCount = id => {
  const count = document.getElementById(id);
  count.innerText = itemCount.toString();
};
