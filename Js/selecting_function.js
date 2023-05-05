export function selecting() {
  const to_do = document.querySelector(".to-do-list");
  const doing = document.querySelector(".doing");
  const done = document.querySelector(".done");
  const select = document.querySelector(".to-do-selection");

  if (select.value == "to-do") {
    console.log("to-do");
  } else if (select.value == "doing") {
    console.log("doing");
  } else if (select.value == "done") {
    console.log("done");
  }
  console.log("all");
}
