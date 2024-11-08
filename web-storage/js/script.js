// Завдання 1: Todo List
document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  document.getElementById("addTaskButton").addEventListener("click", addTask);
});

const loadTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTaskToDOM(task));
};

const addTask = () => {
  const newTaskText = document.getElementById("newTask").value;
  if (!newTaskText) return;

  const task = { text: newTaskText, completed: false };
  addTaskToDOM(task);

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  document.getElementById("newTask").value = "";
};

const addTaskToDOM = (task) => {
  const li = document.createElement("li");
  li.textContent = task.text;
  li.style.textDecoration = task.completed ? "line-through" : "none";
  li.addEventListener("click", () => toggleTaskCompletion(task, li));
  document.getElementById("taskList").appendChild(li);
};

const toggleTaskCompletion = (task, li) => {
  task.completed = !task.completed;
  li.style.textDecoration = task.completed ? "line-through" : "none";
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = tasks.map((t) => (t.text === task.text ? task : t));
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};

// Завдання 2: Збереження даних з форми
document.addEventListener("DOMContentLoaded", () => {
  loadFormData();
  document.getElementById("saveButton").addEventListener("click", saveFormData);
});

const loadFormData = () => {
  const savedData = JSON.parse(localStorage.getItem("userData")) || {};
  document.getElementById("username").value = savedData.username || "";
  document.getElementById("password").value = savedData.password || "";
};

const saveFormData = () => {
  const userData = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  localStorage.setItem("userData", JSON.stringify(userData));
};

// Завдання 3: Закладки
document.addEventListener("DOMContentLoaded", () => {
  loadBookmarks();
  document
    .getElementById("addBookmarkButton")
    .addEventListener("click", addBookmark);
});

const loadBookmarks = () => {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarks.forEach((bookmark) => addBookmarkToDOM(bookmark));
};

const addBookmark = () => {
  const name = document.getElementById("bookmarkName").value;
  const url = document.getElementById("bookmarkURL").value;
  if (!name || !url) return;

  const bookmark = { name, url };
  addBookmarkToDOM(bookmark);

  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarks.push(bookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  document.getElementById("bookmarkName").value = "";
  document.getElementById("bookmarkURL").value = "";
};

const addBookmarkToDOM = (bookmark) => {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.href = bookmark.url;
  link.textContent = bookmark.name;
  link.target = "_blank";
  li.appendChild(link);
  document.getElementById("bookmarkList").appendChild(li);
};

document.addEventListener("DOMContentLoaded", () => {
  loadContacts();
  document
    .getElementById("addContactButton")
    .addEventListener("click", addContact);
});

const loadContacts = () => {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.forEach((contact) => addContactToDOM(contact));
};

const addContact = () => {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  if (!firstName || !lastName || !phone || !email)
    return alert("Заповніть всі поля!");

  const contact = { id: Date.now(), firstName, lastName, phone, email };
  addContactToDOM(contact);

  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.push(contact);
  localStorage.setItem("contacts", JSON.stringify(contacts));

  clearForm();
};

const addContactToDOM = (contact) => {
  const li = document.createElement("li");
  li.dataset.id = contact.id;

  li.innerHTML = `
    <strong>${contact.firstName} ${contact.lastName}</strong><br>
    Телефон: ${contact.phone}<br>
    Email: ${contact.email}<br>
    <button onclick="editContact(${contact.id})">Редагувати</button>
    <button onclick="deleteContact(${contact.id})">Видалити</button>
  `;
  document.getElementById("contactList").appendChild(li);
};

const deleteContact = (id) => {
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts = contacts.filter((contact) => contact.id !== id);
  localStorage.setItem("contacts", JSON.stringify(contacts));

  document.querySelector(`li[data-id="${id}"]`).remove();
};

const editContact = (id) => {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  const contact = contacts.find((contact) => contact.id === id);
  if (!contact) return;

  document.getElementById("firstName").value = contact.firstName;
  document.getElementById("lastName").value = contact.lastName;
  document.getElementById("phone").value = contact.phone;
  document.getElementById("email").value = contact.email;

  document.getElementById("addContactButton").textContent = "Оновити контакт";
  document.getElementById("addContactButton").onclick = () => updateContact(id);
};

const updateContact = (id) => {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  const contactIndex = contacts.findIndex((contact) => contact.id === id);
  if (contactIndex === -1) return;

  contacts[contactIndex] = { id, firstName, lastName, phone, email };
  localStorage.setItem("contacts", JSON.stringify(contacts));

  document.querySelector(`li[data-id="${id}"]`).innerHTML = `
    <strong>${firstName} ${lastName}</strong><br>
    Телефон: ${phone}<br>
    Email: ${email}<br>
    <button onclick="editContact(${id})">Редагувати</button>
    <button onclick="deleteContact(${id})">Видалити</button>
  `;

  clearForm();
  document.getElementById("addContactButton").textContent = "Додати контакт";
  document.getElementById("addContactButton").onclick = addContact;
};

const clearForm = () => {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
};
