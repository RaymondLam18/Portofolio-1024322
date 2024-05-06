document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.image-carousel');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close');

    carousels.forEach((carousel) => {
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        const carouselWrapper = carousel.querySelector('.carousel-content');
        const images = carousel.querySelectorAll('.carousel-image');
        let currentIndex = 0;

        function updateCarousel() {
            const width = images[currentIndex].clientWidth;
            const offset = -currentIndex * width;
            carouselWrapper.style.transform = `translateX(${offset}px)`;
        }

        prevButton.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        nextButton.addEventListener('click', function() {
            if (currentIndex < images.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });

        // Voeg event listeners toe aan de afbeeldingen
        images.forEach((image) => {
            image.addEventListener('click', function() {
                modal.style.display = 'block';
                modalImg.src = this.src;
            });
        });

        // Initialiseer de carrousel bij laden
        updateCarousel();
    });

    // Sluit de modal wanneer op de close-knop wordt geklikt
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Sluit de modal wanneer er buiten het modal wordt geklikt
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
