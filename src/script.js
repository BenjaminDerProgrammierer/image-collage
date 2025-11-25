const imageGrid = document.getElementById("image-grid");

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

for (const image of images) {
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    imageGrid.appendChild(img);
}
