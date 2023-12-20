const video = document.getElementById('intro-video');
const contentContainer = document.getElementById('content-container');

video.addEventListener('ended', showContent);

function showContent() {
  video.style.display = 'none';
  contentContainer.style.display = 'flex';
  contentContainer.classList.add('fade-down');
}
