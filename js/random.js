function generateUniqueNumber() {
    const unregex = /^AO-([0-9]{3})+$/;
    let randomNumber = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
    let uniqueNumber = "AO-" + randomNumber.toString().padStart(3, "0"); // Pad the number with leading zeros if necessary
    while (!unregex.test(uniqueNumber)) { // Check if the number already exists
      randomNumber = Math.floor(Math.random() * 1000);
      uniqueNumber = "AO-" + randomNumber.toString().padStart(3, "0");
    }
    return console.log(  uniqueNumber);
  }
  

  generateUniqueNumber()