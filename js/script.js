console.log("hello orld")
var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault()
  if (document.getElementById("input-value").value.match(validRegex)) {
    document.getElementById("input-message").innerText = "valid email address"
  } else {
    document.getElementById("input-message").innerText =
      "Please enter a valid email address"
    document.getElementById("input-value").style.border = "1px solid red"
    document.getElementById("input-message").style.color = "red"
  }
})
