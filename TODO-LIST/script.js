function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = () => li.classList.toggle("completed");

  // Actions container
  const actions = document.createElement("div");
  actions.className = "actions";

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", span.textContent);
    if (newText !== null) {
      span.textContent = newText.trim() || span.textContent;
    }
  };

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(actions);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
  input.focus();
}
