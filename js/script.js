//responsive menu
const showMenu = (toogleId, navId) =>{
    const toogle = document.getElementById(toogleId),
    nav = document.getElementById(navId)

    if(toogle && nav){
        toogle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu');
        })
    }
}

//toggle-menu
showMenu('nav-toggle','nav-menu');

const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction));

//active selection of navbar
const section = document.querySelectorAll('section[id');

function scrollActive(){
    const scrollv = window.pageXOffset;

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollv > sectionTop && scrollv <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href"='+sectionId+']').classList.add('active-link');
        }else{
            document.querySelector('.nav_menu a[href"='+sectionId+']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll',scrollActive);

// scroll-header
function scrollHeader(){
    const nav = document.getElementById('header');
    if(this.scrollv >= 200){
        nav.classList.add('scroll-header');
    } 
    else{
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll',scrollHeader);

//scroll scrolltop_icon
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollv >= 500){
        scrollTop.classList.add('scroll-top');
    } 
    else{
        scrollTop.classList.remove('scroll-top');
    }
}
window.addEventListener('scroll',scrollTop);