document.addEventListener('DOMContentLoaded', () => {
  try {
    // Loading Screen Animation
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
      loadingScreen.style.transition = 'opacity 0.5s ease-out';  // Added smooth fade out transition
      setTimeout(() => loadingScreen.style.display = 'none', 1500);
    } else {
      console.error('Loading screen element not found!');
    }

    // Carousel System with Images
    const releases = [
      {
        text: "Demon Slayer: Swordsmith Village Arc - Releases on 2025-04-05",
        image: "https://bleedingcool.com/wp-content/uploads/2023/03/DSKY-SVA-KV1_EN-1200x900.jpg"
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
      if (!image || !text) {
        console.error('Carousel image or text is missing!');
        return;
      }

      carousel.innerHTML = `
        <div class="carousel-item">
            <img src="${image}" alt="Anime Poster" class="carousel-img" />
            <p>${text}</p>
        </div>
      `;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % releases.length;
      renderCarousel();
    }

    // Add Next and Previous buttons for navigation
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');
    prevButton.textContent = 'Prev';
    nextButton.textContent = 'Next';
    prevButton.id = 'prev';
    nextButton.id = 'next';
    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + releases.length) % releases.length;
      renderCarousel();
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % releases.length;
      renderCarousel();
    });

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

    // Community Thread Form
    const newThreadForm = document.getElementById('newThreadForm');
    const discussionsContainer = document.getElementById('discussions');

    // Load stored threads from localStorage
    const storedThreads = JSON.parse(localStorage.getItem('threads')) || [];
    storedThreads.forEach(thread => {
      const newThread = document.createElement('div');
      newThread.classList.add('discussion');
      newThread.innerHTML = `
        <h4>${thread.title}</h4>
        <p>${thread.content}</p>
      `;
      discussionsContainer.appendChild(newThread);
    });

    // Event listener to handle new thread submission
    newThreadForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const title = event.target.querySelector('input[name="title"]').value;
      const content = event.target.querySelector('textarea[name="content"]').value;

      if (title && content) {
        // Create a new thread object
        const newThread = { title, content };

        // Create a new DOM element to display the thread
        const newThreadElement = document.createElement('div');
        newThreadElement.classList.add('discussion');
        newThreadElement.innerHTML = ` 
          <h4>${title}</h4>
          <p>${content}</p>
        `;
        discussionsContainer.appendChild(newThreadElement);

        // Add the new thread to localStorage
        storedThreads.push(newThread);
        localStorage.setItem('threads', JSON.stringify(storedThreads));

        // Reset the form
        newThreadForm.reset();
      }
    });
  } catch (error) {
    console.error('Error during DOMContentLoaded:', error);
  }
});
