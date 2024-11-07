// main.js
import { users } from "./data.js";
import template from "../templates/template.hbs";

let filteredUsers = [...users];

function render() {
  const root = document.getElementById("app");
  root.innerHTML = template({ users: filteredUsers });
}

function filterByAge(minAge) {
  filteredUsers = users.filter((user) => user.age >= minAge);
  render();
}

function sortByName() {
  filteredUsers.sort((a, b) => a.name.localeCompare(b.name));
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  render();

  document.getElementById("filterAge").addEventListener("change", (e) => {
    filterByAge(Number(e.target.value));
  });

  document.getElementById("sortByName").addEventListener("click", sortByName);
});
