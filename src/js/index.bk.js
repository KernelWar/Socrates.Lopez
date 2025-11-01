import './common'
import "./../scss/style.scss";

import 'bootstrap/js/dist/modal';
$('.image-card').on('click', function(){
    var title = $(this).data('title');
    var src = $(this).data('src');
    $(".modal-body .modal-src").attr('src', src);
    $(".modal-content .modal-header .modal-title").text(title);
    
})

async function loadLastPlayedSong() {
    try {
        const response = await fetch("https://kernelwar-api.vercel.app/spotify/currently-song", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data.trackId) {
            document.getElementById("spotify-iframe").src = `https://open.spotify.com/embed/track/${data.trackId}`;
            document.getElementById("spotify-widget").style.display = "block";
            document.getElementById("spotify-status").textContent = data.status == "current" ? "Lo que estoy escuchando ahora 🎶" : "Lo último que escuché 🎶"
        }
    } catch (error) {
        console.error("Error fetching last played song:", error);
    }
}

document.addEventListener("DOMContentLoaded", loadLastPlayedSong);

