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
            name: "Vera Homework",
            artist: "Listen to the Story Twice.",
            album: "Listen and Repeat Twice.",
            url: "/Homework/Vera/Intro.mp3",
            cover_art_url: "images/1-1 Cover.png",
        },
        {
            name: "Listen to the Story",
            artist: "Vera the Alien Hunter",
            album: "Earth's True Alien Hunter: Pages 4-7",
            url: "mp3s/Vera 1-1 Listen to the Story 4-7.mp3",
            cover_art_url: "images/1-1 Cover.png",
        },
        {
            name: "Listen and Repeat",
            artist: "Vera the Alien Hunter",
            album: "Earth's True Alien Hunter: Pages 4-7",
            url: "mp3s/Vera 1-1 Listen and Repeat 4-7.mp3",
            cover_art_url: "images/1-1 Cover.png",
        },
        {
            name: "Listen to the Story",
            artist: "Vera the Alien Hunter",
            album: "Earth's True Alien Hunter: Pages 8-11",
            url: "mp3s/Vera 1-1 Listen to the Story 8-11.mp3",
            cover_art_url: "images/1-1 Cover.png",
        },
        {
            name: "Listen and Repeat",
            artist: "Vera the Alien Hunter",
            album: "Earth's True Alien Hunter: Pages 8-11",
            url: "mp3s/Vera 1-1 Listen and Repeat 8-11.mp3",
            cover_art_url: "images/1-1 Cover.png",
        },
        {
            name: "Listen to the Story",
            artist: "Vera the Alien Hunter",
            album: "Earth's True Alien Hunter: Pages 12-15",
            url: "mp3s/Vera 1-1 Listen to the Story 12-15.mp3",
            cover_art_url: "images/1-1 Cover.png",
        },
        {
            name: "Listen and Repeat",
            artist: "Vera the Alien Hunter",
            album: "Earth's True Alien Hunter: Pages 12-15",
            url: "mp3s/Vera 1-1 Listen and Repeat 12-15.mp3",
            cover_art_url: "images/1-1 Cover.png",
        },
        {
            name: "Listen to the Story",
            artist: "Vera the Alien Hunter",
            album: "Earth's True Alien Hunter: Pages 16-18",
            url: "mp3s/Vera 1-1 Listen to the Story 16-18.mp3",
            cover_art_url: "images/1-1 Cover.png",
        },
        {
            name: "Listen and Repeat",
            artist: "Vera the Alien Hunter",
            album: "Earth's True Alien Hunter: Pages 16-18",
            url: "mp3s/Vera 1-1 Listen and Repeat 16-18.mp3",
            cover_art_url: "images/1-1 Cover.png",
        },
        // {
        //     name: "Offcut #6",
        //     artist: "Little People",
        //     album: "We Are But Hunks of Wood Remixes",
        //     url: "https://521dimensions.com/song/Offcut6-LittlePeople.mp3",
        //     cover_art_url:
        //         "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-but-hunks-of-wood.jpg",
        // },
        // {
        //     name: "Dusk To Dawn",
        //     artist: "Emancipator",
        //     album: "Dusk To Dawn",
        //     url: "https://521dimensions.com/song/DuskToDawn-Emancipator.mp3",
        //     cover_art_url:
        //         "https://521dimensions.com/img/open-source/amplitudejs/album-art/from-dusk-to-dawn.jpg",
        // },
        // {
        //     name: "Anthem",
        //     artist: "Emancipator",
        //     album: "Soon It Will Be Cold Enough",
        //     url: "https://521dimensions.com/song/Anthem-Emancipator.mp3",
        //     cover_art_url:
        //         "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg",
        // },
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
});
document.getElementById("large-visualization").style.height =
    document.getElementById("album-art").offsetWidth + "px";
