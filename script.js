// script.js

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');

    const updateActiveItem = () => {
        const centerX = carousel.scrollLeft + carousel.clientWidth / 2;
        let closestItem = null;
        let closestDistance = Infinity;

        items.forEach(item => {
            const itemCenterX = item.offsetLeft + item.clientWidth / 2;
            const distance = Math.abs(centerX - itemCenterX);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestItem = item;
            }
        });

        items.forEach(item => {
            item.classList.remove('active', 'near-active');
        });

        if (closestItem) {
            closestItem.classList.add('active');

            // Adding near-active class to adjacent items
            const activeIndex = Array.from(items).indexOf(closestItem);

            if (items[activeIndex - 1]) {
                items[activeIndex - 1].classList.add('near-active');
            }

            if (items[activeIndex + 1]) {
                items[activeIndex + 1].classList.add('near-active');
            }
        }
    };

    carousel.addEventListener('scroll', () => {
        window.requestAnimationFrame(updateActiveItem);
    });

    updateActiveItem(); // Initial active item setup
});
