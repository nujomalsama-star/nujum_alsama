document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            // تبديل الكلاس 'active' لإظهار/إخفاء القائمة
            navMenu.classList.toggle("active"); 
            
            // (اختياري) تغيير أيقونة الزر من (bars) إلى (times)
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
  // انتظر حتى يتم تحميل الصفحة بالكامل
    document.addEventListener("DOMContentLoaded", function() {
        
        // ابحث عن كل الروابط في الصفحة التي تبدأ بعلامة #
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            
            // أضف "مستمع" لكل رابط لينتظر الضغط عليه
            anchor.addEventListener('click', function(e) {
                
                // 1. أوقف السلوك الافتراضي (القفزة السريعة)
                e.preventDefault();

                // 2. احصل على الـ id الخاص بالهدف (مثل #contact-us-section)
                let targetId = this.getAttribute('href');
                let targetElement = document.querySelector(targetId);

                // 3. قم بعمل سكرول ناعم إلى هذا الهدف
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start' // اجعل بداية القسم هي بداية الشاشة
                    });
                }
            });
        });
    });