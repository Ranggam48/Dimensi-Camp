// Toggel class active navbar mode tablet
const navbarNav = document.querySelector(".navbar-nav");

//Ketika hamburger menu diklik 
const hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = () => {
    navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilankan navbar

document.addEventListener("click", (e) => {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove("active")
    }
});
