// document.addEventListener('DOMContentLoaded', function() {
//     const modal = document.getElementById('modal');
//     const modalImg = document.getElementById('modal-img');
//     const project1Images = document.querySelectorAll('.CLE1project');
//     const project2Images = document.querySelectorAll('.CLE2project');
//     const project3Images = document.querySelectorAll('.CLE3project');
//     const project4Images = document.querySelectorAll('.CLE4project');
//     const programmeren8Images = document.querySelectorAll('.programmeren8');

//     function addClickListenerToImages(images) {
//         images.forEach(image => {
//             image.addEventListener('click', function() {
//                 if (modal.style.display === 'block') {
//                     modal.style.display = 'none';
//                 } else {
//                     modal.style.display = 'block';
//                     modalImg.src = this.src;
//                 }
//             });
//         });
//     }

//     addClickListenerToImages(project1Images);
//     addClickListenerToImages(project2Images);
//     addClickListenerToImages(project3Images);
//     addClickListenerToImages(project4Images);
//     addClickListenerToImages(programmeren8Images);

//     const closeBtn = document.querySelector('.close');
//     closeBtn.addEventListener('click', function() {
//         modal.style.display = 'none';
//     });

//     window.addEventListener('click', function(event) {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.image-carousel');
    
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

        // Initialiseer de carrousel bij laden
        updateCarousel();
    });
});
