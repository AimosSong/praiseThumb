import css from '../css/index.css'

// var _ = (function(){
//     var _ = function(){};
//     _.throttle = function(fn,wait){
//         var timer;
//         return function(...args){
//             if(!timer){
//                 timer = setTimeout(()=>timer = null,wait);
//                 return fn.apply(this,args);
//             }
                
//         }
//     };
//     return _;
// })();
class PraiseButton{
    constructor(){
       
    }
    clickAddNum(){
        // var self = this;
        // self.ele.click(_.throttle(function(e){
            // if(self.num<10){
            //     self.ele.css("-webkit-filter","grayscale(0)")
            //     $('#animation').addClass('num');
            //     self.num = add(self.num);
            //     setTimeout(()=>{
            //         $('#animation').removeClass('num');
            //     },1000)
                axios.get('/index/update')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            // }else{
            //     self.ele.css("-webkit-filter","grayscale(1)")
            //     self.num = 0;
            // }
            // console.log(self.num);
        // },1000));
    }

}

// class Thumb extends PraiseButton{
//     constructor(num,ele){
//         super(num,ele);
//     }
// }

export default PraiseButton;

