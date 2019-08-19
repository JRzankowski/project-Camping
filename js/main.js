var stats = document.querySelector('section.stats .stats-item');
let activate = true;
var map;
let isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

let counter = () => {


    let firstRanges = [12, 120]
    let secondRanges = [1280, 1560]
    const slowerCount = [...document.querySelectorAll(".stats .stats-container .firstCount")]
    const fasterCount = [...document.querySelectorAll(".stats .stats-container .secondCount")]

    let firstActiveNumber = 0;
    let secondActiveNumber = 0;

    let firstCountUp = () => {

        for (let i = 0; i <= 1; i++) {
            setInterval(() => {
                if (slowerCount[i].textContent < firstRanges[i]) {
                    firstActiveNumber++
                    slowerCount[i].textContent = firstActiveNumber
                } else if (slowerCount[i].textContent = firstRanges[i]) {
                    return

                }
            }, 35);

        }
    }
    let secondCountUp = () => {

        for (let i = 0; i <= 1; i++) {
            setInterval(() => {
                if (fasterCount[i].textContent < secondRanges[i]) {
                    secondActiveNumber++
                    fasterCount[i].textContent = secondActiveNumber
                } else if (fasterCount[i].textContent = secondRanges[i]) {
                    return
                }
            }, 1);
        }
    }

    if (isInViewport(stats) && (activate)) {
        firstCountUp()
        secondCountUp()
        activate = !activate
    }


}

function createMap() {
    var options = {
        center: {
            lat: 43.654,
            lng: -79.383
        },
        zoom: 10,
        mapTypeID: google.maps.MapTypeId.HYBRID
    };
    map = new google.maps.Map(document.getElementById('map'), options);

}







window.addEventListener('scroll', counter)
window.addEventListener('load', function () {
    new Glider(document.querySelector('.glider'), {
        // Mobile-first defaults
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: true,
        draggable: true,

        responsive: [{

            breakpoint: 700,
            settings: {

                slidesToShow: '2',
                slidesToScroll: '2'

            }
        }, {

            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                duration: 3,
                dragVelocity: .9
            }
        }]
    });
})