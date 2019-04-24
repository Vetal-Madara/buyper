  function bodymovinAnimation() {
    var scrollTop = $(document).scrollTop(),
        windowHeight = $(window).height(),
        indexList = [];

    animations.each(function (index) {
        var o = $(this);
        if (o) {
            var top = o.position().top;
            if (scrollTop < top && scrollTop + windowHeight > top + (o.height() * 0.7)) {
              let anim = bodymovin.loadAnimation({
                container: document.getElementById('c1'),
                rederer: 'svg',
                loop: false,
                autoplay: true,
                path: 'script/canvas/data.json'
                });
                indexList.push(index);
            }
        }
    })

    for (var i = indexList.length - 1; i >= 0; i--)
        animations.splice(indexList[i], 1);
}
$(document).ready(function () {
    // run
    animations = $('.animation');

    $(document).bind('scroll', bodymovinAnimation);
    bodymovinAnimation();
});