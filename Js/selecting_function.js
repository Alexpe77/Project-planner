export function selecting() {
  const to_do = document.getElementById("to-do-list");
  const doing = document.getElementById("doing");
  const done = document.getElementById("done");
  const select = document.querySelector(".to-do-selection");

  if (select.value == "to-do") {
    done.style.display = "none";
    to_do.style.display = "block";
    doing.style.display = "none";
    console.log("to-do");
    return;
  } else if (select.value == "doing") {
    done.style.display = "none";
    to_do.style.display = "none";
    doing.style.display = "block";
    console.log("doing");
    return;
  } else if (select.value == "done") {
    done.style.display = "block";
    to_do.style.display = "none";
    doing.style.display = "none";
    console.log("done");
    return;
  }
  done.style.display = "block";
  to_do.style.display = "block";
  doing.style.display = "block";
  console.log("all");
}
