import { add_task } from "../Project-planner/Js/add_task.js";
const submit_btn = document.querySelector(".submit-btn");

submit_btn.addEventListener("click", () => {
  add_task();
});
