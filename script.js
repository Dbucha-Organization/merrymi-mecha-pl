document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        // Ավելացրու այս պայմանը սքրոլը անջատելու համար
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
});
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("active");
}
document.querySelectorAll('.card.card-capacity').forEach(card => {
    card.style.cursor = 'pointer'; // Մկնիկը վրան տանելիս կդառնա ձեռք
    card.addEventListener('click', () => {
        window.open('https://www.dbucha.com/collections/merrymi-jednorazowki', '_blank'); // Կբացի Dbucha-ն նոր պատուհանով
    });
});
document.querySelectorAll('.card.card-recharging').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        window.open('https://www.dbucha.com/collections/merrymi-jednorazowki', '_blank');
    });
});
// Այս կոդը գտնում է ԲՈԼՈՐ քարտերը (capacity, recharging, output) և դարձնում սեղմվող
document.querySelectorAll('.card').forEach(card => {
    // Մկնիկը վրան տանելիս ցույց է տալիս, որ այն սեղմվող է
    card.style.cursor = 'pointer';

    card.addEventListener('click', () => {
        // Բացում է Dbucha-ի կայքը նոր պատուհանում
        window.open('https://www.dbucha.com/collections/merrymi-jednorazowki', '_blank');
    });
});
// Սա գտնում է բոլոր տարրերը, որոնք ունեն 'card' դասը
document.querySelectorAll('.card').forEach(card => {

    // 1. Ավելացնում ենք ձեռքի նշանը (pointer), որ օգտատերը հասկանա՝ սա հղում է
    card.style.cursor = 'pointer';

    // 2. Ավելացնում ենք սեղմելու հնարավորությունը
    card.addEventListener('click', () => {
        // Բացում է Dbucha կայքը նոր պատուհանով
        window.open('https://www.dbucha.com/collections/merrymi-jednorazowki', '_blank');
    });
});
