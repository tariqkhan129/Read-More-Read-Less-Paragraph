function readMoreOrReadLess() {
    var splitText = document.getElementById("splitText");
    var moreText = document.getElementById("readMore");
    var btn= document.getElementById("btn");
  
    if (splitText.style.display === "none") {
      splitText.style.display = "inline";
      btn.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      splitText.style.display = "none";
      btn.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }