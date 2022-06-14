// file này bần đạo viết như cứt mong các vị huynh đài đừng đánh giá :)))
$('#xpo-hot').owlCarousel({
    loop: true,
    margin: 6,
    nav: true,
    navText: ['<i class="iconify" data-icon="fa:chevron-left"></i>', '<i class="iconify" data-icon="fa:chevron-right"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dotsEach: true,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 3
        },
        600: {
            items: 4
        },
        763: {
            items: 5
        },
        1000: {
            items: 6
        }
    }
});
$('.xpo-content-cat').owlCarousel({
    loop: true,
    margin: 6,
    nav: true,
    navText: ['<i class="iconify" data-icon="fa:chevron-left"></i>', '<i class="iconify" data-icon="fa:chevron-right"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dotsEach: true,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 5
        }
    }
});
$('#xpo-sidebar-trailer').owlCarousel({
    loop: true,
    margin: 6,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dotsEach: true,
    items: 1,
});
$('.xpo-slide-full__list').owlCarousel({
    loop: true,
    margin: 6,
    nav: true,
    navText: ['<i class="iconify" data-icon="fa:chevron-left"></i>', '<i class="iconify" data-icon="fa:chevron-right"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dotsEach: true,
    items: 1,
});
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });
    $('#scroll-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
// show hidden menu in mobile
let menuMobileBtn = document.querySelector(".menu-mobile__btn");
menuMobileBtn.addEventListener("click", function() {
    let headerNavbar = document.querySelector(".header-navbar");
    if (headerNavbar.style.display === "none" || headerNavbar.style.display === "") {
        headerNavbar.style.display = "block";
        document.getElementById("navbar-mobile__icon-list").style.display = "none";
        document.getElementById("navbar-mobile__icon-close").style.display = "inline-block";
    } else {
        headerNavbar.style.display = "none";
        document.getElementById("navbar-mobile__icon-list").style.display = "inline-block";
        document.getElementById("navbar-mobile__icon-close").style.display = "none";
    }
});
// show dropdown-list in mobile
let navbarItem = document.querySelectorAll(".header-navbar__menu-item.dropdown>a");
navbarItem.forEach(function(element) {
    element.addEventListener("click", function() {
        let dropdownList = this.nextElementSibling;
        if (dropdownList.style.display === "none" || dropdownList.style.display === "") {
            dropdownList.style.display = "block";
        } else {
            dropdownList.style.display = "none";
        }
    });
});
// show search input in mobile
let searchMobileBtn = document.querySelector(".search-mobile__btn");
searchMobileBtn.addEventListener("click", function() {
    let searchInput = document.querySelector(".header-search");
    if (searchInput.classList.contains("sm-hidden")) {
        searchInput.classList.remove("sm-hidden");
        document.getElementById("navbar-mobile__icon-search").style.display = "none";
        document.getElementById("navbar-mobile__icon-close-search").style.display = "inline-block";
    } else {
        searchInput.classList.add("sm-hidden");
        document.getElementById("navbar-mobile__icon-search").style.display = "inline-block";
        document.getElementById("navbar-mobile__icon-close-search").style.display = "none";
    }
});
// show login/register in mobile
let userMobileBtn = document.querySelector(".user-mobile__btn");
userMobileBtn.addEventListener("click", function() {
    let authModal = document.querySelector(".auth-modal");
    if (authModal.classList.contains("hidden")) {
        authModal.classList.remove("hidden");
    }
});
// close auth modal
document.querySelector(".modal-dialog__tabs-close").addEventListener("click", function() {
    let authModal = document.querySelector(".auth-modal");
    authModal.classList.add("hidden");
});
// change tab active
let authModalTabs = document.querySelectorAll(".modal-dialog__tabs-list>li.modal-dialog__tabs-item");
authModalTabs.forEach(function(element) {
    element.addEventListener("click", function() {
        authModalTabs.forEach(function(el) {
            if (el.classList.contains("active")) {
                el.classList.remove("active");
            }
        });
        document.querySelectorAll(".modal-dialog__content>div").forEach(function(el) {
            if (!el.classList.contains("hidden")) {
                el.classList.add("hidden");
            }
        });
        this.classList.add("active");
        if (document.getElementById("modal-dialog__tab-login").classList.contains("active")) {
            document.querySelector(".modal-dialog__content .modal-login").classList.remove("hidden");
        }
        if (document.getElementById("modal-dialog__tab-register").classList.contains("active")) {
            document.querySelector(".modal-dialog__content .modal-register").classList.remove("hidden");
        }
    });
});
let forgotUser = document.querySelector(".forgot-user");
forgotUser.addEventListener("click", function() {
    document.querySelectorAll(".modal-dialog__content>div").forEach(function(el) {
        if (!el.classList.contains("hidden")) {
            el.classList.add("hidden");
        }
    });
    document.querySelector(".modal-dialog__content .modal-forgot").classList.remove("hidden");
});
// show auth modal in desktop & tablet
let btnLogin = document.getElementById("btn-login");
let btnRegister = document.getElementById("btn-register");
let authModal = document.querySelector(".auth-modal");
btnLogin.addEventListener("click", function() {
    authModal.classList.remove("hidden");
    authModalTabs.forEach(function(el) {
        if (el.classList.contains("active")) {
            el.classList.remove("active");
        }
    });
    document.querySelectorAll(".modal-dialog__content>div").forEach(function(el) {
        if (!el.classList.contains("hidden")) {
            el.classList.add("hidden");
        }
    });
    document.getElementById("modal-dialog__tab-login").classList.add("active");
    document.querySelector(".modal-dialog__content .modal-login").classList.remove("hidden");
});
btnRegister.addEventListener("click", function() {
    authModal.classList.remove("hidden");
    authModalTabs.forEach(function(el) {
        if (el.classList.contains("active")) {
            el.classList.remove("active");
        }
    });
    document.querySelectorAll(".modal-dialog__content>div").forEach(function(el) {
        if (!el.classList.contains("hidden")) {
            el.classList.add("hidden");
        }
    });
    document.getElementById("modal-dialog__tab-register").classList.add("active");
    document.querySelector(".modal-dialog__content .modal-register").classList.remove("hidden");
});
// change tab top aside
let asideTopTabs = document.querySelectorAll(".tab-header>li");
asideTopTabs.forEach(function(element) {
    element.addEventListener("click", function() {
        asideTopTabs.forEach(function(el) {
            if (el.classList.contains("active")) {
                el.classList.remove("active");
            }
        });
        document.querySelectorAll(".tab-container .tab-content").forEach(function(el) {
            if (!el.classList.contains("hidden")) {
                el.classList.add("hidden");
            }
        });
        this.classList.add("active");
        if (document.getElementById("tab-label-phimle").classList.contains("active")) {
            document.getElementById("tab-phimle").classList.remove("hidden");
        }
        if (document.getElementById("tab-label-phimbo").classList.contains("active")) {
            document.getElementById("tab-phimbo").classList.remove("hidden");
        }
        if (document.getElementById("tab-label-hoathinh").classList.contains("active")) {
            document.getElementById("tab-hoathinh").classList.remove("hidden");
        }
    });
});