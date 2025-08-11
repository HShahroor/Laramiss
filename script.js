var navbar = document.querySelector(".navbar");
window.onscroll=function(e){
    
    if(window.scrollY>= 200){
    navbar.classList.add('navbar-scroll');
    
    } else{
        navbar.classList.remove('navbar-scroll')
    }
}
