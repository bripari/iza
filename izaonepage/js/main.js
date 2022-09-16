//ANIMATE ON SCROLL

const aboutImgObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-bottom-ab');
    }
  });
});

aboutImgObserver.observe(document.querySelector('.aboutImgAnimate'));

const aboutTextObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-right');
    }
  });
});

aboutTextObserver.observe(document.querySelector('.aboutTextAnimate'));

const contactObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('focus-in-contract-bck');
    }
  });
});

contactObserver.observe(document.querySelector('.contactAnimate'));




// Scroll down button
const aboutButton = () => {
  document.getElementById("about").scrollIntoView({behavior: "smooth"})
 }
document.getElementById("aboutNav").addEventListener("click", aboutButton)

