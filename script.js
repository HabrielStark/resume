document.addEventListener('DOMContentLoaded', function() {
    // --- Copyright Year ---
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // --- Sticky Header ---
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Hero Text Typing Animation ---
    const typedTextSpan = document.querySelector("#hero-title .typed-text");
    const textArray = ["Architect of Cognitive Futures."]; // Add more phrases if desired
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            // Optionally erase and type next string
            // setTimeout(erase, newTextDelay); 
        }
    }

    // function erase() { // Optional: if you want to cycle through multiple texts
    //  if (charIndex > 0) {
    //      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    //      charIndex--;
    //      setTimeout(erase, erasingDelay);
    //  } else {
    //      textArrayIndex++;
    //      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    //      setTimeout(type, typingDelay + 1100);
    //  }
    // }
    if (typedTextSpan) setTimeout(type, newTextDelay + 250);


    // --- Scroll-Triggered Animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // observer.unobserve(entry.target); // Optional: stop observing once visible
            } else {
                // Optional: remove class if you want animation to replay on scroll up
                // entry.target.classList.remove('is-visible'); 
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed (0.1 means 10% visible)

    animatedElements.forEach(el => observer.observe(el));

    // --- CSS Starfield for Hero ---
    const starfield = document.querySelector('.starfield');
    if (starfield) {
        const numStars = 100; // Adjust for density
        for (let i = 0; i < numStars; i++) {
            let star = document.createElement('div');
            star.className = 'star';
            star.style.width = `${Math.random() * 2 + 1}px`; // Star size
            star.style.height = star.style.width;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            // Vary animation delay for a twinkling effect
            star.style.animationDelay = `${Math.random() * 3}s`; 
            starfield.appendChild(star);
        }
    }
}); 