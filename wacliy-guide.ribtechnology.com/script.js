document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');
    const nextBtns = document.querySelectorAll('.next-btn');

    // Function to switch active section
    function switchSection(targetId) {
        // Remove active class from all sections and nav items
        sections.forEach(sec => sec.classList.remove('active'));
        navItems.forEach(item => item.classList.remove('active'));

        // Add active class to target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Add active class to corresponding nav item
        const activeNavItem = document.querySelector(`.nav-item[data-target="${targetId}"]`);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }

        // Scroll to top of main content
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Event listeners for sidebar navigation
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            switchSection(targetId);
        });
    });

    // Event listeners for next buttons within content
    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-next');
            switchSection(targetId);
        });
    });
});
