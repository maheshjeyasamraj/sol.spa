    // Smooth Scroll Animation using Intersection Observer
    document.addEventListener('DOMContentLoaded', function () {
        const aboutRight = document.getElementById('about');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aboutRight.classList.add('active');
                    observer.unobserve(entry.target); // Stop observing after animation triggers once
                }
            });
        }, { threshold: 0.3 }); // Trigger when 30% of section is visible

        observer.observe(aboutRight);
    });

    
    // Scroll Animation Trigger
    window.addEventListener('scroll', function () {
        const aboutSection = document.getElementById('about');
        const aboutRight = document.getElementById('aboutRight');
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            aboutRight.classList.add('active');
        }
    });



document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');

  const options = { threshold: 0.5 };

  const animateCount = (counter) => {
    const target = +counter.getAttribute('data-target');
    const speed = 200;
    const increment = target / speed;

    let count = 0;

    const updateCount = () => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target + '+';
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  counters.forEach(counter => {
    observer.observe(counter);
  });
});
