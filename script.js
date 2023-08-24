const settingsMenu = document.querySelector(".settings-menu");
const darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle() {
  settingsMenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function() {                  //on click toggle page to dark/light theme
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme"); 

  if(localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");      //checks toggle button. if button is set to light, switch to dark theme
  } else {
    localStorage.setItem("theme", "light")      //else if theme is set to dark, switch to light
  }
}

if(localStorage.getItem("theme") == "light") {  //local storage remembers theme, light or dark
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme"); 
} else if(localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");     //local storage named theme created when website is first visited
}




