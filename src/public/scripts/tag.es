import PraiseButton from "./index.es"
let f = new PraiseButton();
xtag.register('x-praise', {
  content: '<div class="wrap" id="thumb">'+
            '<span class="thumb"></span>' +
            '<div class="finger"></div>' +
            '<div class="finger"></div>' +
            '<div class="finger"></div>' +
            '<div class="finger"></div>' +
            '<div class="hide" id="animation">+1</div>' +
           '</div>',
 
  methods: {
    praise: function(){
      let _this = this;
      f.clickAddNum();
      let animation = _this.querySelector("#animation");
      animation.className = "hide num";
      setTimeout(function(){
        animation.className = "hide";
      },800)
    },
    throttle: function(fn,wait){
      var timer;
      return function(...args){
          if(!timer){
            timer = setTimeout(()=> timer = null, wait);
          }
      }
    }
  },
  events: {
    click: function(e){
      let _this = this;
      if(e.target.id == "thumb"){
        let t = '';
        if(t){
          clearTimeout(t);
        }
        t = setTimeout(()=>{
          this.praise()
        },500);
      }
    }
  }
});