
//INITIATE POPUP

//Get the PopUp
const popUp = document.querySelector('.interstitial');
//Get the Close Button
const closeButton = document.querySelector('.close');


//close the popup 
closeButton.addEventListener('click', function() {
    console.log('click');
    function closeAd(e) {
        e.classList.remove('active');
    }
    closeAd(popUp);
})

//Allow the popUp ad to appear after 2 secs on page load
setTimeout(function () {
    function displayAd(e) {
        e.classList.toggle('active');
    }
    displayAd(popUp);
}, 2000)





//INITIATE CAROUSEL ITEMS

//get all of the photos to be in the carousel
const patioItem = document.querySelector('.patioItems').children;
const allPatioItems = patioItem.length;
//get the buttons that control the carousel
const prevItem = document.querySelector('.slideLeft');
const nextItem = document.querySelector('.slideRight');
let index = 0;

//add functionality to the arrow buttons using .next()
nextItem.addEventListener('click', function () {
    next("next");
})
prevItem.addEventListener('click', function () {
    next("prev");
})

//use an if statement in order to go forward and backwards through carousel photos based on index
function next(direction) {

    if (direction === "next") {
        index++;
        if (index === allPatioItems) {
            index = 0;
        }
    } else {
        if (index === 0) {
            index = allPatioItems - 1;
        } else {
            index--;
        }
    }

    //use a for loop to add and subtract the active state (styles.css)
    for (i = 0; i < patioItem.length; i++) {
        patioItem[i].classList.remove("activeCarousel");
    }
    patioItem[index].classList.add("activeCarousel");
}


