var images = [
    'https://agskryp.github.io/Random-Image-JavaScript/Images/Background---Black-Ice.jpg',
    'https://agskryp.github.io/Random-Image-JavaScript/Images/Background---Colour-Storm.jpg',
    'https://agskryp.github.io/Random-Image-JavaScript/Images/Background---Electric-Water.jpg',
    'https://agskryp.github.io/Random-Image-JavaScript/Images/Background---Lime-Drops.jpg',
    'https://agskryp.github.io/Random-Image-JavaScript/Images/Background---Natural-Bubbles.jpg',
    'https://agskryp.github.io/Random-Image-JavaScript/Images/Background---Nice-Try.jpg',
    'https://agskryp.github.io/Random-Image-JavaScript/Images/Background---Peach-Hexagon.jpg',
    'https://agskryp.github.io/Random-Image-JavaScript/Images/Background---Room-303.jpg'
];

function getRandomImage(images) {
    "use strict";
    var num = Math.floor(Math.random() * images.length),
        pic = images[num],
    
        imgElement = document.getElementById('picture');
    
    imgElement.innerHTML = '<img src="' + pic + '" width="100%" height="100%" />';
}

getRandomImage(images);