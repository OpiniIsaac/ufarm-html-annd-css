const Validate = (event) => {
  let error = 0;
  // pick inputs
  let fullName = document.getElementById("fullName");
  let nin = document.getElementById("nin");
  let female = document.getElementById("female");
  let male = document.getElementById("male");

  let dateOfBirth = document.getElementById("dateOfBirth");
  let residenceType = document.getElementById("residenceType");

  let ward = document.getElementById("ward");

  let uniqueId = document.getElementById("uniqueId");

  let activities = document.getElementById("activities");
  let directions = document.getElementById("directions");
  let dateOfRegistration = document.getElementById("dateOfRegistration");

  let periodOfStay = document.getElementById("periodOfStay");
  // pick error sections
  let fullNameError = document.getElementById("fullNameError");
  let ninError = document.getElementById("ninError");

  let genderError = document.getElementById("genderError");
  let dateOfBirthError = document.getElementById("dateOfBirthError");
  let residenceTypeError = document.getElementById("residenceType");

  let wardError = document.getElementById("wardError");
  let uniqueIdError = document.getElementById("uniqueIdError");

  let activitiesError = document.getElementById("activitiesError");
  let directionsError = document.getElementById("directionsError");
  let dateOfRegistrationError = document.getElementById("dateOfregistrationError" );

  let periodOfStayError = document.getElementById("periodOfStayError");



  // validating first name input emptiness
  if (fullName.value == "") {
    fullName.style.border = "1px solid red";
    fullNameError.innerHTML = "Please farmer one name can not be empty";
    fullNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  }
  // validating first name for minimum length
  else if (fullName.value.length < 5) {
    fullName.style.border = "1px solid red";
    fullNameError.innerHTML =
      "Please the farmer one name must be atleast 3 letters";
    fullNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  }
  // validating first name for maximum length
  else if (fullName.value.length > 50) {
    fullName.style.border = "1px solid red";
    fullNameError.innerHTML =
      "Please the farmer one  name must be less than 11 letters";
    fullNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else {
    fullName.style.border = "1px solid green";
    fullNameError.innerHTML = "";
  }

  // validating nin input
  if (nin.value == "") {
    nin.style.border = "1px solid red";
    fullNameError.innerHTML = "Please farmer one nin can not be empty";
    fullNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  }
  // validating first name for minimum length
  else if (nin.value.length < 5) {
    nin.style.border = "1px solid red";
    ninError.innerHTML = "Please the farmer one nin must be atleast 3 letters";
    ninError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  }
  // validating first name for maximum length
  else if (nin.value.length > 50) {
    nin.style.border = "1px solid red";
    ninError.innerHTML =
      "Please the farmer one  nin must be less than 11 letters";
    ninError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else {
    nin.style.border = "1px solid green";
    ninError.innerHTML = "";
  }
  // gender validations
  if (female.checked == false && male.checked == false) {
    genderError.textContent = "Please select gender";
    genderError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else {
    genderError.textContent = "";
  }

  if (dateOfBirth.value == "") {
    dateOfBirthError.textContent = "please enter date of birth";
    dateOfBirthError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  } else {
    dateOfBirthError.textContent = "";
  }
  if (residenceType.value == "") {
    residenceTypeError.textContent = "please enter tyoe of residence";
    residenceTypeError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  } else {
    residenceTypeError.textContent = "";
    residenceType.style.border = "1px solid green";
  }

  if (ward.value == "") {
    ward.style.border = "1px solid red";
    fullNameError.innerHTML = "Please ward name can not be empty";
    fullNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  }
  // validating first name for minimum length
  else if (ward.value.length < 3) {
    ward.style.border = "1px solid red";
    wardError.innerHTML = "Please the ward name must be atleast 3 letters";
    wardError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  }
  // validating first name for maximum length
  else if (ward.value.length > 50) {
    ward.style.border = "1px solid red";
    wardError.innerHTML = "Please the ward  name must be less than 50 letters";
    wardError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else {
    ward.style.border = "1px solid green";
    wardError.innerHTML = "";
  }

  // const regex = /^FO-([0-9]{3})+$/

  // if (uniqueId.value === '') {
  //   uniqueId.style.border = '1px solid red'
  //   uniqueIdError.textContent = 'Unique number is required'
  //   uniqueIdError.style = 'color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;'
  //   error++
  //   return false
  // } else if (!uniqueId.value.match(regex)) {
  //   uniqueId.style.border = '1px solid red'
  //   uniqueIdError.textContent = 'Unique number must follow this format FO-000'
  //   uniqueIdError.style = 'color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;'
  //   error++
  //   return false
  // } else {
  //   uniqueId.style.border = '1px solid green'
  //   uniqueIdError.textContent = ''
  // }

  if (activities.value == "") {
    activitiesError.textContent = "please enter activities";
    activitiesError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  } else {
    activitiesError.textContent = "";
    activities.style.border = "1px solid green";
  }
  if (directions.value == "") {
    directionsError.textContent = "please enter directions";
    directionsError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  } else {
    directionsError.textContent = "";
    directions.style.border = "1px solid green";
  }

  if (dateOfRegistration.value == "") {
    dateOfRegistrationError.textContent = "please enter date of registration";
    dateOfRegistrationError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  } else {
    dateOfRegistrationError.textContent = "";
  }

  if (periodOfStay.value < 10) {
    periodOfStayError.textContent =
      "the farmer should have stayed here for more than 10years";
    periodOfStayError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    return false;
  } else {
    periodOfStayError.textContent = "";
  }

  if (error > 0) {
    event.preventDefault();
  }
};
