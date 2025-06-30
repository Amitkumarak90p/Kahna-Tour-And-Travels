// Typing animation (keep your previous one here)
const texts = ["Explore Himachal", "Explore Uttrakhand", "Explore Mountains"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
const typingText = document.getElementById('typing-text');

function type() {
  if (count === texts.length) count = 0;

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  typingText.textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => erase(), 2000);
  } else {
    setTimeout(type, 100);
  }
}

function erase() {
  letter = currentText.slice(0, --index);
  typingText.textContent = letter;

  if (letter.length === 0) {
    count++;
    setTimeout(type, 300);
  } else {
    setTimeout(erase, 50);
  }
}

type();

// Hamburger Toggle
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('show');
});


document.querySelectorAll('.book-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Booking feature coming soon!");
  });
});
