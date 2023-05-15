import { remove } from "./remove_function.js";
import { doing_function } from "./doing_button.js";
import { check } from "./check_function.js";
export function get_local_storage() {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks) {
    for (let i = 0; i < tasks.length; i++) {
      const taskes = tasks[i];
      const list = document.querySelector("ul");
      let item = document.createElement("li");
      item.setAttribute("id", `taskes_${i}`);

      //  create task
      let task = document.createElement("span");
      task.setAttribute("id", `task_${i}`);
      task.innerText = taskes.task;

      // create description
      let description = document.createElement("p");
      description.setAttribute("id", `description_${i}`);
      description.innerHTML = taskes.description;

      // create date
      let date = document.createElement("span");
      date.innerText = taskes.date;

      //   create delete button
      let delete_button = document.createElement("button");
      delete_button.setAttribute("id", `delete_${i}`);
      delete_button.innerText = "delete";
      delete_button.addEventListener("click", () => {
        remove(item);
      });

      // create doing button
      const doing_id = `button_${i}`;
      let doing = document.createElement("button");
      doing.innerText = "doing";
      doing.addEventListener("click", () => {
        doing_function(doing, doing_id, item, checkbox);
      });

      // create checkbox
      const checkbox_id = `checkbox${i}`;
      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.addEventListener("click", () => {
        check(checkbox, checkbox_id, item);
      });
      const date_input_value = date;

      //   append tout

      setInterval(() => {
        let remaining_time = date_input_value - new Date();
        let remainingDays = Math.floor(remaining_time / (1000 * 60 * 60 * 24));
        let remainingHours = Math.floor(
          (remaining_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let remainingMinutes = Math.floor(
          (remaining_time % (1000 * 60 * 60)) / (1000 * 60)
        );
        let remainingSeconds = Math.floor(
          (remaining_time % (1000 * 60)) / 1000
        );
        if (remainingDays <= 0) {
          date.innerText = `${remainingHours}h ${remainingMinutes}min ${remainingSeconds}sec`;
        }
        if (remainingDays > 0) {
          date.innerText = `${remainingDays}days`;
        } else if (
          remainingDays <= 0 &&
          remainingHours <= 0 &&
          remainingMinutes <= 0 &&
          remainingSeconds <= 0
        ) {
          date.innerText = "en retard";
          return;
        }
      }, 0);
      item.appendChild(task);
      item.appendChild(description);
      item.appendChild(date);
      item.appendChild(doing);
      item.appendChild(delete_button);
      item.appendChild(checkbox);
      list.appendChild(item);
    }
  }
}
