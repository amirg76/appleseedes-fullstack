//
const headerElement = document.createElement("header");
document.body.appendChild(headerElement);

const navElement = document.createElement("nav");
navElement.classList.add("nav");
document.querySelector("header").appendChild(navElement);

const ulElement = document.createElement("ul");
document.querySelector("nav").appendChild(ulElement);

const li1Element = document.createElement("li");
document.querySelector("ul").appendChild(li1Element);
li1Element.innerHTML = `<a href="#">Login</a>`;

const li2Element = document.createElement("li");
document.querySelector("ul").appendChild(li2Element);
li2Element.innerHTML = `<a href="#">Home</a>`;

const li3Element = document.createElement("li");
document.querySelector("ul").appendChild(li3Element);
li3Element.innerHTML = `<a href="#">About Me</a>`;

const sectionElement = document.createElement("section");
document.body.appendChild(sectionElement);
sectionElement.classList.add("welcome");

const h1SectionElement = document.createElement("h1");
document.querySelector("section").appendChild(h1SectionElement);
h1SectionElement.innerHTML = "Welcome Home";

const divSectionElement = document.createElement("div");
document.querySelector("section").appendChild(divSectionElement);
divSectionElement.classList.add("welcome-content");

const h4SectionElement = document.createElement("h4");
document.querySelector("div").appendChild(h4SectionElement);
h4SectionElement.innerHTML = "Amir Gilboa";

const welcomeContentMainTextElement = document.createElement("div");
document.querySelector("div").appendChild(welcomeContentMainTextElement);
welcomeContentMainTextElement.classList.add("welcome-content_main_text");

welcomeContentMainTextElement.innerHTML = `<p>Hi there my name is amir</p>
<p>I am A Web Developer 45 years old</p>
<p>and love sports</p>`;

const welcomeContentSeconderyText = document.createElement("div");
document.querySelector("div").appendChild(welcomeContentSeconderyText);
welcomeContentSeconderyText.classList.add("welcome-content_secondery_text");

welcomeContentSeconderyText.innerHTML = `<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
sapiente id quaerat quibusdam rem, officia ipsam sint eius quia
praesentium aperiam similique omnis vero laboriosam deserunt rerum
nihil exercitationem, amet sequi. Magnam placeat dicta odit,
voluptate natus saepe! Ipsa, rem?
</p>`;

const gridSection = document.createElement("section");
document.body.appendChild(gridSection);
gridSection.classList.add("grid_items");
gridSection.innerHTML = `<div class="grid_item"></div>
<div class="grid_item"></div>
<div class="grid_item"></div>
<div class="grid_item"></div>
<div class="grid_item"></div>
<div class="grid_item"></div>
<div class="grid_item"></div>
<div class="grid_item"></div>`;
