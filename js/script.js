// JavaScript code to handle image enlargement
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const project1Images = document.querySelectorAll('.CLE1project');
    const project2Images = document.querySelectorAll('.CLE2project');
    const project3Images = document.querySelectorAll('.CLE3project');
    const project4Images = document.querySelectorAll('.CLE4project');

    function addClickListenerToImages(images) {
        images.forEach(image => {
            image.addEventListener('click', function() {
                if (modal.style.display === 'block') {
                    modal.style.display = 'none';
                } else {
                    modal.style.display = 'block';
                    modalImg.src = this.src;
                }
            });
        });
    }

    addClickListenerToImages(project1Images);
    addClickListenerToImages(project2Images);
    addClickListenerToImages(project3Images);
    addClickListenerToImages(project4Images);

    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
