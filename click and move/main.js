$(function(){
  $('.box').on('click',function(){
    $(this).addClass('animate');
    setTimeout(function(){
      $(this).removeClass('animate');
    },1000)
  })
})
