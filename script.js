// Simple Mobile Menu Toggle (to be expanded if needed)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

if(mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        
        // Toggle icon between menu and close
        const icon = mobileMenuBtn.querySelector('ion-icon');
        if(nav.classList.contains('active')){
            icon.setAttribute('name', 'close-outline');
        } else {
            icon.setAttribute('name', 'menu-outline');
        }
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link, .btn-outline').forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('ion-icon');
            if(icon) icon.setAttribute('name', 'menu-outline');
        });
    });
}

// Smooth scroll for anchor links (if not supported natively)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement){
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
