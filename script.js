// Part 1: Time-based greeting
let userName = prompt("What is your name?");
let currentHour = new Date().getHours();

if (currentHour < 12) {
  console.log("Good morning, " + userName + "!");
} else if (currentHour < 18) {
  console.log("Good afternoon, " + userName + "!");
} else {
  console.log("Good evening, " + userName + "!");
}

// Part 2: Age and days lived verification
let birthYear = prompt("What year were you born?");
let age = 2026 - birthYear;
let daysLived = age * 365;

console.log("You have lived for approximately " + daysLived + " days!");

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Part 3: Dark mode toggle
let themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Step 1: Render hobbies from an array using a loop
const hobbies = ['Photography', 'Skiing', 'Piano', 'Cooking'];
const listContainer = document.getElementById('hobby-list');
const ul = document.createElement('ul');

for (let i = 0; i < hobbies.length; i++) {
  const li = document.createElement('li');
  li.textContent = hobbies[i];
  ul.appendChild(li);
}

listContainer.appendChild(ul);

// Step 2: Hobby gallery with a "Next Photo" button
const galleryImages = [
  'photography.jpg',
  'skiing.jpg',
  'piano.jpg',
  'cooking.jpg'
];
const galleryCaptions = ['Photography', 'Skiing', 'Piano', 'Cooking'];

let currentIndex = 0;
const galleryImage = document.getElementById('gallery-image');
const galleryCaption = document.getElementById('gallery-caption');
const nextPhotoButton = document.getElementById('next-photo');

nextPhotoButton.addEventListener('click', function () {
  currentIndex++;

  if (currentIndex >= galleryImages.length) {
    currentIndex = 0;
  }

  galleryImage.src = galleryImages[currentIndex];
  galleryCaption.textContent = galleryCaptions[currentIndex];
});

galleryCaption.textContent = galleryCaptions[currentIndex];
