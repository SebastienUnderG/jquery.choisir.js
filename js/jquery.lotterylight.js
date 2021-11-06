/**
 * @plugin  jquery.lotterylight.js
 * @verison v1
 * @desc    lottery images frap display
 * @author  LongZhou
 * @adapter Sebastien_G
 * @mail    pancnlz@gmail.com
 * @mail    sebastien.gestiere@gmail.com
 * @github
 */

(function ($) {
    let settings = {
        frap: 15,           // animate frap
        result: 0,          // lottery result            
        linearTime: 2000,  // duration of linear annimation 
        slowTime: 5000,
        clap: false,
        process_img: []     // process images, first one is default status
    };

    let speed;
    let duration;
    let previously;
    let step;
    let stepLocal = 0;


    function shutterFrap(final = null) {

        if (previously != null) {
            $(previously).css("display", "none");
        } else {
            $('#img0').css("display", "none");
        }


        if (final != null) {

            const baseid = "#img" + (final);
            previously = baseid.toString();
            $(previously).css("display", "inline");

        } else {
            stepLocal++;
            const baseid = "#img" + ((stepLocal % (step + 0)) + 0);
            previously = baseid.toString();

            $(previously).css("display", "inline");
        }

    }


    function beep() {
        const snd = new Audio("data:audio/wav;base64,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");
        snd.play();
    }

    let preLoad = function () {
        //let img = new Image(0, 0);
        for (let key in settings.process_img) {
            //c'est ma modification
            let $img = $('<img>').attr('src', settings.process_img[key]);
            let imgID = 'img' + key;
            $img = $img.attr('id', imgID);
            $target.append($img);
        }
        $target.find("img").css("display", "none");
        $target.find("img:first-child").css("display", "inline");
    };


    $.fn.lotteryInit = function (options) {
        settings = $.extend(settings, options);

        // init bind target, must id
        $target = $(this);
        $target.empty();

        let init = function () {
            step = settings.process_img.length;
            preLoad();
        };

        return this.each(function () {
            init();
        });
    };


    $.lotteryStart = function (result, callback) {
        settings.result = result;

        let hasCallback = false;

        if (callback !== undefined && typeof callback === 'function') {
            hasCallback = true;
        }

        let validity = function () {
            // not in range
            //if (typeof settings.result !== 'number' || settings.result < 0 || settings.result >= step) {
            if (typeof settings.result !== 'number' || settings.result < 0) {
                return false;
            }
            return true;
        };


        function shutterLinear() {

            let timer = setInterval(function () {
                shutterFrap();

                if (settings.clap) beep();

            }, speed);

            setTimeout(function () {

                clearInterval(timer);
                shutterSlow();

            }, settings.linearTime);

        }

        function shutterSlow() {

            if (duration >= 0) {
                duration = duration - speed;
                //console.log(speed);
                speed++;
                speed = speed + (.1 * speed) ^ 2;
                if (settings.clap) beep();
                shutterFrap();
                setTimeout(shutterSlow, speed);
            } else {
                shutterFrap(settings.result);
                if (hasCallback) {
                    callback();
                    hasCallback = false;
                    return;
                }
            }

        }


        let start = function () {
            // validity result;
            if (!validity()) {
                return;
            }

            let precedent = null;
            duration = settings.slowTime;
            speed = parseInt(1000 / settings.frap);
            //console.log(speed);
            shutterLinear();

        }();
    }

}(jQuery));
