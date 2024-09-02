document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("hoverVideo");

    video.addEventListener("mouseenter", function() {
        video.play();
    });

    video.addEventListener("mouseleave", function() {
        video.pause();
        video.currentTime = 0;
    });
});
