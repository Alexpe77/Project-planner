export function check(checkbox, checkbox_id, item) {
  checkbox.classList.toggle(checkbox_id);
  const doing_list = document.querySelector(".doing");
  const done = document.querySelector(".done");

  if (checkbox.classList == 0) {
    doing_list.appendChild(item);
    return;
  }
  done.appendChild(item);
}
