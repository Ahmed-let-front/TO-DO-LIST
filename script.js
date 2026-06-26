"use strict";
const elements = {
  addBtn: document.querySelector(".add-btn"),
  inputFeild: document.querySelector(".input-field"),
  deleteBtn: document.querySelector(".delete-btn"),
  rowOfList: document.querySelector(".task-item"),
  list: document.querySelector(".task-list"),
  tasksCount: document.querySelector(".count-of-tasks"),
};
const displayCount = () => {
  elements.tasksCount.textContent = "0";
  const tasksCount = document.querySelectorAll(".task-item").length;
  elements.tasksCount.textContent = tasksCount;
};
displayCount();
const addBtnCallBack = () => {
  if (elements.inputFeild.value === "") return;
  const inputValue = elements.inputFeild.value;
  const newLiHtml = `<li class="task-item">
<p class="task-text">${inputValue}</p>
<button class="delete-btn">Delete</button>
</li>`;
  elements.list.insertAdjacentHTML("beforeend", newLiHtml);
  elements.inputFeild.value = "";
  displayCount();
};
elements.addBtn.addEventListener("click", addBtnCallBack);
// KISS
elements.list.addEventListener("click", (e) => {
  if (!e.target.classList.contains("delete-btn")) return;
  const liToRemove = e.target.parentElement;
  liToRemove.remove();
  displayCount();
});
