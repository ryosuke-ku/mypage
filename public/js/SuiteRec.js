'use strict';

{
    const images = [
        "img/presentation_kurachi/スライド1.JPG",
        "img/presentation_kurachi/スライド2.JPG",
        "img/presentation_kurachi/スライド3.JPG",
        "img/presentation_kurachi/スライド4.JPG",
        "img/presentation_kurachi/スライド5.JPG",
        "img/presentation_kurachi/スライド6.JPG",
        "img/presentation_kurachi/スライド7.JPG",
        "img/presentation_kurachi/スライド8.JPG",
        "img/presentation_kurachi/スライド9.JPG",
        "img/presentation_kurachi/スライド10.JPG",
        "img/presentation_kurachi/スライド11.JPG",
        "img/presentation_kurachi/スライド12.JPG",
        "img/presentation_kurachi/スライド13.JPG",
        "img/presentation_kurachi/スライド14.JPG",
        "img/presentation_kurachi/スライド15.JPG",
        "img/presentation_kurachi/スライド16.JPG",
        "img/presentation_kurachi/スライド17.JPG",
        "img/presentation_kurachi/スライド18.JPG",
        "img/presentation_kurachi/スライド19.JPG",
        "img/presentation_kurachi/スライド20.JPG",
    ];
    let currentIndex = 0;

    const mainImage = document.getElementById('main');
    mainImage.src = images[currentIndex];

    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;

        const li = document.createElement('li');
        if (index === currentIndex){
            li.classList.add('current');
        }
        li.addEventListener('click', () => {
            mainImage.src = image;
            const thumbnails = document.querySelectorAll('.thumbnails > li ');
            thumbnails[currentIndex].classList.remove('current');
            currentIndex = index;
            thumbnails[currentIndex].classList.add('current');

        });
        li.appendChild(img);
        document.querySelector('.thumbnails').appendChild(li);
    });

    const next = document.getElementById('next');
    next.addEventListener('click', () => {
        let target = currentIndex + 1;
        if (target === images.length){
            target = 0;
        }
        document.querySelectorAll('.thumbnails > li')[target].click();
    });

    const prev = document.getElementById('prev');
    prev.addEventListener('click', () => {
        let target = currentIndex - 1;
        if (target < 0) {
            target = images.length - 1;
        }
        document.querySelectorAll('.thumbnails > li')[target].click();
    });

    let timeoutId;

    function playSlideshow(){
        timeoutId = setTimeout(() => {
            next.click();
            playSlideshow();
        }, 1000);
    }

    let isPlaying = false;

    const play = document.getElementById('play');
    play.addEventListener('click', () => {
        if (isPlaying === false){
            playSlideshow();
            play.textContent = 'Pause'
        } else {
            clearTimeout(timeoutId);
            play.textContent = 'Play'
        }
        isPlaying = !isPlaying;
    });
    
}

