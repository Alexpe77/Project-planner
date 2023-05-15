export function remove(item) {
  localStorage.removeItem("task");
  item.remove();
}
