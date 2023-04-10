const Validate = (event)=>{
    let error = 0
let fullName = document.getElementById('fullName')
let ward = document.getElementById('ward')
let date = document.getElementById('date')
let number = document.getElementById('number')
let unitPrice = document.getElementById('unitPrice')
let quantity = document.getElementById('quantity')
let payment = document.getElementById('payment')
let directions = document.getElementById('directions')
let delivery = document.getElementById('delivery')
let produceType = document.getElementById('produceType')


let fullNameError = document.getElementById('fullNameError')
let wardError = document.getElementById('wardError')
let dateError = document.getElementById('dateError')
let unitPriceError = document.getElementById('unitPriceError')
let quantityError = document.getElementById('quantityError')
let paymentError = document.getElementById('paymentError')
let directionsError = document.getElementById('directionsError')
let deliveryError = document.getElementById('deliveryError')
let produceTypeError = document.getElementById('produceTypeError')


  // validating first name input emptiness
  if (fullName.value == "") {
    fullName.style.border = "1px solid red";
    fullNameError.innerHTML = "Please full name can not be empty";
    fullNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  }
  // validating first name for minimum length
  else if (fullName.value.length < 5) {
    fullName.style.border = "1px solid red";
    fullNameError.innerHTML =
      "Please full name must be atleast 5 letters";
    fullNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  }
  // validating first name for maximum length
  else if (fullName.value.length > 50) {
    fullName.style.border = "1px solid red";
    fullNameError.innerHTML =
      "Please full  name must be less than 50 letters";
    fullNameError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    return false;
  } else {
    fullName.style.border = "1px solid green";
    fullNameError.innerHTML = "";
  }


  if (ward.value == "") {
    ward.style.border = "1px solid red";
    wardError.innerHTML = "Please ward name can not be empty";
    wardError.style =
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


    

     if(error > 0){
        event.preventDefault()
    }
}