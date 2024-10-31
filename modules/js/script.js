import { saveFormData } from "./formHandler.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    saveFormData(formData);

    successMessage.classList.remove("hidden");

    // Очищаємо форму
    form.reset();
  });
});
