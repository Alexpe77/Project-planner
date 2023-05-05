import { add_task } from "./Js/add_task.js";
import { get_local_storage } from "./Js/get_localstorage.js";
const submit_btn = document.querySelector(".submit-btn");
submit_btn.addEventListener("click", () => {
  add_task();
});

get_local_storage();
