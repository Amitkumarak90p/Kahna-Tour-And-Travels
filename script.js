window.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector('.scroll-container');

  // 👇 Clone all images to simulate infinite scroll
  const clone = scrollContainer.cloneNode(true);
  scrollContainer.parentElement.appendChild(clone);
});
