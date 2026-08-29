const galleryContentElement = document.querySelector("#galleryContent");

const galleryImages = [
    {
        src: "Images/Nature_Day.png",
        alt: "Nature_Day",
        caption: "Nature_Day"
    },
    {
        src: "Images/Nature_Night.png",
        alt: "Nature_Night",
        caption: "Nature_Night"
    },
    {
        src: "Images/Nature_Pink.png",
        alt: "Nature_Pink",
        caption: "Nature_Pink"
    },
    {
        src: "Images/Nature_Purple.png",
        alt: "Nature_Purple",
        caption: "Nature_Purple"
    },
    {
        src: "Images/Nature_Sunset.png",
        alt: "Nature_Sunset",
        caption: "Nature_Sunset"
    },
    {
        src: "Images/Phonk Song.jpg",
        alt: "Phonk Song",
        caption: "Phonk Song"
    },
    {
        src: "Images/Water.png",
        alt: "Water",
        caption: "Water"
    },
    {
        src: "Images/Upbeat.png",
        alt: "Upbeat",
        caption: "Upbeat"
    },
    {
        src: "Images/Music_Night.png",
        alt: "Music Night",
        caption: "Music Night"
    }
];

function loadGalleryContent() {
    if (!galleryContentElement) return;

    galleryContentElement.innerHTML = "";

    galleryImages.forEach((image) => {
        const item = document.createElement("div");
        item.classList.add("gallery_image_container");

        const img = document.createElement("img");
        img.classList.add("gallery_image");
        img.src = image.src;
        img.alt = image.alt;

        galleryContentElement.appendChild(item);
        item.appendChild(img);
    });
}

loadGalleryContent();