const imageGrid = document.getElementById("image-grid");

const imagesPerRow = 3;
let currentRow = 0;

// Placeholder images from https://dev.me/products/image-placeholder
// Notable mentions: https://placehold.co/, https://picsum.photos/
const imageTemplate = (i) => {
    let gradientParameters;
    if (i % 3 === 0) {
        gradientParameters = `gradientFrom=96e6a1&gradientTo=4bc0c8&gradientAngle=135`;
    } else if (i % 3 === 1) {
        gradientParameters = `gradientFrom=fa709a&gradientTo=fee140&gradientAngle=135`;
    } else {
        gradientParameters = `gradientFrom=8E2DE2&gradientTo=4A00E0&gradientAngle=135`;
    }

    return {
        src: `https://via.assets.so/img.jpg?w=400&h=300&${gradientParameters}&text=Image+${i}&f=png`,
        alt: `Image ${i}`
    }
};

function appendImages() {
    const lastButton = document.querySelector(".load-more");
    if (lastButton) {
        lastButton.remove();
    }

    for (let i = currentRow * imagesPerRow; i < (currentRow + 1) * imagesPerRow; i++) {
        const img = document.createElement("img");
        img.src = imageTemplate(i).src;
        img.alt = imageTemplate(i).alt;
        imageGrid.appendChild(img);
    }
    currentRow++;

    const moreButton = document.createElement("button");
    moreButton.classList.add("load-more");
    moreButton.textContent = "Load more images";
    moreButton.addEventListener("click", appendImages);
    imageGrid.appendChild(moreButton);

}

appendImages();
appendImages();
appendImages();
