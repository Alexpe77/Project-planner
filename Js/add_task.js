export function add_task() {
  const task_input_value = document.querySelector(".task-input").value;
  const description_input_value = document.querySelector(".text-input").value;
  const date_input_value = document.querySelector(".date-input").value;
  const list = document.querySelector("ul");

  if (!task_input_value || !description_input_value || !date_input_value) {
    alert("écris des trucs stp");
    return;
  }

  //   create index and list items
  let list_items = document.querySelectorAll("li");
  let index = list_items.length ? list_items.length : 0;
  let item = document.createElement("li");
  item.setAttribute("id", `item_${index}`);

  //  create task/description/date items
  let task = document.createElement("span");
  task.setAttribute("id", `task_${index}`);
  task.innerText = task_input_value;
  let description = document.createElement("p");
  description.setAttribute("id", `description_${index}`);
  description.innerText = description_input_value;
  let date = document.createElement("span");
  date.setAttribute("id", `date_${index}`);
  date.innerText = date_input_value;

  //   append tout
  item.appendChild(task);
  item.appendChild(description);
  item.appendChild(date);
  list.appendChild(item);
}
