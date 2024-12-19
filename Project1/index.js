window.addEventListener("load", () => {
    const loadingScreen = document.querySelector(".loading-screen");
    const mainContent = document.querySelector(".container");
  
    setTimeout(() => {
      loadingScreen.style.display = "none"; 
      mainContent.style.display = "block"; 
    }, 3000); 
  });
  