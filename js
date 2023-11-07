//Rabbit-Hole JS
// Function to initialize Navbar Features
function initializeNavbarFeatures() {
    // Rotating quotes
    let quotes = ["Quote 1", "Quote 2", "Quote 3"];
    let currentQuoteIndex = 0;
    let textSliderElement = document.querySelector(".text-slider");
  
    setInterval(function() {
      textSliderElement.innerHTML = quotes[currentQuoteIndex];
      textSliderElement.style.animation = "none";
      setTimeout(() => {
        textSliderElement.style.animation = "moveUp 1s ease-in-out";
      }, 0);
      currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }, 7000);
  
    // Dark Mode Toggle
    let toggleSwitchElement = document.querySelector(".slider");
    let toggleLabelElement = document.querySelector(".toggle-label");
    let circleElement = document.querySelector(".circle");
    let isDarkMode = false;
  
    toggleSwitchElement.addEventListener("click", function() {
      isDarkMode = !isDarkMode;
      if (isDarkMode) {
        toggleLabelElement.textContent = "On";
        document.body.style.backgroundColor = "black";
      } else {
        toggleLabelElement.textContent = "Off";
        document.body.style.backgroundColor = "white";
      }
      circleElement.style.left = isDarkMode ? "27.5px" : "2.5px";
    });
  
    // Scrolling Text
    let scrollingTextElement = document.querySelector(".scrolling-text");
    let textContent = "The Matrix is everywhere, Neo.";
    scrollingTextElement.innerHTML = textContent;
  
    setInterval(function() {
      let firstChar = textContent.charAt(0);
      let remainingText = textContent.slice(1);
      textContent = remainingText + firstChar;
      scrollingTextElement.innerHTML = textContent;
    }, 200);
  }
  
  // Fetch navbar.html and insert its content into the div with id="navbar"
  fetch('navbar.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      const navbarElement = document.getElementById('navbar');
      if (navbarElement) {
        navbarElement.innerHTML = data;
        initializeNavbarFeatures();  // Initialize navbar features after it is loaded
      } else {
        console.error('Navbar element not found in the DOM.');
      }
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
  


// Matrix Code

// Matrix Code
// Initialize canvas and context for the matrix effect
const matrixCanvas = document.getElementById('matrixCanvas');
const ctx = matrixCanvas.getContext('2d');
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
characters = characters.split("");
const fontSize = 10;
let columns;
let drops = [];

// Function to set canvas dimensions
function setCanvasSize() {
  matrixCanvas.width = window.innerWidth;
  matrixCanvas.height = document.body.scrollHeight; // Set to maximum scrollable height
}

// Function to reset drops
function resetDrops() {
  columns = matrixCanvas.width / fontSize;
  drops = [];
  for (let x = 0; x < columns; x++) drops[x] = 1;
}

// Initial setup and event listeners for resize
setCanvasSize();
resetDrops();
window.addEventListener('resize', () => {
  setCanvasSize();
  resetDrops();
});

// Draw function for the matrix effect
function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
  ctx.fillStyle = "#ff0000";
  ctx.font = fontSize + "px arial";

  for (let i = 0; i < drops.length; i++) {
    const text = characters[Math.floor(Math.random() * characters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}

// Call the drawMatrix function every 33 milliseconds
const matrixInterval = setInterval(drawMatrix, 33);







