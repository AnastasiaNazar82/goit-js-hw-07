const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesEl.length}`);

const itemNames = document.querySelectorAll("h2");

itemNames.forEach((itemName) => {
  const title = itemName.textContent;
  console.log(`Category: ${title}`);
  const itemValue = itemName.parentElement.querySelectorAll("li").length;
  console.log(`Elements: ${itemValue}`);
});
