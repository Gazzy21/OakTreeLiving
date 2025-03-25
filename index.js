// Create an intersection observer to observe when the element enters or leaves the viewport
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'visible' class when the element enters the viewport
            entry.target.classList.add('visible');
        } else {
            // Remove the 'visible' class when the element leaves the viewport
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });  // Adjust threshold as needed (0.1 means 10% of the element is in view)

// Observe each .fade-in element
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});