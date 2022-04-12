console.log("linked");

const options = ["new", "list", "delete", "quit"];
const list = [];

let response = prompt("What would you like to do?");

while (response !== "quit") {
  if (response === "quit") break;

  while (!options.includes(response)) {
    response = prompt(
      "Invalid entry! Please enter: new, list, delete, or quit."
    );
  }

  if (response === "new") {
    let newItem = prompt("Enter new todo.");
    list.push(newItem);
    console.log(`${newItem} added to list`);
  } else if (response === "list") {
    if (list.length === 0) {
      console.log("Your list is empty!");
    } else {
      console.log("**********");
      for (let i = 0; i < list.length; i++) {
        console.log(`${i}: ${list[i]}`);
      }
      console.log("**********");
    }
  } else  {
    let indexToDelete = parseInt(
      prompt("Please enter the index number to delete.")
    );
    if (indexToDelete < list.length && indexToDelete >= 0) {
      list.splice(indexToDelete, 1);
      console.log("Todo removed.");
    } else {
      console.log("Invalid index entry!");
    }
  } 

  response = prompt("What would you like to do?");
}

alert("You've quit the application!");
