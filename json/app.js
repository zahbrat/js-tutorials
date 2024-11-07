// Глобальні змінні для роботи з таблицею та локальним сховищем
let students = [];

// Виведення студентів на екран
const displayStudents = (studentsData) => {
  const tableBody = document.querySelector("#studentsTable tbody");
  tableBody.innerHTML = "";

  studentsData.forEach((student, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>${student.faculty}</td>
            <td>${student.courses.join(", ")}</td>
            <td>
                <button onclick="editStudent(${index})">Редагувати</button>
                <button onclick="deleteStudent(${index})">Видалити</button>
            </td>
        `;

    tableBody.appendChild(row);
  });
};

// Додавання нового студента
const addStudent = (event) => {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;
  const course = document.getElementById("course").value;
  const faculty = document.getElementById("faculty").value;
  const courses = document
    .getElementById("courses")
    .value.split(",")
    .map((course) => course.trim());

  const student = {
    firstName,
    lastName,
    age,
    course,
    faculty,
    courses,
  };

  students.push(student);
  saveStudents();
  displayStudents(students);
  document.getElementById("addStudentForm").reset();
};

// Видалення студента
const deleteStudent = (index) => {
  students.splice(index, 1);
  saveStudents();
  displayStudents(students);
};

// Редагування студента
const editStudent = (index) => {
  const student = students[index];

  document.getElementById("firstName").value = student.firstName;
  document.getElementById("lastName").value = student.lastName;
  document.getElementById("age").value = student.age;
  document.getElementById("course").value = student.course;
  document.getElementById("faculty").value = student.faculty;
  document.getElementById("courses").value = student.courses.join(", ");

  const updatedStudent = () => {
    students[index] = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      age: document.getElementById("age").value,
      course: document.getElementById("course").value,
      faculty: document.getElementById("faculty").value,
      courses: document
        .getElementById("courses")
        .value.split(",")
        .map((course) => course.trim()),
    };

    saveStudents();
    displayStudents(students);
    document.getElementById("addStudentForm").reset();
  };

  document.getElementById("addStudentForm").onsubmit = (event) => {
    event.preventDefault();
    updatedStudent();
  };
};

// Збереження студентів в локальному сховищі
const saveStudents = () => {
  localStorage.setItem("students", JSON.stringify(students));
};

// Завантаження студентів з локального сховища
const loadStudents = () => {
  const savedStudents = JSON.parse(localStorage.getItem("students"));
  if (savedStudents) {
    students = savedStudents;
  }
  displayStudents(students);
};

// Пошук студентів
const searchStudents = (event) => {
  const query = event.target.value.toLowerCase();
  const filteredStudents = students.filter((student) => {
    return (
      student.lastName.toLowerCase().includes(query) ||
      student.course.toString().includes(query)
    );
  });
  displayStudents(filteredStudents);
};

// Підключення подій після завантаження сторінки
document.addEventListener("DOMContentLoaded", () => {
  loadStudents();

  document
    .getElementById("addStudentForm")
    .addEventListener("submit", addStudent);
  document.getElementById("search").addEventListener("input", searchStudents);
});
