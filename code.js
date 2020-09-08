// Your Code Here!

function getValues(event) {
  let nameItem = document.getElementById("name_input");
  let nameValue = nameItem.value;

  let emailItem = document.getElementById("email_input");
  let emailValue = emailItem.value;

  let messageItem = document.getElementById("message_input");
  let messageValue = messageItem.value;

  let alertMessage = `Hello, ${nameValue}! Thank you for your message, ${messageValue}, you wil receive an email at ${emailValue}.`;

  alert(alertMessage);

  event.preventDefault();
}

let submitButton = document.getElementById("submit_button");

submitButton.addEventListener("click", getValues);
