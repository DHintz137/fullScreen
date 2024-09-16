(function () {
    var fullscreenButton = document.getElementById("fullscreen-button");
    var exitFullscreenButton = document.getElementById("exit-fullscreen-button");
    var iframe = document.getElementsByTagName("iframe")[0];

    // Function to enter fullscreen
    function enterFullScreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        }
    }

    // Function to exit fullscreen
    function exitFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }

        // Ensure the iframe goes back to its original size
        iframe.classList.remove("fullScreen");
    }

    // Event listener for the fullscreen button
    if (fullscreenButton) {
        fullscreenButton.addEventListener("click", function () {
            iframe.classList.add("fullScreen");
            enterFullScreen(iframe);
        }, false);
    }

    // Event listener for the exit fullscreen button
    if (exitFullscreenButton) {
        exitFullscreenButton.addEventListener("click", function () {
            exitFullScreen();
        }, false);
    }

    // Fullscreen state change event listener to clean up after exiting fullscreen mode
    document.addEventListener("fullscreenchange", function () {
        if (!document.fullscreenElement) {
            iframe.classList.remove("fullScreen"); // Reset iframe size when exiting fullscreen
        }
    });

    document.addEventListener("mozfullscreenchange", function () {
        if (!document.mozFullScreen) {
            iframe.classList.remove("fullScreen");
        }
    });

    document.addEventListener("webkitfullscreenchange", function () {
        if (!document.webkitIsFullScreen) {
            iframe.classList.remove("fullScreen");
        }
    });

    document.addEventListener("msfullscreenchange", function () {
        if (!document.msFullscreenElement) {
            iframe.classList.remove("fullScreen");
        }
    });
})();

