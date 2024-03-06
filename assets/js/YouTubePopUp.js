
// ytbpopup
function openPopup(videoId) {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popup").style.display = "block";
  document.getElementById("youtube-video").src = "https://www.youtube.com/embed/" + videoId;
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
  document.getElementById("youtube-video").src = ""; // Reset the video source
}