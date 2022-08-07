 // for sticky header and progress
 window.onscroll = function() {myFunction()};


  let header = document.getElementById("myHeader");
  
  
  let sticky = header.offsetTop;

  let myli= document.querySelectorAll('.colorLi')

  let dropSticky= document.querySelectorAll('.dropSticky')

  let listSticky= document.querySelectorAll('.listSticky')

  let stickymenu = document.querySelector('.menubox')

  let progress = document.querySelector('.progress-container')

  let menuicon = document.querySelector('#menu')

  let backtotop = document.querySelector('#myBtn')
  
  
  function myFunction() {

   // progress
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";

    let logo=document.getElementsByClassName('logosticky');
    let logo2=document.getElementsByClassName('logosticky2');
    // end

    let inpsrch = document.getElementsByClassName('inputSrch2')

    if (window.pageYOffset > 100) {
      header.classList.add("sticky");
      stickymenu.classList.add("stickymenu1");
      $(myli).css('color','#E45826');
      $(menuicon).css('color','#E45826');
      $(dropSticky).css('padding-top','112px');
      $(listSticky).css('border','1px solid grey');
      $(progress).css('display','block');
      $(backtotop).css('display','block');
      $(inpsrch).css('top','95%');


      $(logo).css('display','block')
      $(logo2).css('display','none')
      
    } else {
      header.classList.remove("sticky");
      stickymenu.classList.remove("stickymenu1");
      $(myli).css('color','white');
      $(menuicon).css('color','white');
      $(dropSticky).css('padding-top','30px');
      $(listSticky).css('border','none');
      $(progress).css('display','none');
      $(backtotop).css('display','none');
      $(inpsrch).css('top','15%');

      $(logo).css('display','none')
      $(logo2).css('display','block')

    }
  } 
 // end sticky and progress


$('.icon1').click(function(){
  $('.inputSrch').slideDown()
  $('.iconX').show()
  $(this).hide()
});
$('.iconX').click(function(){
  $('.inputSrch2').slideUp()
  $('.icon1').show()
  $(this).hide()
});


$('.icon1Index').click(function(){
  $('.inputSrch2').slideDown()
  $('.icon2Index').show()
  $(this).hide()
});
$('.icon2Index').click(function(){
  $('.inputSrch2').slideUp()
  $('.icon1Index').show()
  $(this).hide()
});




 //hide search when click outside
$(document).mouseup(function(e){
  var container = $(".inputSrch");
  var container2 = $(".inputSrch2");

  // If the target of the click isn't the container
  if(!container.is(e.target) && container.has(e.target).length === 0){
      container.hide();
  }
  if(!container2.is(e.target) && container2.has(e.target).length === 0){
    container2.hide();
}
});
//end




//hide search when click outside in index


// for count number
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj = document.getElementById("value1");
  animateValue(obj, 0, 100, 5000);
 //


  function animateValue(obj2, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj2.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj2 = document.getElementById("value2");

  animateValue(obj2, 0, 160, 5000);
  //


  function animateValue(obj3, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj3.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj3 = document.getElementById("value3");

  animateValue(obj3, 0, 230, 5000);
  //



  function animateValue(obj4, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj4.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj4 = document.getElementById("value4");

  animateValue(obj4, 0, 89, 5000);

  //end


  $('.modalbtn').click(function(){
    $('.myModalback').fadeIn();

    setTimeout(() => {
        $('.myModalback').fadeOut();
       }, 950);
})

//start Register
const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})
//end Register


  $('.selectBox').click(function(){
    $('.selectBox').css('background-color','#F2F2F2');
    $('.selectBox').css('color','#E45826');
    $(this).css('background-color','#E45826 ');
    $(this).css('color','white');
})

$('.all').click(function(){
    $('.image3').fadeIn()
})

$('.bank').click(function(){
    $('.image3').fadeOut();
    $('.banking').fadeIn();
})

$('.business').click(function(){
    $('.image3').fadeOut();
    $('.busy').fadeIn();
})

$('.corpo').click(function(){
    $('.image3').fadeOut();
    $('.corporate').fadeIn();
})

$('.fin').click(function(){
    $('.image3').fadeOut();
    $('.banking').fadeIn();
})

$('.market').click(function(){
    $('.image3').fadeOut();
    $('.busy').fadeIn();
})


function showask(e){
   // e.children[1].classList.toggle('show')
   let test = e.children[1];

   $(test).slideToggle('slow');
   
}






var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var appendNumber = 4;
var prependNumber = 1;
document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  });
document
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  });
document
  .querySelector(".append-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  });
document
  .querySelector(".append-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  });





  //menu burger
  function menu(){
    $('.menubox').slideToggle();
  }


  function dropdown(e){
    let mydrop = e.children[1];
    let plus = e.children[0].getElementsByTagName('i')[0];
    let dash = e.children[0].getElementsByTagName('i')[1];
    $(plus).toggle();
    $(dash).toggle();
    $(mydrop).fadeToggle();
  }




  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}









