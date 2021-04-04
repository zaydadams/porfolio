const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 2}s';
            }
        });
        burger.classList.toggle('toggle');
    });
}

const app = ()=>{
    navSlide();
}

navSlide();


const btn = document.querySelectorAll(".category button");
const product = document.querySelectorAll(".itembox");

btn.forEach(item => {
    item.addEventListener("click", function (){
        for(let i = 0; i < btn.length ; i++){
            btn[i].classList.remove("active");
        }          
        item.classList.add("active");

        product.forEach(show => {
            show.style.display = "none";
            let products=item.textContent.toLowerCase();
            if(show.getAttribute("data-att")===
            products || products ==="all"){
                show.style.display = "block";
            }
        })
    })
})

const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    loop:true
   
  });

  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    //var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

  $(document).ready(function () {
    $(window).scroll(function (){
      if (this.scrollY > 20){
        $(".navbar").addClass("sticky");
      } else{
        $(".navbar").removeClass("sticky")
      }
    });
  })