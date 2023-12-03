let prevScrollpos = window.pageYOffset;
        const navbar = document.querySelector(".navbar");
        const logo = document.querySelector(".logo");
        
        window.onscroll = function() {
            let currentScrollPos = window.pageYOffset;
            
            if (prevScrollpos > currentScrollPos) {
                navbar.style.top = "0";
                navbar.classList.remove("hidden");
                logo.classList.remove("hidden");
                
            } else {
                navbar.style.top = "-60px"; 
                navbar.classList.add("hidden");
                logo.classList.add("hidden");
            }
            
            prevScrollpos = currentScrollPos;
        };


        document.addEventListener('DOMContentLoaded', function () {
            // Affiche le loader
            var loaderContainer = document.getElementById('loader-container');
            loaderContainer.style.display = 'flex';
        
            // Masque le loader après 3 secondes
            setTimeout(function () {
                loaderContainer.style.display = 'none';
                // Active les animations après le chargement
                var animateElements = document.querySelectorAll('.animate');
                animateElements.forEach(function (element) {
                    element.classList.add('active');
                });
            }, 2000);
        });
               
        // SCRIPT POUR UN SCROLL FLUIDE
document.addEventListener("DOMContentLoaded", function () {
    var scrollLinks = document.querySelectorAll('.scroll-link');
  
    scrollLinks.forEach(function (scrollLink) {
        scrollLink.addEventListener('click', function (e) {
            e.preventDefault();
  
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
  
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
  });
  
  