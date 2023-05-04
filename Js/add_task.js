import { local_storage } from "./localstorage.js";
import { doing_function } from "./doing_button.js";
import { check } from "./check_function.js";
export function add_task() {
  const task_input_value = document.querySelector(".task-input").value;
  const description_input_value = document.querySelector(".text-input").value;
  const date_input_value = document.querySelector(".date-input").value;
  const to_do_list = document.querySelector(".to-do-list");
  // const doing_list = document.querySelector(".doing");
  // const done_list = document.querySelector(".done");
  //  if (to_do_list.appendChild(item)) {
  //    checkbox.style.display = "none";
  //  }
  //  if (doing_list.appendChild(item)) {
  //    checkbox.style.display = "visible";
  //  }
  //  if (done_list.appendChild(item)) {
  //    checkbox.style.display = "visible";
  //  }

  if (!task_input_value || !description_input_value || !date_input_value) {
    alert("écris des trucs stp");
    return;
  }

  //   create index and list items
  let list_items = document.querySelectorAll("li");
  let index = list_items.length ? list_items.length : 0;
  let item = document.createElement("li");
  item.setAttribute("id", `item_${index}`);

  //  create task
  let task = document.createElement("span");
  task.setAttribute("id", `task_${index}`);
  task.innerText = task_input_value;

  // create description
  let description = document.createElement("p");
  description.setAttribute("id", `description_${index}`);
  description.innerHTML = description_input_value;

  // create date
  let date = document.createElement("span");
  date.setAttribute("id", `date_${index}`);
  date.innerText = date_input_value;

  //  create delete button
  let delete_button = document.createElement("button");
  delete_button.setAttribute("id", `delete_${index}`);
  delete_button.innerText = "delete";

  // create button doing
  const doing_id = `button_${index}`;
  let doing = document.createElement("button");
  doing.innerText = "doing";
  doing.addEventListener("click", () => {
    doing_function(doing, doing_id, item, index);
  });
  // create checkbox
  const checkbox_id = `checkbox${index}`;
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("click", () => {
    check(checkbox, checkbox_id, item);
  });
  //   append tout
  item.appendChild(task);
  item.appendChild(description);
  item.appendChild(date);
  item.appendChild(doing);
  item.appendChild(delete_button);
  item.appendChild(checkbox);
  to_do_list.appendChild(item);
  local_storage();
}
