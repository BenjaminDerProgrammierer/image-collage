const imageGrid = document.getElementById("image-grid");

const imagesPerRow = 3;
let currentRow = 0;

// Placeholder images from https://dev.me/products/image-placeholder
// Notable mentions: https://placehold.co/, https://picsum.photos/
const images = [
    { src: "https://via.assets.so/img.jpg?w=400&h=300&gradientFrom=96e6a1&gradientTo=4bc0c8&gradientAngle=135&text=Image+1&f=png", alt: "Image 1" },
    { src: "https://via.assets.so/img.jpg?w=400&h=300&gradientFrom=fa709a&gradientTo=fee140&gradientAngle=135&text=Image+2&f=png", alt: "Image 2" },
    { src: "https://via.assets.so/img.jpg?w=400&h=300&gradientFrom=8E2DE2&gradientTo=4A00E0&gradientAngle=135&text=Image+3&f=png", alt: "Image 3" },
    { src: "https://via.assets.so/img.jpg?w=400&h=300&gradientFrom=96e6a1&gradientTo=4bc0c8&gradientAngle=135&text=Image+4&f=png", alt: "Image 4" },
    { src: "https://via.assets.so/img.jpg?w=400&h=300&gradientFrom=fa709a&gradientTo=fee140&gradientAngle=135&text=Image+5&f=png", alt: "Image 5" },
    { src: "https://via.assets.so/img.jpg?w=400&h=300&gradientFrom=8E2DE2&gradientTo=4A00E0&gradientAngle=135&text=Image+6&f=png", alt: "Image 6" },
    { src: "https://via.assets.so/img.jpg?w=400&h=300&gradientFrom=96e6a1&gradientTo=4bc0c8&gradientAngle=135&text=Image+7&f=png", alt: "Image 7" },
    { src: "https://via.assets.so/img.jpg?w=400&h=300&gradientFrom=fa709a&gradientTo=fee140&gradientAngle=135&text=Image+8&f=png", alt: "Image 8" },
    { src: "https://via.assets.so/img.jpg?w=400&h=300&gradientFrom=8E2DE2&gradientTo=4A00E0&gradientAngle=135&text=Image+9&f=png", alt: "Image 9" },
    { src: "https://via.assets.so/img.jpg?w=400&h=300&gradientFrom=96e6a1&gradientTo=4bc0c8&gradientAngle=135&text=Image+10&f=png", alt: "Image 10" },
    { src: "https://via.assets.so/img.jpg?w=400&h=300&gradientFrom=fa709a&gradientTo=fee140&gradientAngle=135&text=Image+11&f=png", alt: "Image 11" },
    { src: "https://via.assets.so/img.jpg?w=400&h=300&gradientFrom=8E2DE2&gradientTo=4A00E0&gradientAngle=135&text=Image+12&f=png", alt: "Image 12" },
    { src: "https://via.assets.so/img.jpg?w=400&h=300&gradientFrom=96e6a1&gradientTo=4bc0c8&gradientAngle=135&text=Image+13&f=png", alt: "Image 13" },
    { src: "https://via.assets.so/img.jpg?w=400&h=300&gradientFrom=fa709a&gradientTo=fee140&gradientAngle=135&text=Image+14&f=png", alt: "Image 14" },
    { src: "https://via.assets.so/img.jpg?w=400&h=300&gradientFrom=8E2DE2&gradientTo=4A00E0&gradientAngle=135&text=Image+15&f=png", alt: "Image 15" },
];


function appendImages() {
    const lastButton = document.querySelector(".load-more");
    if (lastButton) {
        lastButton.remove();
    }

    for (let i = currentRow * imagesPerRow; i < (currentRow + 1) * imagesPerRow && i < images.length; i++) {
        const img = document.createElement("img");
        img.src = images[i].src;
        img.alt = images[i].alt;
        imageGrid.appendChild(img);
    }
    currentRow++;

    if (currentRow * imagesPerRow < images.length) {
        const moreButton = document.createElement("button");
        moreButton.classList.add("load-more");
        moreButton.textContent = "Load more images";
        moreButton.addEventListener("click", appendImages);
        imageGrid.appendChild(moreButton);
    }
}

appendImages();
