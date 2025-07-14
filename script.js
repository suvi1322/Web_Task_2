// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let error = document.getElementById("formError");

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || email === "") {
    error.innerText = "Please fill out all required fields.";
  } else if (!email.match(emailPattern)) {
    error.innerText = "Please enter a valid email address.";
  } else {
    error.innerText = "";
    alert("Form submitted successfully!");
    this.reset();
  }
});

// To-Do List Functions
function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();
  let taskList = document.getElementById("taskList");

  if (taskText === "") return;

  let li = document.createElement("li");
  li.innerHTML = `
    ${taskText}
    <button onclick="removeTask(this)">Delete</button>
  `;
  taskList.appendChild(li);
  taskInput.value = "";
}

function removeTask(button) {
  button.parentElement.remove();
}
