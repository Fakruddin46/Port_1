// Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Card Hover Effects
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Navbar Scroll Effect
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    } else {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    }
  });
  
  // Auto-scroll for Internships & Projects with Seamless Loop
  document.addEventListener("DOMContentLoaded", function () {
    // For Projects Section
    const projectsRow = document.getElementById('projectsRow');
    if (projectsRow) {
      // Duplicate content for seamless scroll
      projectsRow.innerHTML += projectsRow.innerHTML;
      setInterval(() => {
        if (projectsRow.scrollLeft >= projectsRow.scrollWidth / 2) {
          projectsRow.scrollLeft = 0;
        } else {
          projectsRow.scrollLeft += 1;
        }
      }, 30);
    }
    // For Internships Section
    const internshipRow = document.getElementById('internshipRow');
    if (internshipRow) {
      // Duplicate content for seamless scroll
      internshipRow.innerHTML += internshipRow.innerHTML;
      setInterval(() => {
        if (internshipRow.scrollLeft >= internshipRow.scrollWidth / 2) {
          internshipRow.scrollLeft = 0;
        } else {
          internshipRow.scrollLeft += 1;
        }
      }, 30);
    }
  });
  
