var ProgressBars = [];
var isAnimating = false;

//REFACTOR ALL THIS CRAP! :D
function animate() {
    var props = {};
    props.width = '200px';
    var bar = ProgressBars.shift();
    if (isAnimating) {
        var interval = setInterval(function () {
            if (!isAnimating) {
                isAnimating = true;
                bar.animate(props, 5000, function () {
                    isAnimating = false;
                    clearInterval(interval);
                });
            }
        }, 100);
    } else {
        isAnimating = true;
        bar.animate(props, 5000, function () {
            isAnimating = false;
        });
    }
}

function addProgressBar() {
    var el = document.getElementsByClassName('progress');
    ProgressBars.push(el);
    animate();
}

function test() {
    console.log('test');
}
