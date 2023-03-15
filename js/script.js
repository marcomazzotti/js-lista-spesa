let shoppingList = ["mele", "pere", "banane", "uova", "yogurt", "mozzarelle", "pasta"]

const unorederedlist = document.querySelector("ul");

let i = 0;
while (i < shoppingList.length) {
  unorederedlist.innerHTML += `<li> ${shoppingList[i]} </li>`;
  i++
}