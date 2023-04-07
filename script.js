const form = document.querySelector("form");
const input = document.querySelector(".task");
const list = document.querySelector("#task-list");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const taskName = input.value.trim();
	if (!taskName) return;

	const taskItem = document.createElement("li");
	taskItem.innerText = taskName;

	const btnContainer = document.createElement("div");
	btnContainer.style.position = "relative";
	btnContainer.style.marginBottom = "2.5rem";

	const deleteBtn = document.createElement("button");
	deleteBtn.innerText = "Delete";
	deleteBtn.classList.add("delete-btn");
	deleteBtn.style.position = "absolute";
	deleteBtn.style.top = "0";
	deleteBtn.style.right = "50px";
	deleteBtn.addEventListener("click", () => {
		taskItem.remove();
	});

	const editBtn = document.createElement("button");
	editBtn.innerText = "Edit";
	editBtn.classList.add("edit-btn");
	editBtn.style.position = "absolute";
	editBtn.style.top = "0";
	editBtn.style.right = "0";

	editBtn.addEventListener("click", () => {
		//Removes the "Edit" and "Delete" buttons while editing
		editBtn.remove();
		deleteBtn.remove();

		const taskInput = document.createElement("input");
		taskInput.value = taskItem.innerText;
		taskItem.innerText = "";
		taskItem.appendChild(taskInput);

		const saveBtn = document.createElement("button");
		saveBtn.innerText = "Save";
		saveBtn.addEventListener("click", () => {
			const newTaskName = taskInput.value.trim();
			if (newTaskName) {
				taskItem.innerText = newTaskName;

				//Re-create and append the "Edit" and "Delete" buttons
				taskItem.appendChild(btnContainer);
				btnContainer.appendChild(editBtn);
				btnContainer.appendChild(deleteBtn);
			}
			taskInput.remove();
			saveBtn.remove();
		});

		taskItem.appendChild(saveBtn);
	});

	btnContainer.appendChild(deleteBtn);
	btnContainer.appendChild(editBtn);
	taskItem.appendChild(btnContainer);
	list.appendChild(taskItem);

	input.value = "";
});
