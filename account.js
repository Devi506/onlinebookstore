function Validateform() {
    clearErrors();

    var name = document.getElementById("name").value;
    var  email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var Dob = document.getElementById("Dob").value;
    var Gender = document.querySelector('input[name="Gender"]:checked');
    var lang = document.getElementById("lang").value;

    var Valid = true;

    if (name === "") {
        showError("name", "Name is required");
        Valid = false;
    }
    if (email === "") {
        showError("email", "Email is required");
        Valid = false;
    }
    if (password === "") {
        showError("password", "Password is required");
        Valid = false;
    }
    if (phone === "") {
        showError("phone", "Phone number is required");
        Valid = false;
    }
    if (Dob === "") {
        showError("Dob", "Date of Birth is mandatory");
        Valid = false;
    }
    if (!Gender) {
        showError("Gender", "Gender is mandatory");
        Valid = false;
    }
    if (lang ==="") {
        showError("lang", "Select a language");
        Valid = false;
    }

    if (Valid) 
  
    {
      // The form is valid
      window.location.href = "Book.html";
    } 


    return false;
  }






function showError(fieldId, errorMessage) {
    var errorDiv = document.getElementById(fieldId + "Error");
    errorDiv.textContent = errorMessage;
    errorDiv.style.color = "red";
}

function clearErrors() {
    var errorDivs = document.getElementsByClassName("error");
    for (var i = 0; i < errorDivs.length; i++) {
        errorDivs[i].textContent = "";
    }
};