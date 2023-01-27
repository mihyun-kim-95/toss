//새로고침시 최상단으로 
window.onload = function(){

    setTimeout (function (){
        scrollTo(0,0);
    },100)
}


// 시작 페이지 효과
const tl1 = gsap.timeline({
    defaults:{
        delay:0.2,
    }
})

tl1
.addLabel('a')
.from('.logo',{yPercent: '-300', opacity: 0},'a')
.from('.nav-area > *',1,{yPercent: '-300', opacity: 0, stagger: 0.05},'a')
.to('.sc-intro .wrap', {y: 0, stagger:0.1},'a+=0.1')
.from('.sc-intro .subtitle-wrap', {opacity: 0},'a+=0.2')
.from('.sc-intro .link-apply', {opacity: 0},'a')
.from('.sc-intro .btn-down', {opacity: 0},'a')




// 화면 올리기 효과
gsap.to('.sc-intro .common-inner > *', ({
    scrollTrigger:{
        trigger:'.sc-intro',
        start:"0% 0%",
        end:"100% 0",
        scrub:0,
    },
    yPercent: -30,
}))


//메뉴 여닫기 효과
$('.btn-open').click(function(){
    $('.mobile-inner').addClass('open')
})

$('.btn-close').click(function(){
    $('.mobile-inner').removeClass('open')
})


//줄 나타나기 효과
$('[data-fade]').each(function(i,el){
    // console.log(i);
    // //i 는 갯수가 나옴
    // //el은 각각의 아이템들이 나옴 

    gsap.from(el, ({
        scrollTrigger:{
            trigger:el,
            start:"10% 80%",
            end:"100% 0%",
        },
        yPercent: 10,
        opacity:0,
    }))
})


//홈소비 영역 이미지 효과
gsap.from('.account-area',({
    scrollTrigger:{
        trigger: '.sc-management',
        start: "0% 40%",
        end: "30% 20%",
        scrub:3,
    },
    opacity: 0,
    yPercent: 30,
}))

gsap.from('.expenses-area',({
    scrollTrigger:{
        trigger: '.sc-management',
        start: "40% 70%",
        end: "60% 0%",
        scrub:0,
    },
    opacity: 0,
    yPercent: 30,
}))


//투자 영역
gsap.set('.sc-invest .app-box .img2',({opacity:0}))
gsap.set('.sc-invest .app-box .img3',({opacity:0}))
gsap.set('.sc-invest .app-box .img4',({opacity:0}))


const imgtl = gsap.timeline({
    scrollTrigger:{
        trigger: ".sc-invest",
        start: "10% 10%",
        end: "50% 65%",
        scrub: 5,
    }
})

imgtl
.to('.sc-invest .wrap',{y:0, stagger:0.5})
.to('.sc-invest .img2', {opacity:1, delay:0.3})
.to('.sc-invest .img3', {opacity:1})
.to('.sc-invest .img4', {opacity:1})


//신용 영역 효과
$('[data-fadex]').each(function(i,el){

    gsap.from(el, ({
        scrollTrigger:{
            trigger:el,
            start:"30% 80%",
            end:"30% 80%",
            stagger: 0.5,
        },
        xPercent: 50,
        opacity:0,
    }))
})

// // sc-invite 타이틀 효과
gsap.to('.sc-invite .wrap', ({

    scrollTrigger:{
        trigger: '.sc-invite',
        start: "0% 50%",
        end: "40% 60%",
        scrub:3,
    },
    y: 0,
    stagger:0.1,
}))


gsap.from('.sc-invite .text-area', ({
    scrollTrigger:{
        trigger: '.sc-invite',
        start: "10% 0%",
        end: "40% 60%",
        scrub:3,
    },
    opacity:0
}))


//헤더 효과
$('[data-theme="black"]').each(function(i,el){
    gsap.to(el, ({
        scrollTrigger:{
            trigger:el,
            start:"0% 0%",
            end:"100% 0%",
            toggleClass: {targets: ".header", className: "active"},
        },    
    }))
})



