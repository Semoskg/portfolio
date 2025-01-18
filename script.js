var imageThumbs = document.getElementById("image-thumbs");
var currentImage = document.getElementById("current-image");
for (var i = 1; i <= 4; i++) {
    var thumb = document.createElement("img");
    thumb.src = "images/image" + i + ".jpg";
    thumb.alt = "Image " + i;
    thumb.classList.add("thumb");
    imageThumbs.appendChild(thumb);

    thumb.addEventListener("click", function() {

        currentImage.src = this.src;

        currentImage.style.opacity = "0";
        setTimeout(() => {
            currentImage.style.opacity = "1";
        }, 100);


        document.querySelectorAll(".thumb").forEach(function(thumb) {
            thumb.classList.remove("active");
        });

        this.classList.add("active");
    });
}