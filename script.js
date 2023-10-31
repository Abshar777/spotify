var navCo=document.querySelector(".container");
var you=document.querySelectorAll(".you1");
var you1=document.querySelectorAll(".you2");
var you2=document.querySelectorAll(".you3");
var you3=document.querySelectorAll(".you4");
var you4=document.querySelectorAll(".you5");
var you5=document.querySelectorAll(".you6");
var navv=document.querySelector(".nav");

gsap.to(".container",{
   zIndex:1000,
   backgroundColor:"#121212",
//    duration:10,
   scrollTrigger:{
     trigger:".container",
     scroller:".main",
    //  markers:true,
     start:"top -1%",
     end:"top -2%",
     scrub:.5,
   }
})
you.forEach((you)=>{
    you.addEventListener("mouseenter",()=>{
        gsap.to(navv,{
           opacity:0.3,
            backgroundImage:"linear-gradient(180deg ,gray,transparent)",
        })
        

      });
      you.addEventListener("mouseleave",()=>{
        gsap.to(navv,{
            opacity:0.3,
      backgroundImage:"linear-gradient(180deg ,rgba(4, 104, 255, 0.178),transparent",}
        
        )
      })
})
you1.forEach((you1)=>{
    you1.addEventListener("mouseenter",()=>{
        gsap.to(navv,{
           opacity:0.3,
            backgroundImage:"linear-gradient(180deg ,red,transparent)",
        })
        

      });
      you1.addEventListener("mouseleave",()=>{
        gsap.to(navv,{
            opacity:0.3,
      backgroundImage:"linear-gradient(180deg ,rgba(4, 104, 255, 0.178),transparent",}
        
        )
      })
})
you2.forEach((you2)=>{
    you2.addEventListener("mouseenter",()=>{
        gsap.to(navv,{
           opacity:0.3,
            backgroundImage:"linear-gradient(180deg ,violet,transparent)",
        })
        

      });
      you2.addEventListener("mouseleave",()=>{
        gsap.to(navv,{
            opacity:0.3,
      backgroundImage:"linear-gradient(180deg ,rgba(4, 104, 255, 0.178),transparent",}
        
        )
      })
})
you3.forEach((you3)=>{
    you3.addEventListener("mouseenter",()=>{
        gsap.to(navv,{
           opacity:0.3,
            backgroundImage:"linear-gradient(180deg ,green,transparent)",
        })
        

      });
      you3.addEventListener("mouseleave",()=>{
        gsap.to(navv,{
            opacity:0.3,
      backgroundImage:"linear-gradient(180deg ,rgba(4, 104, 255, 0.178),transparent",}
        
        )
      })
})
you4.forEach((you4)=>{
    you4.addEventListener("mouseenter",()=>{
        gsap.to(navv,{
           opacity:0.3,
            backgroundImage:"linear-gradient(180deg ,brown,transparent)",
        })
        

      });
      you4.addEventListener("mouseleave",()=>{
        gsap.to(navv,{
            opacity:0.3,
      backgroundImage:"linear-gradient(180deg ,rgba(4, 104, 255, 0.178),transparent",}
        
        )
      })
})
you5.forEach((you5)=>{
    you5.addEventListener("mouseenter",()=>{
        gsap.to(navv,{
           opacity:0.3,
            backgroundImage:"linear-gradient(180deg ,yellow,transparent)",
        })
        

      });
      you5.addEventListener("mouseleave",()=>{
        gsap.to(navv,{
            opacity:0.3,
      backgroundImage:"linear-gradient(180deg ,rgba(4, 104, 255, 0.178),transparent",}
        
        )
      })
})




