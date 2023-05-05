import { add_task } from "./Js/add_task.js";
import { get_local_storage } from "./Js/get_localstorage.js";
// import { selecting } from "./Js/selecting_function.js";
const submit_btn = document.querySelector(".submit-btn");
const select = document.querySelector(".to-do-selection");
submit_btn.addEventListener("click", () => {
  add_task();
});
// select.addEventListener("click", () => {
//   selecting();
// });
get_local_storage();
