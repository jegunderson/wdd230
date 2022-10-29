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

localStorage.setItem("lastviewed", visitdate);


let lastviewed = localStorage.getItem("lastviewed")
let days_since_last_view = visitdate - lastviewed
document.getElementById('lastviewed').textContent = `You last viewed this page ${days_since_last_view} days ago`