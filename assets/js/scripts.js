const navMenu = document.getElementsByClassName('navigation_menu');

$(function () {
    $(document).scroll(function () {
        var $nav = $(".header");
        $nav.toggleClass('scrolled', ($(this).scrollTop()) > ($nav.height()/2 + $("#about").offset().top));
      });
});

const theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

$(document).ready(function(){
    if (theme == "dark"){
        dark('mode', 'modeBtn');
    } else {
        light('mode', 'modeBtn');
    }
});

function showMenu(x, y){
    let myID = document.getElementById(x);
    let myIDbtn = document.getElementById(y);
    navMenu[0].style.top = "60px";
    myID.classList.remove("uil-apps");
    myID.classList.add("uil-times");
    myIDbtn.setAttribute("onclick", "hideMenu('navigation-toggle', 'navTog')");
}
function hideMenu(x, y){
    let myID = document.getElementById(x);
    let myIDbtn = document.getElementById(y);
    navMenu[0].style.top = "-100%";
    myID.classList.remove("uil-times");
    myID.classList.add("uil-apps");
    myIDbtn.setAttribute("onclick", "showMenu('navigation-toggle', 'navTog')");
}

function hideMenuUI(x){
    let myID = document.getElementById(x);
    navMenu[0].style.top = "-100%";
    myID.classList.remove("uil-times");
    myID.classList.add("uil-apps");
    myID.setAttribute("onclick", "showMenu(this)");  
}

function dark(x, y){
    let myID = document.getElementById(x);
    let myIDbtn = document.getElementById(y);
    myID.classList.remove("uil-moon");
    myID.classList.add("uil-sun");
    myIDbtn.setAttribute("onclick", "light('mode', 'modeBtn')");
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
}

function light(x, y){
    let myID = document.getElementById(x);
    let myIDbtn = document.getElementById(y);
    myID.classList.remove("uil-sun");
    myID.classList.add("uil-moon");
    myIDbtn.setAttribute("onclick", "dark('mode', 'modeBtn')");
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
}


$(function () {
    $(document).scroll(function () {
        var $nav = $(".header");
        $nav.toggleClass('scrolled', ($(this).scrollTop()) > ($nav.height()/2 + $("#about").offset().top));
      });
});

$(document).ready(function(){

    if($(this).scrollTop() < $("#about").offset().top){
        $(".navigation_bar").hide();
    }
  
    $(window).scroll(function () {
        if (isScrolledAfterElement('#about')) {
            $('.navigation_bar').fadeIn();
        } else {
            $('.navigation_bar').fadeOut();
        }
    });
  
    function isScrolledAfterElement(elem) {
        var $elem = $(elem);
        var $window = $(window);
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop;
        var elemTop = $elem.offset().top;
        return elemTop <= docViewBottom + 1;
    }
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').delay().animate({
            'scrollTop': $target.offset().top
        }, function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop() + 1;
    $('#nav-menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 160 <= scrollPos && refElement.position().top + refElement.height() >= scrollPos) {
            $('#nav-menu ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}