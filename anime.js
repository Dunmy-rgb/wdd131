document.addEventListener('DOMContentLoaded', () => {
  // Loading Screen Animation
  const loadingScreen = document.getElementById('loadingScreen');
  setTimeout(() => loadingScreen.style.display = 'none', 1500);

  // Carousel System with Images
  const releases = [
      {
          text: "Demon Slayer: Swordsmith Village Arc - Releases on 2025-04-05",
          image: "https://bleedingcool.com/wp-content/uploads/2023/03/DSKY-SVA-KV1_EN-1200x900.jpg" // Replace with actual image path
      },
      {
          text: "Jujutsu Kaisen Season 2 - Releases on 2025-06-01",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQff5Wg74uS2iUVU4h6ZS4RgfGCWHXI-ksavQ&s"
      },
      {
          text: "Chainsaw Man Season 2 - Coming Soon",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvTgIysyR3NGemrBuDbzmD9xFVaRq-wQnFQ&s"
      },
      {
          text: "One Piece: Wano Arc Finale - Coming Soon",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhz3E-b_z56ANXHq7XlYWv8jvomNm0lBnQ2g&s"
      }
  ];

  const carousel = document.getElementById('carousel');
  let currentIndex = 0;

  function renderCarousel() {
      const { text, image } = releases[currentIndex];
      carousel.innerHTML = `
          <div class="carousel-item">
              <img src="${image}" alt="Anime Poster" class="carousel-img">
              <p>${text}</p>
          </div>
      `;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % releases.length;
    renderCarousel();
  }

  renderCarousel();
  setInterval(nextSlide, 3000);

  // Tabs System
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      button.classList.add('active');
      const target = document.getElementById(button.getAttribute('data-tab'));
      target.classList.add('active');
    });
  });

  // Reference Section System
  const sectionButtons = document.querySelectorAll(".section-button");
  const sectionContents = document.querySelectorAll(".section-content");

  sectionButtons.forEach(button => {
    button.addEventListener("click", () => {
      sectionButtons.forEach(btn => btn.classList.remove("active"));
      sectionContents.forEach(content => content.classList.remove("active"));

      button.classList.add("active");
      const target = document.getElementById(button.getAttribute("data-section"));
      target.classList.add("active");
    });
  });

});
