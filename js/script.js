document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.image-carousel');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close');

    carousels.forEach((carousel) => {
        const carouselWrapper = carousel.querySelector('.carousel-content');
        const images = carousel.querySelectorAll('.carousel-image');
        let currentIndex = 0;
        let isTouching = false;
        let isDragging = false;
        let startX = 0;

        function updateCarousel() {
            const width = images[currentIndex].clientWidth;
            const offset = -currentIndex * width;
            carouselWrapper.style.transform = `translateX(${offset}px)`;
        }

        // Handlers voor touch- en muisgebeurtenissen
        function handleTouchStart(event) {
            isTouching = true;
            startX = event.touches[0].clientX;
        }

        function handleMouseDown(event) {
            isDragging = true;
            startX = event.clientX;
        }

        function handleTouchMove(event) {
            handleSwipe(event.touches[0].clientX);
        }

        function handleMouseMove(event) {
            handleSwipe(event.clientX);
        }

        function handleTouchEnd() {
            isTouching = false;
        }

        function handleMouseUp() {
            isDragging = false;
        }

        function handleSwipe(currentX) {
            if (isTouching || isDragging) {
                const diffX = startX - currentX;

                if (diffX > 20) {
                    if (currentIndex < images.length - 1) {
                        currentIndex++;
                        updateCarousel();
                    }
                } else if (diffX < -20) {
                    if (currentIndex > 0) {
                        currentIndex--;
                        updateCarousel();
                    }
                }

                startX = currentX;
            }
        }

        carousel.addEventListener('touchstart', handleTouchStart);
        carousel.addEventListener('mousedown', handleMouseDown);

        carousel.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('mousemove', handleMouseMove);

        carousel.addEventListener('touchend', handleTouchEnd);
        document.addEventListener('mouseup', handleMouseUp);

        images.forEach(image => {
            image.addEventListener('click', () => {
                modal.style.display = 'block';
                modalImg.src = image.src;
            });
        });

        updateCarousel();
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', event => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
