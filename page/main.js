// change navbar color on scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
})


// ====================show and hide faqs============================
const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open')

        //changeIcon 
        const icon = faq.querySelector('.faq_icon')
        if(icon.innerHTML==='+'){
            icon.innerHTML = '-'
        }else{
            icon.innerHTML = "+"
        }
    })
})

//==================show hide nav menu in responsive=================

const menu = document.querySelector(".nav__menu")
const openBtn = document.querySelector("#open-menu-btn")
const closeBtn = document.querySelector("#close-menu-btn")

openBtn.addEventListener('click',()=>{
    menu.style.display = 'flex'
    closeBtn.style.display = "inline-block"
    openBtn.style.display = "none"
})

closeBtn.addEventListener('click',()=>{
    menu.style.display = 'none'
    closeBtn.style.display = "none"
    openBtn.style.display = "inline-block"
})


//==================================== FLOATION ACTION BTN ====================================
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}