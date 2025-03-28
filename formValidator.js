function validateForm() {
  let valid = true;

  // Name validation (same as before)
  const name = document.getElementById("name").value;
  if (name === "") {
    document.getElementById("nameError").innerHTML = "Name is required";
    valid = false;
  } else {
    document.getElementById("nameError").innerHTML = "";
  }

  // Email validation (same as before)
  const email = document.getElementById("email").value;
  if (email === "") {
    document.getElementById("emailError").innerHTML = "Email is required";
    valid = false;
  } else if (!isValidEmail(email)) {
    document.getElementById("emailError").innerHTML = "Invalid email format";
    valid = false;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }

  // Phone number validation
  const phone = document.getElementById("phone").value;
  if (phone === "") {
    document.getElementById("phoneError").innerHTML = "Phone number is required";
    valid = false;
  } else if (!isValidPhone(phone)) {
    document.getElementById("phoneError").innerHTML = "Invalid phone number format";
    valid = false;
  } else {
    document.getElementById("phoneError").innerHTML = "";
  }

  return valid; 
}

function isValidEmail(email) {
  // (same as before)
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function isValidPhone(phone) {
  // Basic phone number format validation (example)
  const re = /^\d{10}$/; // Assumes 10 digits
  return re.test(phone);
}