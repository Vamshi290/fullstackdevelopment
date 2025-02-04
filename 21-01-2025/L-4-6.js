function addValues() {
    return new Promise((resolve) => {
      resolve(5);
    })
    .then((value1) => {
        console.log(`Initial value : ${value1}`)
      return new Promise((resolve) => resolve(value1 + 10));
    })
    .then((value2) => {
        console.log(`after adding 10 : ${value2}`)
      return new Promise((resolve) => resolve(value2 + 15));
    })
    .then((value3) => {
      console.log("Total sum:", value3);  
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  
  addValues();
  