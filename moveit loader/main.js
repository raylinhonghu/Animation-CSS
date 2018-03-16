var loader = document.querySelector('.loader');

var loadingAnimation = new Moveit(loader,{
  start:'0%',
  end:'1%'
});

function anim(){
  loadingAnimation.set({
    start:'1%',
    end: '70%',
    duration: 0.5,
    callback: function(){
      loadingAnimation.set({
        start: '100%',
        end: '101%',
        duration: 0.8,
        follow:true,
        callback: function(){
          anim()
        }
      })
    }
  })
}


anim();
