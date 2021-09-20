
  $(".page-scroll").click(function(){
    
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('html, body').animate({
      scrollTop: elemenTujuan.offset().top - 50
    }, 1000);

    e.preventDefault();

  });

  $(window).on('scroll', function(){
    if($(window).scrollTop()){
      $('.navbar').addClass('navbar-scrolled');
    } else {
      $('.navbar').removeClass('navbar-scrolled');
    }
  })

  $(window).on('scroll', function(){
    if($(window).scrollTop()>200){
      $('.scroll-to-top').removeClass('hide');
    } else {
      $('.scroll-to-top').addClass('hide');
      
    }
  })

  var swiper = new Swiper('.swiper.container',{
    effect: 'flip',
    grabCursor:true,
    pagination:{
      el:'.swiper-pagination'
    },
    navigation:{
      nextE1: '.swipper-button-next',
      prevE1: '.swipper-button-prev',
    },
  });

 var navbar = document.querySelector("#navbarNav").querySelectorAll("a");
 navbar.forEach(element => {
   element.addEventListener("click", function(){
     navbar.forEach(nav=>nav.classList.remove("active"))
     this.classList.add("active")
   })
 })
 