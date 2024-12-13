window.addEventListener("load", () => {
    const loadingScreen = document.querySelector(".loading-screen");
    const mainContent = document.querySelector(".container");
  
    // Wait for the animation to complete
    setTimeout(() => {
      loadingScreen.style.display = "none"; // Hide the loading screen
      mainContent.style.display = "block"; // Show the main content
    }, 3000); // Match the duration of the animation
  });
  