// Select Landing Page Elements 
// let landingPage = document.querySelector('.landing-page');

// // Get Array of Images 
// let arrayImages = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];



// setInterval(() => {
//     // Get Random Number
//     let randomNumber = Math.floor(Math.random() * arrayImages.length);

//     // Change Background Image Url
//     landingPage.style.backgroundImage = 'url("images/' + arrayImages[randomNumber] + '")';

// }, 3000);

// ----------------------------------------------------------------------------------------------------------- // 

// Toogle Spin Class On Icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {

    this.classList.toggle("fa-spin");

    document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach(li => {

    li.addEventListener("click", (e) => {

        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        localStorage.setItem("color_option", e.target.dataset.color);

        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active");

            e.target.classList.add("active");
        });
    });
});

// Store Colors On Local Storage
let mainColors = localStorage.getItem("color_option");

if (mainColors != null) 
{
    document.documentElement.style.setProperty('--main-color', mainColors);

    document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove("active");

        if (element.dataset.color === mainColors)
        {
            element.classList.add("active");
        }
    });
}

// Skills 

let ourSkills = document.querySelector(".skills");

window.onscroll = function () 
{
    let skillsOffsetTop = ourSkills.offsetTop;

    let skillsOuterHeight = ourSkills.offsetHeight;

    let windowHeight = this.innerHeight;

    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight))
    {
        let allSkills = document.querySelectorAll(".skills-box .skill-progress span");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;
        });
    }
};

// Nav Bullets 
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

allBullets.forEach(bullet => {


    bullet.addEventListener("click", (e) => {

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'
        });
    });
});

// Nav Links 
const allLinks = document.querySelectorAll(".links a");

allLinks.forEach(link => {


    link.addEventListener("click", (e) => {

        e.preventDefault();

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'
        });
    });
});

// more...
const more = document.querySelector(".about-me button a");


    more.addEventListener("click", (e) => {

        e.preventDefault();

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'
        });
    });

// Show, Hide Bullets 
let spanBullets = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem != null) 
{

}

spanBullets.forEach(span => {

    span.addEventListener("click", (e) => {

        if (span.dataset.display === 'show') 
        {
            bulletsContainer.style.display = 'block';

            localStorage.setItem("bullets_option", "block");

        } else 
        {
            bulletsContainer.style.display = 'none';

            localStorage.setItem("bullets_option", "none");

        }

    });

    $(".scroll-to-top a").click(function (e)
    {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 800);
    });

});
