const tasksContainer = document.getElementById("tasks-container");
const taskForm = document.getElementById("task-form");
const addTaskBtn = document.getElementById("addTaskBtn");
const deleteTaskBtn = document.getElementById("deleteTaskBtn");
const completeTaskBtn = document.getElementById("completeTaskBtn");

// OBJECT TO STORE TASKS BY DATE
const tasksByDate = {};

const displayTasks = function () {
  tasksContainer.innerHTML = ""; // CLEAR CURRENT TASKS DISPLAY
  // ITERATE OVER THE DATES IN THE TASKSBYDATE OBJECT
  for (const date in tasksByDate) {
    const dateHeader = document.createElement("h3"); // CREATE A DATE HEADER FOR EACH TASK
    dateHeader.textContent = `Tasks for ${date}`;
    tasksContainer.appendChild(dateHeader); // APPEND DATE HEADER TO THE TASKS CONTAINER
  }

  // ITERATE OVER THE TASKS FOR EACH DATE
  tasksByDate[date].forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    if (task.completed) {
      taskElement.classList.add("completed");
    }
  });
};

const toggleTasks = function () {};
// EVENT HANDLER FOR THE ADD TASK BUTTON
addTaskBtn.addEventListener("click", function (e) {
  // PREVENT DEFAULT FORM SUBMISSION
  e.preventDefault();
  // GET VALUES FROM FORM INPUT FIELDS
  const title = document.getElementById("task-title").value;
  const description = document.getElementById("task-desc").value;
  const dueDate = document.getElementById("task-date").value;
  // CHECK IF THERE ARE TASKS FOR THE SELECTED DATE; IF NOT, INITIALIZE AN ARRAY FOR THAT DATE
  if (!tasksByDate[dueDate]) {
    tasksByDate[dueDate] = [];
  }
  // CREATE AN OBJECT TO REPRESENT THE TASK AND PUSH TO THE ARRAY FOR THE SELECTED DATE
  tasksByDate[dueDate].push({ title, description, completed: false });
  // UPDATE THE DISPLAY AND RESET THE FORM
  displayTasks();
});
