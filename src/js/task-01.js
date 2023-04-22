console.log("Number of categories:", document.querySelectorAll(".item").length);

const items = document.querySelectorAll(".item");

items.forEach((item) =>
  console.log(
    "Category:",
    item.firstElementChild.textContent,
    "\n",
    "Elements:",
    item.lastElementChild.children.length
  )
);
