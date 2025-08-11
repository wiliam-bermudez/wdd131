

// PROJECT.HTML CODE
const quotes = [
  { text: "Breathe deeply. You’re exactly where you need to be.", author: "Unknown" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "Inhale peace. Exhale stress.", author: "Anonymous" },
];

function displayRandomQuote() {
  const quoteSection = document.querySelector(".quote blockquote");
  if (!quoteSection) return;

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteSection.innerHTML = `"${quote.text}" — <em>${quote.author}</em>`;
}


function handleFormSubmit(event) {
  event.preventDefault(); 

  const input = document.querySelector(".subscribe input[type='email']");
  const email = input.value.trim();

  if (email) {
    localStorage.setItem("subscribedEmail", email);
    showThankYouMessage(email);
  }
}


function showThankYouMessage(email) {
  const form = document.querySelector(".subscribe form");
  form.innerHTML = `<p>Thank you for subscribing, <strong>${email}</strong>! 🌱</p>`;
}


document.addEventListener("DOMContentLoaded", () => {
  displayRandomQuote(); 
  const savedEmail = localStorage.getItem("subscribedEmail");
  if (savedEmail) {
    showThankYouMessage(savedEmail); 
  }

  
  const form = document.querySelector(".subscribe form");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }
});


// REFERERENCES.HTML CODE

const defaultTestimonials = [
  { name: "Ana L.", text: "El mindfulness me ha ayudado a reducir el estrés y vivir más en el presente." },
  { name: "Carlos T.", text: "Nunca pensé que algo tan simple pudiera cambiar mi perspectiva diaria." },
  { name: "Lucy F.", text: "Gracias a las técnicas aprendidas, ahora gestiono mejor mis emociones." },
  { name: "Pedro P.", text: "Un espacio seguro y enriquecedor para conectar conmigo mismo." }
];


let testimonials = JSON.parse(localStorage.getItem("testimonials")) || defaultTestimonials;


function renderTestimonials() {
  const container = document.getElementById("testimonialsContainer");
  

  testimonials.forEach(t => {
    const card = document.createElement("div");
    card.classList.add("testimonial-card");
    card.innerHTML = `
      <p class="testimonial-text">"${t.text}"</p>
      <p class="testimonial-author">- ${t.name}</p>
    `;
    if (container) {
      container.appendChild(card);
    } else {
      console.warn('testimonialsContainer not found');
    }


  });
}

function saveTestimonials() {
  localStorage.setItem("testimonials", JSON.stringify(testimonials));
}

document.addEventListener("DOMContentLoaded", () => {
  renderTestimonials();
  saveTestimonials();
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navBar = document.querySelector(".nav-bar");

  hamburger.addEventListener("click", () => {
    navBar.classList.toggle("show");
  });
});

  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;