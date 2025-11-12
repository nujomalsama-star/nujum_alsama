document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            
            navMenu.classList.toggle("active"); 
            
          
            const icon = navToggle.querySelector("i");
            if (navMenu.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    }
});

    document.addEventListener("DOMContentLoaded", function() {
        
      
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            
          
            anchor.addEventListener('click', function(e) {
                
               
                e.preventDefault();

              
                let targetId = this.getAttribute('href');
                let targetElement = document.querySelector(targetId);

               
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start' 
                    });
                }
            });
        });

    });
