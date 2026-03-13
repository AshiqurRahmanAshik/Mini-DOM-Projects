const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Input field is empty");
    return;
  }

  const items = list.querySelectorAll("li");

  for (let item of items) {
    if (item.firstChild.textContent === input.value) {
      alert("This item already exists!");
      return;
    }
  }

  const li = document.createElement("li");
  li.textContent = input.value;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete");

  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";

  // delete
  delBtn.addEventListener("click", () => {
    li.remove();
  });
});
