window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    let windowWidth = window.innerWidth;

    header.classList.toggle('sticky', window.scrollY>200);
    
    if (windowWidth < 992) {
    header.classList.remove('sticky');
    }
})

let boxes = document.querySelectorAll('.boxed');

if(windowWidth < 992){
    for(let i = 0 ; i > boxes.length ; i++){
        boxes[i].setAttribute('data-aos-delay', '300');
    }
}

