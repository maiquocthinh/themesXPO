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
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });
    $('#scroll-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
// show hidden menu in mobile
const menuMobileBtn = document.querySelector(".menu-mobile__btn");
menuMobileBtn.onclick = function () {
    const headerNavbar = document.querySelector(".header-navbar");
    headerNavbar.classList.toggle('sm-hidden');
    if (headerNavbar.classList.contains('sm-hidden')) {
        document.querySelector("#navbar-mobile__icon-list").style.display = "inline-block";
        document.querySelector("#navbar-mobile__icon-close").style.display = "none";
    } else {
        document.querySelector("#navbar-mobile__icon-list").style.display = "none";
        document.querySelector("#navbar-mobile__icon-close").style.display = "inline-block";
    }
};
// show dropdown-list in mobile
const navbarItems = document.querySelectorAll(".header-navbar__menu-item.dropdown>a");
navbarItems.forEach(function (element) {
    element.onclick = function () {
        const dropdownList = this.nextElementSibling;
        const dropdownListOpen = document.querySelector('.dropdown-list:not(.sm-hidden)');
        if (dropdownListOpen && dropdownListOpen !== dropdownList) {
            dropdownListOpen.classList.add('sm-hidden');
        }
        dropdownList.classList.toggle('sm-hidden');
    };
});
// show search input in mobile
const searchMobileBtn = document.querySelector(".search-mobile__btn");
searchMobileBtn.onclick = function () {
    const searchInput = document.querySelector(".header-search");
    searchInput.classList.toggle('sm-hidden');
    if (searchInput.classList.contains("sm-hidden")) {
        document.querySelector("#navbar-mobile__icon-search").style.display = "inline-block";
        document.querySelector("#navbar-mobile__icon-close-search").style.display = "none";
    } else {
        document.querySelector("#navbar-mobile__icon-search").style.display = "none";
        document.querySelector("#navbar-mobile__icon-close-search").style.display = "inline-block";
    }
};
// show login/register in mobile
const userMobileBtn = document.querySelector(".user-mobile__btn");
userMobileBtn.onclick = function () {
    const authModal = document.querySelector(".auth-modal");
    authModal.classList.toggle("hidden");
};
// close auth modal
const authModalCloseBtn = document.querySelector(".modal-dialog__tabs-close");
authModalCloseBtn.onclick = function () {
    const authModal = document.querySelector(".auth-modal");
    authModal.classList.add("hidden");
};
// change tab active of authModal
let authModalTabs = document.querySelectorAll(".modal-dialog__tabs-list>li.modal-dialog__tabs-item");
authModalTabs.forEach(function (element) {
    element.onclick = function () {
        document.querySelector('.modal-dialog__tabs-item.active').classList.remove("active");
        document.querySelector(".modal-dialog__content>div:not(.hidden").classList.add("hidden");

        this.classList.add("active");

        if (document.querySelector("#modal-dialog__tab-login").classList.contains("active")) {
            document.querySelector(".modal-dialog__content .modal-login").classList.remove("hidden");
        }
        if (document.querySelector("#modal-dialog__tab-register").classList.contains("active")) {
            document.querySelector(".modal-dialog__content .modal-register").classList.remove("hidden");
        }
    };
});
let forgotUser = document.querySelector(".forgot-user");
forgotUser.onclick = function () {
    document.querySelector(".modal-dialog__content>div:not(.hidden").classList.add("hidden");
    document.querySelector(".modal-dialog__content .modal-forgot").classList.remove("hidden");
};

// show auth modal in desktop & tablet
const btnLogin = document.querySelector("#btn-login");
const btnRegister = document.querySelector("#btn-register");
const authModal = document.querySelector(".auth-modal");
btnLogin.onclick = function () {
    authModal.classList.remove("hidden");

    document.querySelector('.modal-dialog__tabs-item.active').classList.remove("active");
    document.querySelector(".modal-dialog__content>div:not(.hidden").classList.add("hidden");

    document.querySelector("#modal-dialog__tab-login").classList.add("active");
    document.querySelector(".modal-dialog__content .modal-login").classList.remove("hidden");
};
btnRegister.onclick = function () {
    authModal.classList.remove("hidden");

    document.querySelector('.modal-dialog__tabs-item.active').classList.remove("active");
    document.querySelector(".modal-dialog__content>div:not(.hidden").classList.add("hidden");

    document.querySelector("#modal-dialog__tab-register").classList.add("active");
    document.querySelector(".modal-dialog__content .modal-register").classList.remove("hidden");
};

// change tab top aside
const popularPosts = document.querySelectorAll('.tab-container .popular-posts');
popularPosts.forEach(function (popularPost) {
    const asideTopTabs = popularPost.querySelectorAll(".tab-header>li");
    asideTopTabs.forEach(function (element) {
        element.onclick = function () {
            popularPost.querySelector('.tab-header>li.active').classList.remove("active");
            popularPost.querySelector(".tab-container .tab-content:not(.hidden)").classList.add("hidden");

            this.classList.add("active");

            if (this === popularPost.querySelector("#tab-label-1")) {
                popularPost.querySelector("#tab-content-1").classList.remove("hidden");
            }
            if (this === popularPost.querySelector("#tab-label-2")) {
                popularPost.querySelector("#tab-content-2").classList.remove("hidden");
            }
            if (this === popularPost.querySelector("#tab-label-3")) {
                popularPost.querySelector("#tab-content-3").classList.remove("hidden");
            }
        };
    });

});

// fill infoFilm to xpoMiniInfo
function fillDataToXpoMiniInfo(xpoMiniInfo, infoFilm){
    if(infoFilm){
        xpoMiniInfo.querySelector('.xpo-mini-info__name').textContent = infoFilm.dataset.name;
        xpoMiniInfo.querySelector('.xpo-mini-info__original-name').textContent = infoFilm.dataset.originalName;
        xpoMiniInfo.querySelector('.xpo-mini-info__imdb').lastChild.textContent = infoFilm.dataset.imdb;
        xpoMiniInfo.querySelector('.xpo-mini-info__duration').lastChild.textContent = infoFilm.dataset.duration;
        xpoMiniInfo.querySelector('.xpo-mini-info__year').lastChild.textContent = infoFilm.dataset.year;
        xpoMiniInfo.querySelector('.xpo-mini-info__short-description').textContent = infoFilm.dataset.shortDescription;
        xpoMiniInfo.querySelector('.xpo-mini-info__countries').lastChild.textContent = infoFilm.dataset.countries;
        xpoMiniInfo.querySelector('.xpo-mini-info__categories').lastChild.textContent = infoFilm.dataset.categories;
        xpoMiniInfo.querySelector('.xpo-mini-info__actors').lastChild.textContent = infoFilm.dataset.actors;
    }
}
// box mini info film: show/hiden when mouse hover, bla bla,....
const xpoItems = document.querySelectorAll('.xpo-item, .xpo-slide-full__item');
const xpoMiniInfo = document.querySelector('.xpo-mini-info');
xpoMiniInfo.onmouseover = function () {
    xpoMiniInfo.style.display = 'block';
    xpoMiniInfo.onmousemove = function (event) {
        xpoMiniInfo.style.left = (-50 + event.pageX) + 'px';
        xpoMiniInfo.style.top = (20 + event.pageY) + 'px';
    };
}
xpoItems.forEach(function (xpoItem) {
    // get info of film
    const infoFilm = xpoItem.querySelector('.xpo-mini-info__data');
    
    // handle hiden/show when mouseover/mouseout
    xpoItem.onmouseover = function () {
        fillDataToXpoMiniInfo(xpoMiniInfo, infoFilm)
        xpoMiniInfo.style.display = 'block';
        xpoItem.onmousemove = function (event) {
            xpoMiniInfo.style.left = (-50 + event.pageX) + 'px';
            xpoMiniInfo.style.top = (30 + event.pageY) + 'px';
        };
    }
    xpoItem.onmouseleave = function () {
        xpoMiniInfo.style.display = 'none';
    }
});
