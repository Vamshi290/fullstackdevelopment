function fetchDataWithCallback(isSuccess, callback) {
    setTimeout(() => {
      if (isSuccess) {
        const data = { message: "Data fetched successfully!" };
        callback(null, data);
      } else {
        const error = "Failed to fetch data.";
        callback(error, null);
      }
    }, 0);
  }
  
  function handleResponse(error, data) {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Success:", data.message);
    }
  }
  
  fetchDataWithCallback(true, handleResponse);
  fetchDataWithCallback(false, handleResponse);
  