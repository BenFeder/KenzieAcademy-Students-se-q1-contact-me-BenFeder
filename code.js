// Your Code Here!

function getValues() {
  let nameItem = document.getElementById("name_input");
  let nameValue = nameItem.value;

  let emailItem = document.getElementById("email_input");
  let emailValue = emailItem.value;

  let messageItem = document.getElementById("message_input");
  let messageValue = messageItem.value;

  alert(
    `Hello, ${nameValue}! Thank you for your message,
    ${messageValue}, you wil reeive an email at
    ${emailValue}.`);
}

let submitButton = document.getElementById("submit_button");

submitButton.addEventListener("click", getValues) {
    event.preventDefault();
}
