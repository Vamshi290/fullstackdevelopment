function withTimeout(promise, timeoutDuration) {
    // Create a timeout promise that will reject after the given timeout
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Operation timed out')), timeoutDuration);
    });
  
    // Use Promise.race() to race the two promises
    return Promise.race([promise, timeoutPromise]);
  }
  
  // Example usage:
  
  // This is a sample operation (a promise that resolves after 2 seconds)
  const slowOperation = new Promise((resolve) => {
    setTimeout(() => resolve('Operation completed successfully'), 2000);
  });
  
  // Call the function with a timeout of 3 seconds
  withTimeout(slowOperation, 3000)
    .then(result => {
      console.log(result);  // If the operation completes within 3 seconds
    })
    .catch(error => {
      console.error(error.message);  // If the operation exceeds 3 seconds
    });
  