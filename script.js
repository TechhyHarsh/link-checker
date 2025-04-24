// Reveal on scroll
const revealElements = document.querySelectorAll('.scroll-reveal');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach((el) => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerBottom) {
      el.classList.add('active');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
  });

  
  // JavaScript to show Thank You message after submission
function showThankYouMessage() {
    alert("Thank you for your message! We will get back to you shortly.");
    return true;  // Allow form submission
  }
  