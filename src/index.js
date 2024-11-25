
import './styles/styles.css';
import loadHomePage from './scripts/homePage';
import loadMenuPage from './scripts/menuPage';
import loadAboutPage from './scripts/aboutPage';



export function attachEventListeners() {
  // Attach event listeners for home buttons
  document.querySelectorAll(".home-btn").forEach(button => {
    button.addEventListener("click", loadHomePage);
  });

  // Attach event listeners for menu buttons
  document.querySelectorAll(".menu-btn").forEach(button => {
    button.addEventListener("click", loadMenuPage);
  });

  // Attach event listeners for about buttons
  document.querySelectorAll(".about-btn").forEach(button => {
    button.addEventListener("click", loadAboutPage);
  })
}

loadHomePage();
attachEventListeners();