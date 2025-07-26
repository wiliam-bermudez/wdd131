


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  
  {
    templeName: "San Salvador El Salvador",
    location: "San Salvador, El Salvador",
    dedicated: "2011, August, 21",
    area: 27986,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/san-salvador-el-salvador-temple/san-salvador-el-salvador-temple-3965.jpg"
  },

  {
    templeName: "Tijuana Mexico",
    location: "Baja California, Mexico",
    dedicated: "2015, December, 13",
    area: 33367,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/san-salvador-el-salvador-temple/san-salvador-el-salvador-temple-3965.jpg"
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
