let crsr = document.querySelector(".cursor");
let main = document.querySelector(".main")
.addEventListener('mousemove',(details)=>{

    crsr.style.left = details.x + 'px';
    crsr.style.top = details.y + 'px';
    // gsap.to(crsr,{
    //     left:details.clientX + 'px',
    //     top:details.clientY + 'px',
    //     ease:Power2
    // });
});