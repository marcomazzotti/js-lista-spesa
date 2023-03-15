// Data una lista della spesa, stampare sulla pagina (anche brutalmente, 
// basta che si vedano) gli elementi della lista individualmente 
// con un ciclo while.
// Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo
// while al posto del ciclo for. Facciamo attenzione a non dimenticare 
// tutte le differenze implementative che il ciclo while ci impone, 
// in particolare alla variabile di indice.

//Lista della spesa
let shoppingList = ["mele", "pere", "banane", "uova", "yogurt", "mozzarelle", "pasta"]

//Lista nel DOM
const unorederedlist = document.querySelector("ul");

//ciclo while
let i = 0;
while (i < shoppingList.length) {
  unorederedlist.innerHTML += `<li> ${shoppingList[i]} </li>`;
  i++
}