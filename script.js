var images = [
    '/Images/Background---Black-Ice.jpg',
    '/Images/Background---Colour-Storm.jpg',
    '/Images/Background---Electric-Water.jpg',
    '/Images/Background---Lime-Drops.jpg',
    '/Images/Background---Natural-Bubbles.jpg',
    '/Images/Background---Nice-Try.jpg',
    '/Images/Background---Peach-Hexagon.jpg',
    '/Images/Background---Room-303.jpg'
];

function getRandomImage(images) {
    "use strict";
    var num = Math.floor(Math.random() * images.length),
        pic = images[num],
    
        imgElement = document.getElementById('picture');
    
    imgElement.innerHTML += '<img src="' + pic + '" width="100%" height="100%" />';
}

getRandomImage(images);