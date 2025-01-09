console.log("HEyyy");
var tp = document.getElementsByClassName("scroll");

function sc() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
}

function show() {
  var x = document.getElementById("example");

  if (x.style.display == "none") {
    x.style.display = "flex";
    document.getElementById("hide").innerHTML = "Hide";
  } else {
    x.style.display = "none";
    document.getElementById("hide").innerHTML = "Know More";
  }
}
