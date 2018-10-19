const shopList = new ShoppingList;

const addItemButton = document.getElementById('addShoppinglistItemButton');
addItemButton.addEventListener('click', addToShoppingList(event));

let slRender = shopList.render();

const grabContentDiv = document.getElementById('content');

const contentDiv = document.createElement('div');
contentDiv.innerHTML = slRender;
grabContentDiv.appendChild(contentDiv);


function addToShoppingList(event) {
  let tValue = document.getElementById('titleinput');
  let dValue = document.getElementById('descriptioninput');
  let newShoppingListItem = new ShoppingListItem(tValue.value, dValue.value);

  console.log(newShoppingListItem);
  return shopList.addItem(newShoppingListItem);

};