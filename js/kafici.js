let currentIndex = 0;

function rotateImages() {
    const images = document.querySelectorAll('.slika');
    images[currentIndex].classList.remove('vidljivo');

    currentIndex = (currentIndex + 1) % images.length;

    images[currentIndex].classList.add('vidljivo');
}