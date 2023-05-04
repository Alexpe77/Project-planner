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
      date.setAttribute("id", `date_${i}`);
      date.innerText = taskes.date;

      //   append tout
      item.appendChild(task);
      item.appendChild(description);
      item.appendChild(date);
      list.appendChild(item);
    }
  }
}
