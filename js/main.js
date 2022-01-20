//On laod
window.onload = () => {
    // pos declared global below in banners js section
    banners[pos].classList.toggle('slide-active');
    //initialie animation in #auto-slider section 
    fstslide.classList.add('display-slide');
    //set timer for the animation when page is loaded(for #auto-slider section)
    setInterval(function(){
        fstslide.classList.toggle('display-slide');
        sndslide.classList.toggle('display-slide');
    },7000);
};


//header Begin
//hide and show sub-menu services and sub-menu sectors-Begin
var srvLink = document.querySelector('.srv-link'),
    sctLink = document.querySelector('.sct-link'),
    srvMenu = document.querySelector('.services-menu'),
    sctMenu = document.querySelector('.sectors-menu');
var srvActive = false,
    sctActive = false;
srvLink.onclick = () => {
    if(window.innerWidth <= 992)
    {//under 992px
        if(sctActive){
            sctMenu.classList.remove('active-menu');
            sctMenu.classList.remove('responsive-active-menu');
            sctActive = false;
        }
        srvMenu.classList.toggle('active-menu');
        srvMenu.classList.toggle('responsive-active-menu');
        srvActive = true;
        return;
    }
    if(sctActive){
        sctMenu.classList.remove('active-menu');
        sctActive = false;
    }
    srvMenu.classList.toggle('active-menu');
    srvActive = true;
};
sctLink.onclick = () => {
    if(window.innerWidth <= 992)
    {//under 992px
        if(srvActive){
            srvMenu.classList.remove('active-menu');
            srvMenu.classList.remove('responsive-active-menu');
            srvActive = false;
        }
        sctMenu.classList.toggle('active-menu');
        sctMenu.classList.toggle('responsive-active-menu');
        sctActive = true;
        return;
    }
    if(srvActive){
        srvMenu.classList.remove('active-menu');
        srvActive = false;
    }
    sctMenu.classList.toggle('active-menu');
    sctActive = true;
};
//hide and show sub-menu services and sub-menu sectors-End
//===========================================================
//burger icon & exit icon click event(show & hide the right side menu)-Begin
var burger_icon = document.querySelector('.burger-icon'),
    menu = document.querySelector('.Menu'),
    exit_icon = document.querySelector('.exit');

burger_icon.onclick = () => {
    menu.classList.toggle('right-menu');
};
exit_icon.onclick = () => {
    menu.classList.toggle('right-menu');
};
//burger icon & exit icon click event(show & hide the right side menu)-End
//header End
//===========================================================
//slide banners Begin
var slide1 = document.querySelector('.slide1'),
    slide2 = document.querySelector('.slide2'),
    slide3 = document.querySelector('.slide3'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    pos = 0;
var banners = [slide1, slide2, slide3];
prev.onclick = () => {
    if(pos === 0){
        banners[pos].classList.toggle('slide-active');
        pos = banners.length -1
        banners[pos].classList.toggle('slide-active');
        return;
    }
    pos--;
    banners[pos+1].classList.toggle('slide-active');
    banners[pos].classList.toggle('slide-active');
};
next.onclick = () => {
    if(pos === banners.length -1){
        banners[pos].classList.toggle('slide-active');
        pos = 0;
        banners[pos].classList.toggle('slide-active');
        return;
    }
    pos++;
    banners[pos-1].classList.toggle('slide-active');
    banners[pos].classList.toggle('slide-active');
};
//Slide banners End
//===========================================================
//About Section Begin
var arrow = document.querySelectorAll('.fa-chevron-down');
    // display drop-content using jquery
    //first drop-content
$('.sl1 .fa-chevron-down').on('click', function(){
    arrow[0].classList.toggle('arrow-down');
    $('.insights-content').slideToggle(200);
    $('.listen-content').hide(200);//hide in 200ms duration
    $('.build-content').hide(200);
    arrow[1].classList.remove('arrow-down');
    arrow[2].classList.remove('arrow-down');
});
    //second drop-content
$('.sl2 .fa-chevron-down').on('click', function(){
    arrow[1].classList.toggle('arrow-down');
    $('.listen-content').slideToggle(200)
    $('.insights-content').hide(200);
    $('.build-content').hide(200);
    arrow[0].classList.remove('arrow-down');
    arrow[2].classList.remove('arrow-down');
});
    //third drop-content
$('.sl3 .fa-chevron-down').on('click', function(){
    arrow[2].classList.toggle('arrow-down');
    $('.build-content').slideToggle(200)
    $('.insights-content').hide(200);
    $('.listen-content').hide(200);
    arrow[0].classList.remove('arrow-down');
    arrow[1].classList.remove('arrow-down');
});
//About Section End
//===========================================================
//Experts Section Begin
var radios = document.querySelectorAll('.slide-radio'),
    first_slide = document.querySelector('.first-slide'),
    previous = document.querySelector('.prev-experts'),
    next = document.querySelector('.next-experts'),
    mrgLeft = 0;
    //dots slide begin
radios[0].onclick =() => {
    first_slide.style.marginLeft = '0';
    mrgLeft = 0;
};
radios[1].onclick =() => {
    first_slide.style.marginLeft = '-25%';
    mrgLeft = -25;
};
radios[2].onclick =() => {
    first_slide.style.marginLeft = '-50%';
    mrgLeft = -50;
};
    //dots slide end
    // arrows slide begin
previous.onclick = () => {
    if(mrgLeft === 0){
        mrgLeft = -50;
        first_slide.style.marginLeft = mrgLeft+"%";
        return;
    }
    mrgLeft += 25;
    first_slide.style.marginLeft = mrgLeft+"%";
};
next.onclick = () => {
    if(mrgLeft === -50){
        mrgLeft = 0;
        first_slide.style.marginLeft = mrgLeft+"%";
        return;
    }
    mrgLeft -= 25;
    first_slide.style.marginLeft = mrgLeft+"%";
};
    // arrows slide end
//Experts Section End
//===========================================================
// Auto Slide Section Begin
var fstslide = document.querySelector('.auto-slider-content .first-slide'),
    sndslide = document.querySelector('.auto-slider-content .second-slide'),
    butt1 = document.querySelector('.auto-slider-control .circ1'),
    butt2 = document.querySelector('.auto-slider-control .circ2');
    // auto slide begin
        //see the setInterval timer code in on-load above 
    // auto slide end
    // circles slide begin
butt1.onclick = () => {
    sndslide.classList.remove('display-slide');
    fstslide.classList.add('display-slide');
};
butt2.onclick = () => {
    fstslide.classList.remove('display-slide');
    sndslide.classList.add('display-slide');
};
    // circles slide end
// Auto Slide Section End

