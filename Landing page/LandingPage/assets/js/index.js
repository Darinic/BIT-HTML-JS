// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 270 || document.documentElement.scrollTop > 270) {
//         document.getElementById("nav").style.backgroundColor = "#262626";
//         document.getElementById("nav").style.height = "60px";
//         document.getElementById("nav").style.paddingBottom= "10px";
//     }
//     else {
//         document.getElementById("nav").style.height = "80px"; 
//         document.getElementById("nav").style.backgroundColor = "rgba(30, 30, 30, 0.45)";
//     }
// }
window.addEventListener('scroll', () => {
    const offset = 260
    //const navbar = document.getElementById('navbar')
    if(window.scrollY >= offset)
        document.getElementById('navbar').classList.add('scrolled')
        //navbar.classList.add('scrolled')
    else
        document.getElementById('navbar').classList.remove('scrolled')
        ////navbar.classList.remove('scrolled')
    // console.log(window.scrollY)
})
//Jeigu if'e, turi buti paleidziama daugiau kodo nei viena eilute, tuomet riestinius skliaustus naudoti yra privaloma
// if() {
//     console.log('kazkoks tekstas')
//     console.log('kazkoks tekstas')
// }else {
//     console.log('kazkoks tekstas')
//     console.log('kazkoks tekstas')
// }}