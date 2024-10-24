/*
  When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
  play the song.
*/
let bandcampLinks = document.getElementsByClassName("bandcamp-link");

for (var i = 0; i < bandcampLinks.length; i++) {
    bandcampLinks[i].addEventListener("click", function (e) {
        e.stopPropagation();
    });
}

let songElements = document.getElementsByClassName("song");

for (var i = 0; i < songElements.length; i++) {
    /*
    Ensure that on mouseover, CSS styles don't get messed up for active songs.
  */
    songElements[i].addEventListener("mouseover", function () {
        this.style.backgroundColor = "#00A0FF";

        this.querySelectorAll(".song-meta-data .song-title")[0].style.color =
            "#FFFFFF";
        this.querySelectorAll(".song-meta-data .song-artist")[0].style.color =
            "#FFFFFF";

        if (!this.classList.contains("amplitude-active-song-container")) {
            this.querySelectorAll(".play-button-container")[0].style.display =
                "block";
        }

        this.querySelectorAll("img.bandcamp-grey")[0].style.display = "none";
        this.querySelectorAll("img.bandcamp-white")[0].style.display = "block";
        this.querySelectorAll(".song-duration")[0].style.color = "#FFFFFF";
    });

    /*
    Ensure that on mouseout, CSS styles don't get messed up for active songs.
  */
    songElements[i].addEventListener("mouseout", function () {
        this.style.backgroundColor = "#FFFFFF";
        this.querySelectorAll(".song-meta-data .song-title")[0].style.color =
            "#272726";
        this.querySelectorAll(".song-meta-data .song-artist")[0].style.color =
            "#607D8B";
        this.querySelectorAll(".play-button-container")[0].style.display =
            "none";
        this.querySelectorAll("img.bandcamp-grey")[0].style.display = "block";
        this.querySelectorAll("img.bandcamp-white")[0].style.display = "none";
        this.querySelectorAll(".song-duration")[0].style.color = "#607D8B";
    });

    /*
    Show and hide the play button container on the song when the song is clicked.
  */
    songElements[i].addEventListener("click", function () {
        this.querySelectorAll(".play-button-container")[0].style.display =
            "none";
    });
}

/*
  Initializes AmplitudeJS
*/
Amplitude.init({
    songs: [
        {
            name: "Listen and Read Along",
            artist: "Vera the Alien Hunter",
            album: "Luca's Mission: Pages 12-15",
            url: "mp3s/Vera 1-4 Listen to the Story 12-15.mp3",
            cover_art_url: "images/cover.png",
        },
        {
            name: "Listen, Read, and Repeat",
            artist: "Vera the Alien Hunter",
            album: "Luca's Mission: Pages 12-15",
            url: "mp3s/Vera 1-4 Listen and Repeat 12-15.mp3",
            cover_art_url: "images/cover.png",
        },
    ],
    callbacks: {
        play: function () {
            document.getElementById("album-art").style.visibility = "hidden";
            document.getElementById("large-visualization").style.visibility =
                "visible";
        },

        pause: function () {
            document.getElementById("album-art").style.visibility = "visible";
            document.getElementById("large-visualization").style.visibility =
                "hidden";
        },
    },
    waveforms: {
        sample_rate: 50,
    },
    playback_speed: 0.85,
    volume: 100,
});
document.getElementById("large-visualization").style.height =
    document.getElementById("album-art").offsetWidth + "px";
