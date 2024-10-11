const arr = [{ name: "washing", date: "22-9-2024" }];
showMessage();
function fun() {
  const nameval = document.querySelector(".input-box");
  let name = nameval.value;
  const duedate = document.querySelector(".day-date");
  let date = duedate.value;

  arr.push({ name, date });
  console.log(arr);
  nameval.value = "";

  duedate.value = "";

  showMessage();
}

document.title = "To Do-List";

function showMessage() {
  let toDosum = "";
  const message = document.querySelector(".Show-the-message");
  arr.forEach((value, index) => {
    const { name } = value;
    const { date } = value;

    const toDo = `
    <div>${name} </div>
    <div> ${date} </div>
     <button      onclick="arr.splice(${index},1);
    showMessage();" class="delete-button buttons-list">Delete</button>`;

    toDosum += toDo;
  });

  //console.log(toDosum);
  message.innerHTML = `${toDosum}`;
}

document.querySelector(".add-button").addEventListener("click", () => {
  fun();
});
