
//Start next image Banner
let banner = document.getElementById('banner');
let bannerImages = ["./images/nature1.jpg", "./images/nature2.jpg", "./images/nature3.jpg", "./images/Path.jpg"]
let bannerCount = 0;
    const nextBanner = (event) => {
            event.target.style.backgroundImage = "url('" + bannerImages[bannerCount] +"')"
            bannerCount++
            if(bannerCount > bannerImages.length-1){
                bannerCount = 0;
            };
        }
banner.addEventListener('click', nextBanner);
// banner.addEventListener('onload', setInterval(function() {
//     banner.nextBanner();
// }, 4000) );

//End next image Banner

// start Colorshift
let languages = document.getElementById('languages').children;  

const colorShift = (event) => {
    let hexVal = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let color = "#";
    for(let i = 1; i <= 6; i++){
        let random = Math.floor(Math.random() * (hexVal.length));
        color += `${hexVal[random]}`;
    }
    event.target.style.transitionDuration = '0.5s';
    event.target.style.color = color;
}

for(let i = 0 ; i < languages.length; i++){
    languages[i].addEventListener('click', colorShift);
}
console.log(languages);  
//end colorshift



