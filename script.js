const ditu = document.getElementById('ditu');
let currentIndex = 0;

document.addEventListener('wheel', (event) => {
    // Calculate the new index based on scroll direction
    if (event.deltaY > 0) {
        currentIndex = (currentIndex + 1) % 7;
    } else {
        currentIndex = (currentIndex - 1 + 7) % 7;
    }

    updateImage();
});

function updateImage() {
    const transformValue = `translateX(${-currentIndex * 100}%)`;
    ditu.style.transform = transformValue;
}
