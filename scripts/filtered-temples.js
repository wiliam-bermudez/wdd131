


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "images/T_aba.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "images/T_manti.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "images/T_payson.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "images/T_yigo.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "images/T_washington.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "images/T_lima.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "images/T_cdmx.jpg"
  },
  
  {
    templeName: "San Salvador El Salvador",
    location: "San Salvador, El Salvador",
    dedicated: "2011, August, 21",
    area: 27986,
    imageUrl:
    "images/T_ES.jpg"
  },

  {
    templeName: "Tijuana Mexico",
    location: "Baja California, Mexico",
    dedicated: "2015, December, 13",
    area: 33367,
    imageUrl:
    "images/T_tij.jpg"
  },

];

const container = document.getElementById("templesContainer");



  function displayTemples(list) {
  container.innerHTML = list.map(temple => {
    return `
      <div class="card">
        <h2>${temple.templeName}</h2>
        <p><span class="label">Location:</span> ${temple.location}</p>
        <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
        <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      </div>
    `;
  }).join("");
}

  const oldLink =  document.querySelector("#old");
  const newLink =  document.querySelector("#new");
  const largeLink =  document.querySelector("#large");
  const smallLink =  document.querySelector("#small");


  oldLink.addEventListener("click", (e) => {
  e.preventDefault();

  const filtered = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });

  displayTemples(filtered); 
});

  newLink.addEventListener("click", (e) => {
    e.preventDefault();

    
    const filtered = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]);
      return year > 2000;
    });
    displayTemples(filtered);
  });

  largeLink.addEventListener("click", (e) => {
    e.preventDefault();

    const filtered = temples.filter(temple => temple.area > 90000);
    displayTemples(filtered);
  });

  smallLink.addEventListener("click", (e) => {
    e.preventDefault();

    const filtered = temples.filter(temple => temple.area < 90000);
    displayTemples(filtered);
  });

 


document.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples)})

  function filterTemples(criteria){
    
  }


document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('visible');
});
