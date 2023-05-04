export function local_storage() {
  const list_item = document.querySelectorAll("li");
  const task_array = [];
  for (let i = 0; i < list_item.length; i++) {
    const object_to_store = {
      id: list_item[i].getAttribute("id"),
      task: list_item[i].querySelector(`#task_${i}`).innerHTML,
      description: list_item[i].querySelector(`#description_${i}`).innerHTML,
      date: list_item[i].querySelector(`#date_${i}`).innerHTML,
    };

    task_array.push(object_to_store);
  }
  localStorage.setItem("tasks", JSON.stringify(task_array));
}
