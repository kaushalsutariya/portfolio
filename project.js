let nav_toggle = document.getElementById('nav_toggler');
let toggle_value = false;
var x = window.matchMedia("(max-width: 451px)")
var y = window.matchMedia("(max-height: 941px)");
nav_toggle.addEventListener('click',()=>{
    if(x.matches && y.matches){

        if(toggle_value == false){
            toggle_value = true;
            document.getElementById('left').style.display = 'block';
            document.getElementById('dot1').style.transform = 'rotate(50deg)';
            document.getElementById('dot1').style.position = 'relative';
            document.getElementById('dot1').style.top = '1.5vw';
            document.getElementById('dot2').style.transform = 'rotate(-50deg)';
            document.getElementById('dot3').style.display = 'none';
            document.getElementById('nav_toggler').style.height = '5vw';
            document.getElementById('nav_toggler').style.width = '25vw';
            document.getElementById('main_body').style.left = '25vw';
            document.getElementById('main_body').style.top = '-200vw';
            document.getElementById('main_body').style.width = 'calc(100% - 25vw)';
            document.getElementById('main_body').style.height = '250vw';
            document.getElementById('main_img').style.marginLeft = '12vw';
            document.getElementById('adu').style.marginLeft = '10vw';
        }else if(toggle_value == true){
            toggle_value = false;
            document.getElementById('left').style.display = 'none';
            document.getElementById('dot1').style.transform = 'rotate(0deg)';
            document.getElementById('dot1').style.top = '0vw';
            document.getElementById('dot2').style.transform = 'rotate(0deg)';
            document.getElementById('dot3').style.display = 'block';
            document.getElementById('nav_toggler').style.height = '250vw';
            document.getElementById('nav_toggler').style.width = '10vw';
            document.getElementById('main_body').style.width = 'calc(100% - 10vw)';
            document.getElementById('main_body').style.left = '10vw';
            document.getElementById('main_body').style.height = '250vw';
            document.getElementById('main_body').style.top = '-200vw';
            document.getElementById('main_img').style.marginLeft = '19vw';
            document.getElementById('adu').style.marginLeft = '15vw';
            
        }
    }
})