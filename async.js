// Function that sets up the stage and accepts a callback
function setUpStage(callback) {
    console.log("Setting up the stage...");
  
    // Simulate stage setup time with a delay
    setTimeout(() => {
      console.log("Stage setup is complete!");
      callback(); // Call the callback function after setup
    }, 3000); // 3 seconds delay
  }
  
  // Function that will be called as a callback after stage setup
  function startPerformance() {
    console.log("Starting the performance!");
  }
  
  // Call setUpStage and pass startPerformance as the callback
  setUpStage(startPerformance);