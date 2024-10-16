import { nanoid } from "nanoid";

console.log(nanoid(10));

// ZADACHA

// 1

const input = document.querySelector("#taskInput");
const btn = document.querySelector("#addTaskBtn");
const list = document.querySelector("#taskList");

const addTask = () => {
  if (input.value === "") return;
  const el = document.createElement("li");
  el.id = nanoid(5);
  el.innerHTML = `
        <p>${input.value.trim()}</p>
        <button class="deleteBtn" data-id="delete">DELETE</button>
        <button class="completeBtn" data-id="done">DONE</button>
    `;

  list.appendChild(el);
  input.value = "";

  const delBtn = document.querySelector('[data-id="delete"]');
  delBtn.addEventListener("click", () => {
    el.remove();
  });

  const doneBtn = document.querySelector('[data-id="done"]');

  doneBtn.addEventListener("click", () => {
    const p = el.querySelector("p");

    p.style.opacity = 0.25;
    p.style.textDecoration = "line-through";
  });
};

btn.addEventListener("click", addTask);
