
import './styles/styles.css';
import loadHomePage from './scripts/homePage';
import loadMenuPage from './scripts/menuPage';

loadHomePage();

export function attachEventListeners() {
  // Attach event listeners for home buttons
  document.querySelectorAll(".home-btn").forEach(button => {
    button.addEventListener("click", loadHomePage);
  });

  // Attach event listeners for menu buttons
  document.querySelectorAll(".menu-btn").forEach(button => {
    button.addEventListener("click", loadMenuPage);
  });
}

attachEventListeners();