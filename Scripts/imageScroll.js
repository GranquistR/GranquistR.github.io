const images = {
  1: {
    source: "/Images/blam.png",
    alt: "Ryan Granquist holding a old shotgun",
  },
  2: {
    source: "/Images/camp.png",
    alt: "Ryan Granquist going camping",
  },
  3: {
    source: "/Images/fishy.png",
    alt: "Ryan Granquist holding a bass",
  },
  4: {
    source: "/Images/Headshot.png",
    alt: "Ryan Granquist at a wedding in Arizona",
  },
  5: {
    source: "/Images/horns.png",
    alt: "Ryan Granquist at a UW-Stout event",
  },
  6: {
    source: "/Images/MeAndRuss.png",
    alt: "Ryan Granquist and his best friend Russel",
  },
  7: {
    source: "/Images/polycam.png",
    alt: "Ryan Granquist and a 3d model of a good friend",
  },
  8: {
    source: "/Images/russyAndMe.png",
    alt: "Ryan Granquist and his best friend Russel",
  },
  9: {
    source: "/Images/skiTrip.png",
    alt: "Ryan Granquist in Steamboat Springs, Colorado",
  },
  10: {
    source: "/Images/UnderBridge.png",
    alt: "Ryan Granquist under a bridge",
  },
};

let intervalTimer;
function BeginScroll() {
  
//insert images
let previous;
for(let i = 1; i <= 10; i++){
    let img = document.createElement("img");
    img.src = images[i].source;
    img.alt = images[i].alt;
    img.style.height = "400px";
    img.style.width = "300px";
    img.classList.add("images");
    img.style.left = (300 * (i-1)).toString() + "px";
  
    document.getElementById("imageScroll").appendChild(img);
    previous = img;
}

    // start scroll
  intervalTimer = setInterval(ScrollImages, 50);
}

function ScrollImages() {
  $(".images").each(function () {
    $(this).css("left", parseInt($(this).css("left")) - 1);
    if(parseInt($(this).css("left")) < -300)
    {
      $(this).css("left", "2699px");
    }
  });
}
