var imageThumbs = document.getElementById("image-thumbs");
var currentImage = document.getElementById("current-image");

// Loop to create and append thumbnails
for (var i = 1; i <= 4; i++) {
    var thumb = document.createElement("img");
    thumb.src = "images/image" + i + ".jpg";
    thumb.alt = "Image " + i;
    thumb.classList.add("thumb");
    imageThumbs.appendChild(thumb);

    thumb.addEventListener("click", function() {
        // Update the main image source
        currentImage.src = this.src;

        // Add fade-in animation
        currentImage.style.opacity = "0";
        setTimeout(() => {
            currentImage.style.opacity = "1";
        }, 100);

        // Remove 'active' class from all thumbnails
        document.querySelectorAll(".thumb").forEach(function(thumb) {
            thumb.classList.remove("active");
        });

        // Add 'active' class to the clicked thumbnail
        this.classList.add("active");
    });
}