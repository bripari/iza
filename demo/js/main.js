//ANIMATE ON SCROLL

const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('slide-in-tr');
    }
  });
});

observer.observe(document.querySelector('.animate'));

const observer2 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('fade-in');
    }
  });
});

observer2.observe(document.querySelector('.animate2'));
//observer2.observe(document.querySelector('.animate3'));




// Scroll down button
const scrollButton = () => {
  document.getElementById("polterDetails").scrollIntoView({behavior: "smooth"})
 }
document.getElementById("scrollBtn").addEventListener("click", scrollButton)

