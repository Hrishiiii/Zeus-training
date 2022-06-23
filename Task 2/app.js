const input = document.querySelector(".inp");
const textArea = document.querySelector(".text-area");
const radio = document.myForm.radio;

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  flag = 0; //Set flag to 0 initially

  //If the inputs value or the textarea's value is empty then we show an alert
  if (input.value === "" || textArea.value === "") {
    alert("All fields are compulsory");

    return false;
  }

  //Now we loop through the radio buttons that we have to check whether atleast one of them is selected.
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked == true) {
      flag = 1; //if selected we set flag to 1
    }
  }

  //If flag is one then everythings fine else alert "All fields are required"
  if (flag == 1) {
    return true;
  }
  alert("All fields are compulsory");

  e.preventDefault();
});
