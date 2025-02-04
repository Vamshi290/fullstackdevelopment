function fetchData(url) {
    return new Promise((resolve, reject) => {
      if (url.includes("error")) {
        reject("Error: URL contains 'error'.");
      } else {
        resolve("Data fetched successfully.");
      }
    });
}
fetchData("https://example.com/data")
  .then(response => console.log(response))  // Output: Data fetched successfully.
  .catch(error => console.error(error));
fetchData("https://example.com/error")
.then(response => console.log(response))  // Output: Data fetched successfully.
.catch(error => console.error(error));