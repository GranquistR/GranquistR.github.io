const markers = [
  "YMCA Lifeguard",
  "UW-Stout Helpdesk Technician",
  "Associate Software Developer",
];
const dates = ["2019-2021", "2022-2023", "2023-Present"];
const descriptions = [
  "I worked as a lifeguard at the YMCA in Lino Lakes, MN. I was responsible for the safety of all patrons in the pool area. I also was resposible for pool cleaning, maintenance, and slide operation.",
  "I worked as a helpdesk technician at the University of Wisconsin-Stout. I was responsible for assisting students, faculty, and staff with any technical issues they were having.",
  "I currently work as an associate software developer at Sentry Insurance. I am responsible for developing and maintaining software for business use.",
];
const images = ["ymca.png", "stout.png", "sentry.jpg"];
const timelineLength = 900;

window.addEventListener("resize", imageshow);
function imageshow() {
  if (window.innerWidth > 900) {
    $("#timeline img").show();
    $("#timeline").css("zoom", "1");
  } else {
    $("#timeline img").hide();
    $("#timeline").css("zoom", "0.87");
  }
}
$(document).ready(imageshow);
imageshow();

$("#timeline").append(`<div class="grandline"></div)`);

for (var i = 0; i < markers.length; i++) {
  $("#timeline").append(`
  <div class="marker" style="top: ${
    i * (timelineLength / markers.length) + timelineLength / markers.length / 2
  }px">
  <div class="textandimg">
  <div class="text" style="animation: fadein 0.5s ease-in-out both ${
    i * 0.4 + 1.2
  }s;
  "><h4>${markers[i]}</h4>
  <h5 class="date">${dates[i]}</h5>
  <p class="description">${descriptions[i]}</p>
  </div>
  <img src="Images/${
    images[i]
  }" width="200px" style="border-radius:10px; animation: fadein 0.5s ease-in-out both ${
    i * 0.4 + 1.2
  }s;"></img>
  </div>
  <div class="underline" style="
  animation: slidein 0.5s ease-in-out both ${i * 0.4 + 1}s;
  "></div>
  <div class="dot" style="
  animation: popin 0.5s ease-in-out both ${i * 0.4 + 0.6}s;
  "></div>
  </div>


  `);
}

$("#timeline").append(`
<style>
#timeline .description{
  height:150px;
}

#timeline .textandimg{
display: flex;
justify-content: center;
}

#timeline img{
  margin-left: 5vw;
  margin-bottom: 30px;
}


#timeline .marker{
  position: absolute;
  left: 10%;
  color: white;
  margin-right: 10%;

}

#timeline .marker .underline{
  background-color: gray;
  width: 70vw;
  height: 1px;
}

#timeline .dot{
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  translate: -45%;
  margin-top: -8px;
  
}

#timeline .marker .text{
  margin-left: 13%;
  width: 500px;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes dropdown {
  from {
    height: 0px;
    
  }
  to {
    height:${timelineLength - 10}px;
  }
}

@keyframes slidein {
  from {
    width: 0vw;
  }
  to {
    width: vw;
  }
}

@keyframes popin {
  from {
    width: 0px;
    height: 0px;
  }
  to {
    width: 15px;
    height: 15px;
  }
}

#timeline .grandline{
  width: 2px;
  background-color: gray;
  position: absolute;
  left: 10%;
  animation: dropdown 2s ease-in-out forwards;
}

</style>

<div style="height: ${timelineLength + 100}px"></div>
`);
