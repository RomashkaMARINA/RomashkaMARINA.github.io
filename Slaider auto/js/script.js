console.log('hello');
/*let elem = document.getElementById("viewport");*/

let viewport = document.getElementById("viewport").offsetWidth;

let viewslide=0;
let slider = document.querySelector(".slider");
console.log(slider);


let viewslider = document.querySelectorAll(".viewslide");
console.log(viewslider);

function press(btn){
    if (btn=='prev'){
        viewslider[viewslide].style.backgroundColor = "darkcyan";
        if (viewslide > 0) {
            viewslide--;
        } else {
            viewslide = 4;
        }
       slider.style.left = -viewport * viewslide + "px";
       viewslider[viewslide].style.backgroundColor = "red"; 
       console.log(viewslider[viewslide]);

    }

    if (btn=='next'){
        /*viewslider[viewslide].style.backgroundColor = "darkcyan";*/
        if (viewslide < 4) {
            viewslide++;
        } else {
            viewslide = 0;
        }
       slider.style.left = -viewport * viewslide + "px";
       /*viewslider[viewslide].style.backgroundColor = "red"; 
       console.log(viewslider[viewslide]);*/
    }


}

window.onload= function(){      //автоматическое пролистывание через 10 сек
    setInterval(function(){
    press('prev');
},10000);
} 