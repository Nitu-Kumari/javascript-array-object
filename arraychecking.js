var person = {
    firstName: "Homer",
    middleName: "Jay",
    lastName: "Simpson"
  };

  for (var key in person) {
    console.log(person[key]);
  }