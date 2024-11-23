// Displays the homepage the home page

import logo1 from '../images/logo1.png';


function loadHomePage() {
  const content = document.getElementById('content');
  content.innerHTML = "";

  if (!content) return console.log("No element with #content");

  const createHero = () => {
    const homeHero = document.createElement("div");
    homeHero.classList.add("home-hero");

    const homeHeroCover = document.createElement("div");
    homeHeroCover.classList.add("home-hero-cover");
    homeHero.appendChild(homeHeroCover);

    const label = document.createElement("h1");
    label.innerHTML = "The Lighthouse<br/>Restaurant & Dock Bar";
    homeHeroCover.appendChild(label);

    const heroButton = document.createElement("button");
    heroButton.innerText = "Check out our Menu";

    homeHeroCover.appendChild(heroButton);
    

    // Add all to the content element
    content.appendChild(homeHero);
  }
  createHero();

  const createHomeHeroInfo = () => {
    const homeHeroInfo = document.createElement("div");
    homeHeroInfo.classList.add("home-hero-info");

    const label = document.createElement("h2");
    label.innerText = "Welcome to the Lighthouse";
    homeHeroInfo.appendChild(label);

    const paragraph = document.createElement("p");
    paragraph.innerText = "Located where the Chesapeake Bay and Potomac River converge, Pier450 is a beach-chic hospitality destination on Maryland’s Western Shore. World-class restaurant, uniquely curated motel and an eclectic boutique…waterfront with stunning sunset views.";
    homeHeroInfo.appendChild(paragraph);

    content.appendChild(homeHeroInfo);

  }
  createHomeHeroInfo();

  const createHomeAboutInfo = () => {
    const homeAboutInfo = document.createElement("div");
    homeAboutInfo.classList.add("home-about-info");

    const pierImage = document.createElement("img");
    pierImage.src = logo1;
    pierImage.classList.add("home-about-img");
    pierImage.alt = "Pier Image";
    homeAboutInfo.appendChild(pierImage);

    const paragraph = document.createElement("p");
    paragraph.innerText = "The Lighthouse is a recently refurbished 1940s-era fishing camp in St. Mary’s County, Maryland. “Scheible’s” in its former life, we have brought this beloved property back to life with an artful interpretation of its restaurant, motel and pier, adding gardens both for food source and relaxation.";
    homeAboutInfo.appendChild(paragraph);

    content.appendChild(homeAboutInfo);
  }
  createHomeAboutInfo();

  const createHomeAboutOptions = () => {
    const homeAboutOptions = document.createElement("div");
    homeAboutOptions.classList.add("home-about-options");

    const eatContainer = document.createElement("div");
    eatContainer.classList.add("home-about-image-container");
    eatContainer.classList.add("eat");
    const eatLabel = document.createElement("p");
    eatLabel.innerText = "Eat";
    eatContainer.appendChild(eatLabel);
    homeAboutOptions.appendChild(eatContainer);

    const drinkContainer = document.createElement("div");
    drinkContainer.classList.add("home-about-image-container");
    drinkContainer.classList.add("drink");
    const drinkLabel = document.createElement("p");
    drinkLabel.innerText = "Drink";
    drinkContainer.appendChild(drinkLabel);
    homeAboutOptions.appendChild(drinkContainer);
    
    const relaxContainer = document.createElement("div");
    relaxContainer.classList.add("home-about-image-container");
    relaxContainer.classList.add("relax");
    const relaxLabel = document.createElement("p");
    relaxLabel.innerText = "Relax";
    relaxContainer.appendChild(relaxLabel);
    homeAboutOptions.appendChild(relaxContainer);

    content.appendChild(homeAboutOptions);

  }
  createHomeAboutOptions();

}

export default loadHomePage;