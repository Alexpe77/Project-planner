export function doing_function(doing, doing_id, item) {
  doing.classList.toggle(doing_id);
  const to_do = document.querySelector(".to-do-list");
  const doing_list = document.querySelector(".doing");

  if (doing.classList == 0) {
    to_do.appendChild(item);
    return;
  }

  doing_list.appendChild(item);
}
