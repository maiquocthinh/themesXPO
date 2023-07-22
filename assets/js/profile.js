// NOTYF
const notyf = new Notyf({
    duration: 6000,
    position: { x: "right", y: "top" },
    dismissible: true,
    ripple: true,
})

function copyProfileLink() {
    const textarea = document.querySelector("#link-profile")
    if (textarea) {
        textarea.focus()
        textarea.select()
        document.execCommand("copy")

        notyf.success("Đã sao chép liên kết tài khoản!")
    }
}

// switch tab profile
const profileTabs = document.querySelectorAll(".xpo-profile__tabs-item")
const profileContent = document.querySelectorAll(".xpo-profile__tabs-content__item")
if (profileTabs && profileContent) {
    let activeTab = document.querySelector(".xpo-profile__tabs-item.active")
    let activeContent = document.querySelector(".xpo-profile__tabs-content__item.active")

    profileTabs.forEach(function (profileTab, idx) {
        profileTab.onclick = function () {
            // change tab
            activeTab.classList.remove("active")
            profileTab.classList.add("active")
            activeTab = profileTab

            // change content
            activeContent.classList.remove("active")
            profileContent[idx].classList.add("active")
            activeContent = profileContent[idx]

            // save tab index
            saveTabProfile(idx)
        }
    })

    function saveTabProfile(index) {
        localStorage.setItem("tabProfile", JSON.stringify({ index }))
    }

    function getTabProfile() {
        const tabProfile = localStorage.getItem("tabProfile")
        if (tabProfile) return JSON.parse(tabProfile).index
        return -1
    }

    // auto load profile tab
    ;(function loadProfileTab() {
        const tabIndex = getTabProfile()
        if (tabIndex !== -1) {
            // change tab
            activeTab.classList.remove("active")
            profileTabs[tabIndex].classList.add("active")
            activeTab = profileTabs[tabIndex]

            // change content
            activeContent.classList.remove("active")
            profileContent[tabIndex].classList.add("active")
            activeContent = profileContent[tabIndex]
        }
    })()
}

// handle update info
const btnSaveInfo = document.querySelector(".xpo-profile__tabs-content__item--form > form >button[type='submit']")
if (btnSaveInfo) {
    const form = document.querySelector(".xpo-profile__tabs-content__item--form > form")
    btnSaveInfo.onclick = function (e) {
        e.preventDefault()

        const fullname = form.querySelector("input[name='fullname']").value
        const password = form.querySelector("input[name='password']").value
        const email = form.querySelector("input[name='email']").value
        const profileSefl = form.querySelector("textarea[name='profile_sefl']").value

        console.log({ fullname, password, profileSefl })

        // validate data
        if (fullname.length < 3 || fullname.length > 32) {
            notyf.error("Họ và tên phải từ 3 đến 32 kí tự!")
            return
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            notyf.error("Email không đúng rùii!")
            return
        }

        if (password.length > 0) {
            if (password.length < 6 || password.length > 32) {
                notyf.error("Password phải từ 6 đến 32 kí tự!")
                return
            }
        }

        if (profileSefl.length > 255) {
            notyf.error("Giới thiệu bản thân tối đa 255 kí tự thoii")
            return
        }

        // call api update here...
        notyf.success("Cập nhât thành công")
    }
}

// handle remove ep watched
function removeEpWatched(event) {
    // call api to remove, if success remove element from dom
    event.target.parentElement.remove()
    notyf.success("Xóa lịch sử xem thành công!")
}

// handle remove film follow & film bookmark
function removeFilmElement(event) {
    event.preventDefault()
    event.target.closest(".item.col").remove()
    notyf.success("Xóa thành công!")
}

// handle search film follow & film bookmark
const colectionSearchInpput = document.getElementById("colection_search")
const followSearchInpput = document.getElementById("follow_search")

if (colectionSearchInpput && followSearchInpput) {
    const colectionBox = document.getElementById("colection_box")
    const followBox = document.getElementById("follow_box")

    colectionSearchInpput.onkeyup = function (event) {
        const keyword = event.target.value.toLowerCase()

        debounce(function () {
            Array.apply(null, colectionBox.children).forEach(function (item) {
                item.style.display = "block"

                if (keyword === "" || keyword.length < 2) return

                const name = item.querySelector(".xpo-vn-name a").innerText.toLowerCase()
                const originName = item.querySelector(".xpo-original-name").innerText.toLowerCase()

                if (!name.includes(keyword) && !originName.includes(keyword)) item.style.display = "none"
            })
        })()
    }

    followSearchInpput.onkeyup = function (event) {
        const keyword = event.target.value.toLowerCase()

        debounce(function () {
            Array.apply(null, followBox.children).forEach(function (item) {
                item.style.display = "block"

                if (keyword === "" || keyword.length < 2) return

                const name = item.querySelector(".xpo-vn-name a").innerText.toLowerCase()
                const originName = item.querySelector(".xpo-original-name").innerText.toLowerCase()

                if (!name.includes(keyword) && !originName.includes(keyword)) item.style.display = "none"
            })
        })()
    }
}
