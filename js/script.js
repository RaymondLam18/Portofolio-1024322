// document.addEventListener('DOMContentLoaded', function() {
//     const carousels = document.querySelectorAll('.image-carousel');
//     const modal = document.getElementById('modal');
//     const modalImg = document.getElementById('modal-img');
//     const closeBtn = document.querySelector('.close');

//     carousels.forEach((carousel) => {
//         const carouselWrapper = carousel.querySelector('.carousel-content');
//         const images = carousel.querySelectorAll('.carousel-image');
//         let currentIndex = 0;
//         let isTouching = false;
//         let isDragging = false;
//         let startX = 0;

//         function updateCarousel() {
//             const width = images[currentIndex].clientWidth;
//             const offset = -currentIndex * width;
//             carouselWrapper.style.transform = `translateX(${offset}px)`;
//         }

//         function handleTouchStart(event) {
//             isTouching = true;
//             startX = event.touches[0].clientX;
//         }

//         function handleMouseDown(event) {
//             isDragging = true;
//             startX = event.clientX;
//         }

//         function handleTouchMove(event) {
//             handleSwipe(event.touches[0].clientX);
//         }

//         function handleMouseMove(event) {
//             handleSwipe(event.clientX);
//         }

//         function handleTouchEnd() {
//             isTouching = false;
//         }

//         function handleMouseUp() {
//             isDragging = false;
//         }

//         function handleSwipe(currentX) {
//             if (isTouching || isDragging) {
//                 const diffX = startX - currentX;
        
//                 if (diffX > 0) {
//                     if (diffX > 20 && currentIndex < images.length - 1) {
//                         currentIndex++;
//                         updateCarousel();
//                     }
//                 } else {
//                     if (diffX < -20 && currentIndex > 0) {
//                         currentIndex--;
//                         updateCarousel();
//                     }
//                 }
        
//                 startX = currentX;
//             }
//         }
        

//         carousel.addEventListener('touchstart', handleTouchStart);
//         carousel.addEventListener('mousedown', handleMouseDown);

//         carousel.addEventListener('touchmove', handleTouchMove);
//         document.addEventListener('mousemove', handleMouseMove);

//         carousel.addEventListener('touchend', handleTouchEnd);
//         document.addEventListener('mouseup', handleMouseUp);

//         images.forEach(image => {
//             image.addEventListener('click', () => {
//                 modal.style.display = 'block';
//                 modalImg.src = image.src;
//             });
//         });

//         updateCarousel();
//     });

//     closeBtn.addEventListener('click', () => {
//         modal.style.display = 'none';
//     });

//     window.addEventListener('click', event => {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     });
// });
document.querySelectorAll('.carousel-image').forEach(image => {
    image.addEventListener('click', function () {
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        modal.style.display = 'block';
        modalImg.src = this.src;
    });
});

document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function() {
    const page = document.getElementById("page");
    page.classList.add("fade-in");
    
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const href = this.getAttribute("href");
            page.classList.remove("fade-in");
            page.classList.add("fade");

            setTimeout(() => {
                window.location.href = href;
            }, 500); // De tijd moet overeenkomen met de CSS-transitie
        });
    });
});
