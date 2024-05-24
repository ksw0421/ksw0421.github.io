$(window).scroll(function(){
    let scrTop = $(this).scrollTop(); 
    if(scrTop==0){
        $('#header').removeClass();
    }else if(scrTop>0 && scrTop<300){
        $('#header').removeClass('show');
        $('#header').addClass('hide');
    }else{
        $('#header').removeClass('hide');
        $('#header').addClass('show');
    }
})
var swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
new fullpage('#fullpage', {
  //options here
  autoScrolling:true,
  scrollHorizontally: true,
  anchors: ['home', 'about', 'skills', 'portfolio', 'contact'],
  // afterLoad: function(origin, destination, direction, trigger){
    
    // destination;
    //색인 사용
    // if(origin.index == 2){
    //   alert("Section 3 ended loading");
    // }

    //앵커링크 사용
    // if(origin.anchor == 'secondSlide'){
    //   alert("Section 2 ended loading");
    // }
  // }
});