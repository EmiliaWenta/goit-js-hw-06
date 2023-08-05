const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (let i = 0; i < ingredients.length; i += 1) {
  const list = document.querySelector(`#ingredients`);
  const listitem = document.createElement("li");
  listitem.classList.add(`item`);
  listitem.textContent = ingredients[i];
  console.log(listitem);
  list.append(listitem);
}
