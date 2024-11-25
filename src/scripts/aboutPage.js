import { attachEventListeners } from "..";
import "../styles/about.css";
import lighthouseImg from '../images/lighthouse.jpg';

const loadAboutPage = () => {

  const content = document.getElementById("content");
  if (!content) return console.log("No element with ID #content");

  content.innerHTML = "";

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  const createAboutHero = () => {
    const aboutHero = document.createElement("div");
    aboutHero.classList.add("about-hero");
    
    const aboutHeroInfo = document.createElement("div");
    aboutHeroInfo.classList.add("about-hero-info");

    const label = document.createElement("h3");
    label.innerText = "Relax and Enjoy a Beautiful Scenery";
    aboutHeroInfo.appendChild(label);

    const description = document.createElement("p");
    description.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maxime veniam repudiandae enim reprehenderit culpa mollitia asperiores voluptate. Porro, architecto.";
    aboutHeroInfo.appendChild(description);

    aboutHero.appendChild(aboutHeroInfo);

    aboutContainer.appendChild(aboutHero);    
  }

  createAboutHero();

  const createAboutStory = () => {
    const aboutStory = document.createElement("div");
    aboutStory.classList.add("about-story");

    const lighthouseImage = document.createElement("img");
    lighthouseImage.alt = "Lighthouse";
    lighthouseImage.src = lighthouseImg;
    aboutStory.appendChild(lighthouseImage);

    const sectionContainer = document.createElement("section");
    aboutStory.appendChild(sectionContainer);

    const label = document.createElement("h5");
    label.innerText = "The Story";
    sectionContainer.appendChild(label);

    const description = document.createElement("p");
    description.innerHTML = 
      `Rusty and Nick were raised in Calvert County, living in Huntingtown. They were active in sports…Rusty in football and wrestling… Nick in football and baseball. Their father Jack who loved to cook, encouraged them to help out in the kitchen. They both worked in local restaurants during high school and Rusty soon discovered he loved creating delicious entrees.
      <br/><br/>
      When they graduated, Rusty continued to pursue a cooking career and Nick attended Frostburg State University and earned his Bachelor’s Degree in Business.
      <br/><br/>
      In 1998, the Shriver Family was offered an opportunity to purchase the business at Clarke’s Landing Restaurant. For sixteen very successful years, Rusty ran the kitchen and Nick managed the Front of the House.
      <br/><br/>
      In early 2012, with the owner of the building being unwilling to negotiate a new lease, they began to look for another location. In 2013, Rusty and Nick purchased the ground where the Lighthouse Inn had been located and construction began on the new LIGHTHOUSE RESTAURANT & DOCK BAR, which opened on February 24th, 2014.`;
    sectionContainer.appendChild(description);
    aboutContainer.appendChild(aboutStory);
  }
  createAboutStory();

  content.appendChild(aboutContainer);

  attachEventListeners();
}

export default loadAboutPage;