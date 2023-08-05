const allItem = document.querySelectorAll(".item");

console.log(`Number of categories: ${allItem.length}`);

for (item of allItem) {
  const itemTitle = item.firstElementChild;
  console.log(`Category: ${itemTitle.innerHTML}`);
  const itemList = item.lastElementChild.children.length;
  console.log(`Elements: ${itemList}`);
}
