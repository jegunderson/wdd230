let imagesToLoad = document.querySelectorAll("img[data-src]");  

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

// Load all the images
// imagesToLoad.forEach((img) => {
//     loadImages(img);
// });

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);

            }
        });
    });

    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
}

else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}


let visitdate = Date.now();


// localStorage.setItem("lastviewed", 1668613267528);

let lastviewed = localStorage.getItem("lastviewed");
let days_since_last_view = (visitdate - lastviewed) / 86400000;
document.getElementById('lastviewed').textContent = `You last viewed this page ${days_since_last_view.toFixed(0)} days ago`;

localStorage.setItem("lastviewed", visitdate);