var topRH = 0;
var topVG = 0;
var topP = 0;
var topSP = 0;

$(document).ready(function () {
    $(".project-card-front").click(function () {
        if ((window.matchMedia('(hover: none)').matches)) {
            this.parentElement.classList.remove('floating-card');
            this.parentElement.classList.remove('front');
            this.parentElement.classList.add('back');

            for (var i = 0; i < $(this.parentElement).siblings().length; i++) {
                if ($(this.parentElement).siblings()[i].classList.contains("back")) {
                    console.log("Flip " + i + ($(this.parentElement).siblings().length));

                    $(this.parentElement).siblings()[i].classList.remove("back");
                    $(this.parentElement).siblings()[i].classList.add("front");
                }
            }

        }
    });


    $(".rh-press-card .project-card-back").click(function () {
        console.log("auto scroll?");
        const rhPressScrollHeight = document.querySelector(".rh-press-info").offsetTop;
        console.log("RH Press Scroll: " + rhPressScrollHeight);
        window.scrollTo(0, (rhPressScrollHeight), "smooth");

        if ((window.matchMedia('(hover: none)').matches)) {
            // console.log(this.parentElement);
            this.parentElement.classList.remove('back');
            this.parentElement.classList.add('front');
            // console.log(this.parentElement);
        }
    });
    $(".vg-card .project-card-back").click(function () {
        console.log("auto scroll?");
        const vgScrollHeight = document.querySelector(".vg-info").offsetTop;
        window.scrollTo(0, (vgScrollHeight), "smooth");
        if ((window.matchMedia('(hover: none)').matches)) {
            // console.log(this.parentElement);
            this.parentElement.classList.remove('back');
            this.parentElement.classList.add('front');
            // console.log(this.parentElement);
        }
    });
    $(".p-card .project-card-back").click(function () {
        console.log("auto scroll?");
        const pScrollHeight = document.querySelector(".p-info").offsetTop;
        window.scrollTo(0, (pScrollHeight), "smooth");
        if ((window.matchMedia('(hover: none)').matches)) {
            // console.log(this.parentElement);
            this.parentElement.classList.remove('back');
            this.parentElement.classList.add('front');
            // console.log(this.parentElement);
        }
    });
    $(".s-card .project-card-back").click(function () {
        console.log("auto scroll?");
        const sScrollHeight = document.querySelector(".sp-info").offsetTop;
        window.scrollTo(0, (sScrollHeight), "smooth");
        if ((window.matchMedia('(hover: none)').matches)) {
            // console.log(this.parentElement);
            this.parentElement.classList.remove('back');
            this.parentElement.classList.add('front');
            // console.log(this.parentElement);
        }
    });

    var alreadyAnimated = [false, false, false, false];
    var lastScroll = window.scrollY;
    var mousePosX = 0;
    var mousePosY = 0;

    topRH = this.querySelector(".rh-press-info").getBoundingClientRect().top;
    topVG = this.querySelector(".vg-info").getBoundingClientRect().top;
    topP = this.querySelector(".p-info").getBoundingClientRect().top;
    topSP = this.querySelector(".sp-info").getBoundingClientRect().top;
    function scrollCheck() {
        const pastPointDown = $(window).height() * 0.6;
        const pastPointUp = $(window).height() * 0.9;

        // console.log("Last Scroll: " + lastScroll);
        // console.log("Scroll Position " + (window.scrollY | window.pageYOffset));
        // console.log("Add to " + pastPointDown);
        // console.log("Past Point Down " + (pastPointDown + (window.scrollY | window.pageYOffset)));
        // console.log("Past Point Up " + (pastPointUp + (window.scrollY | window.pageYOffset)))

        // console.log("Top of RH: " + topRH);
        // console.log("Top of VG: " + topVG);
        // console.log("Top of P: " + topP);
        // console.log("Top of SP: " + topSP);
        // console.log("End of Page: " + document.body.offsetHeight);
        // console.log("Reached end? " + ((window.innerHeight + (window.scrollY | window.pageYOffset)) >= document.body.offsetHeight));

        var followmouse = document.querySelector(".follow-mouse");
        if (followmouse !== null) {
            // console.log("fm not null");
            // console.log("lastscroll " + lastScroll);
            // console.log("y " + (window.scrollY | window.pageYOffset));
            $(followmouse).css({
                "transform": "translate(" + (mousePosX + 25) + "px, " + (mousePosY + ((window.scrollY | window.pageYOffset) - lastScroll) - 50) + "px)",
            });

            mousePosX = mousePosX;
            mousePosY = (mousePosY + ((window.scrollY | window.pageYOffset) - lastScroll));
        }

        if (lastScroll < (window.scrollY | window.pageYOffset)) {
            // console.log("Scrolling Down");

            // console.log(topRH < (pastPointDown + window.scrollY | window.pageYOffset));
            // console.log(alreadyAnimated);
            // console.log((alreadyAnimated[0] === false));

            if (((topRH < (pastPointDown + (window.scrollY | window.pageYOffset))) && (alreadyAnimated[0] === false)) | ((window.innerHeight + (window.scrollY | window.pageYOffset)) >= document.body.offsetHeight)) {
                // console.log("\n\n\nPASSED FIRST. \n\n\n")

                $(".rh-press-info").css("animation", "fly-in-from-left 0.8s ease-in 0.2s 1 forwards"
                );
                alreadyAnimated[0] = true;

            }
            if (((topVG < (pastPointDown + (window.scrollY | window.pageYOffset))) && (alreadyAnimated[1] == false)) | ((window.innerHeight + (window.scrollY | window.pageYOffset)) >= document.body.offsetHeight)) {
                // console.log("\n\n\nPASSED SECOND.\n\n\n")

                $(".vg-info").css("animation", "fly-in-from-right 0.8s ease-in 0.2s 1 forwards"
                );
                alreadyAnimated[1] = true;

            }
            if (((topP < (pastPointDown + (window.scrollY | window.pageYOffset))) && (alreadyAnimated[2] === false)) | ((window.innerHeight + (window.scrollY | window.pageYOffset)) >= document.body.offsetHeight)) {
                // console.log("\n\n\n PASSED THIRD.\n\n\n")

                $(".p-info").css("animation", "fly-in-from-left 0.8s ease-in 0.2s 1 forwards"
                );
                alreadyAnimated[2] = true;

            }
            if (((topSP < (pastPointDown + (window.scrollY | window.pageYOffset))) && (alreadyAnimated[3] === false)) | ((window.innerHeight + (window.scrollY | window.pageYOffset)) >= document.body.offsetHeight)) {
                // console.log("\n\n\n PASSED FOURTH. \n\n\n")

                $(".sp-info").css("animation", "fly-in-from-right 0.8s ease-in 0.2s 1 forwards"
                );
                alreadyAnimated[3] = true;

            }
            // console.log("\n\n");
            lastScroll = (window.scrollY | window.pageYOffset);
        } else if (lastScroll > (window.scrollY | window.pageYOffset)) {
            // console.log("Scrolling Up");

            // console.log(topRH > (pastPointUp + (window.scrollY | window.pageYOffset)));
            // console.log(alreadyAnimated);
            // console.log((alreadyAnimated[0] === true));

            if ((topRH > (pastPointUp + (window.scrollY | window.pageYOffset))) && (alreadyAnimated[0] === true)) {
                // console.log("\n\n\nRE-PASSED FIRST. \n\n\n")

                $(".rh-press-info").css("animation", "fly-out-from-left 0.8s ease-in 0s 1 forwards"
                );
                alreadyAnimated[0] = false;

            }
            if ((topVG > (pastPointUp + (window.scrollY | window.pageYOffset))) && (alreadyAnimated[1] == true)) {
                // console.log("\n\n\nRE-PASSED SECOND.\n\n\n")

                $(".vg-info").css("animation", "fly-out-from-right 0.8s ease-in 0s 1 forwards"
                );
                alreadyAnimated[1] = false;

            }
            if ((topP > (pastPointUp + (window.scrollY | window.pageYOffset))) && (alreadyAnimated[2] === true)) {
                // console.log("\n\n\nRE-PASSED THIRD.\n\n\n")

                $(".p-info").css("animation", "fly-out-from-left 0.8s ease-in 0s 1 forwards"
                );
                alreadyAnimated[2] = false;

            }
            if ((topSP > (pastPointUp + (window.scrollY | window.pageYOffset))) && (alreadyAnimated[3] === true)) {
                // console.log("\n\n\nRE-PASSED FOURTH. \n\n\n")

                $(".sp-info").css("animation", "fly-out-from-right 0.8s ease-in 0s 1 forwards"
                );
                alreadyAnimated[3] = false;

            }
            lastScroll = (window.scrollY | window.pageYOffset);
        }
    }

    $(document).scroll(function (event) {
        scrollCheck();
    })

    var scrolledRight = false;
    $(".project-info-inner").scroll(function () {
        if (window.matchMedia('(hover: hover)').matches) {
            console.log("Has hover");
            // console.log("Scroll X " + this.scrollX);

            if (scrolledRight === false) {
                var followmouse = document.querySelector('.follow-mouse');
                followmouse.style.visibility = "hidden";

                scrolledRight = true;
            }
            if ((scrolledRight === true) && (this.scrollLeft === 0)) {
                var followmouse = document.querySelector('.follow-mouse');
                followmouse.style.visibility = "visible";


                scrolledRight = false;
            }
        }
        else {
            console.log("no hover");
        }
    });

    $("body").on("touchmove", function (event) {
        scrollCheck();
    });

    $(".project-info-bkgrnd").mouseenter(function (event) {
        if (window.matchMedia('(hover: hover)').matches) {
            console.log("Has hover");

            var thisTop = this.getBoundingClientRect().top;
            var thisLeft = this.getBoundingClientRect().left;

            if ((document.querySelector(".follow-mouse") == null) && (scrolledRight === false)) {
                var followMouse = document.createElement("div");

                followMouse.classList.add("follow-mouse");
                $(followMouse).css({
                    "position": "absolute",
                    "height": "50px",
                    "width": "125px",
                    "background-color": "#99AED3",
                    "animation": "pulse 1.5s infinite",
                    "border-radius": "50px",
                    "z-index": 20,
                    "top": "0",
                    "left": "0",
                })

                var followmousetext = document.createElement("p");
                followmousetext.innerText = "Scroll Right"

                $(followmousetext).css({
                    "font-family": "Quicksand, sans-serif",
                    "margin-left": "12.5px",
                    "margin-top": "15px",
                    "font-size": "17px",
                    "color": "white",
                });

                followMouse.appendChild(followmousetext);

                document.querySelector("body").appendChild(followMouse);
            }
            var followMouse = document.querySelector(".follow-mouse");
            // console.log("Client X: " + event.clientX);
            // console.log("Client Y: " + event.clientY);
            // console.log("Box X: " + thisLeft + (window.scrollX | window.pageXOffset));
            // console.log("Box Y: " + thisTop + ((window.scrollY | window.pageYOffset)));

            // console.log("X: " + (event.clientX + (thisLeft + (window.scrollX | window.pageXOffset))));
            // console.log("Y: " + (event.clientY + (thisTop + (window.scrollY | window.pageYOffset))));
            if (scrolledRight === false) {
                $(followMouse).css({
                    "visibility": "visible",
                });
            }

            $(followMouse).css({
                "transform": "translate(" + (event.pageX + 25) + "px, " + (event.pageY - 50) + "px)",
            });

            mousePosX = event.pageX;
            mousePosY = event.pageY;
        }
        else {
            console.log("no hover");
        }

    });

    $(".project-info-bkgrnd").mousemove(function (event) {
        if (window.matchMedia('(hover: hover)').matches) {
            console.log("Has hover");

            if (scrolledRight === false) {
                var followMouse = document.querySelector(".follow-mouse");
                $(followMouse).css({
                    "transform": "translate(" + (event.pageX + 25) + "px, " + (event.pageY - 50) + "px)",
                });

                mousePosX = event.pageX;
                mousePosY = event.pageY;
            }
        }
        else {
            console.log("no hover");
        }
    });
    $(".project-info-bkgrnd").mouseleave(function (event) {
        if (window.matchMedia('(hover: hover)').matches) {
            console.log("Has hover");

            var followmouse = document.querySelector('.follow-mouse');
            followmouse.style.visibility = "hidden";

            mousePosX = event.pageX;
            mousePosY = event.pageY;
        }
        else {
            console.log("no hover");
        }

    });

    addEventListener("resize", (event) => {
        topRH = this.querySelector(".rh-press-info").getBoundingClientRect().top;
        topVG = this.querySelector(".vg-info").getBoundingClientRect().top;
        topP = this.querySelector(".p-info").getBoundingClientRect().top;
        topSP = this.querySelector(".sp-info").getBoundingClientRect().top;


        // console.log("NEW RH: " + topRH);
        // console.log("NEW VG: " + topVG);
        // console.log("NEW P: " + topP);
        // console.log("NEW SP: " + topSP);
        // console.log("\n\n");


    });
});



    // function cardHover(htmlEl) {
    //     $(this).stop(true, true);
    //     $(this).css("top", "0px");

    //     console.log("this is " + htmlEl);
    //     console.log("Mouse entered.");
    //     console.log("Front card? " + htmlEl.classList.contains("front"));
    //     if (htmlEl.classList.contains("front")) {


    //         console.log("animating...");
    //         $(htmlEl).css("animation", "card-hover-short 1.5s ease-in-out infinite");

    //     }
    // }
    // $(".project-card").mouseenter(function (event) {
    //     cardHover(this);
    // });
    // $(".project-card").mouseleave(function (event) {
    //     console.log("leaving");
    //     $(this).css("animation", "none");
    //     $(this).css("top", "0px");
    // });

    // $(".project-card").click(function (event) {
    //     console.log(this);
    //     if (this.classList.contains("front")) {
    //         console.log("is front");
    //         $(this).css("animation", "none");
    //         $(this).css("top", "0px");

    //         for (var i = 0; i < $(this).siblings().length; i++) {
    //             if ($(this).siblings()[i].classList.contains("back")) {
    //                 console.log("Flip " + i + ($(this).siblings().length));

    //                 // $(this).siblings()[i].css("transform", "rotateY(0deg)");
    //                 $(this).siblings()[i].style.setProperty("transform", "rotateY(0deg)");

    //                 // $(this).siblings()[i].querySelector(".project-card-front").style.setProperty("display", "block");
    //                 // $(this).siblings()[i].querySelector(".project-card-back").style.setProperty("display", "none");
    //                 $(this).siblings()[i].classList.remove("back");
    //                 $(this).siblings()[i].classList.add("front");
    //             }
    //         }
    //         $(this).css({
    //             transform: "rotateY(180deg)",
    //             transition: "0.8s"
    //         });


    //         // this.querySelector(".project-card-front").style.setProperty("display", "none");
    //         // this.querySelector(".project-card-back").style.setProperty("display", "block");
    //         this.classList.remove("front");
    //         this.classList.add("back");

    //     } else {
    //         console.log("is back");

    //         $(this).css("transform", "rotateY(0deg)");


    //         // this.querySelector(".project-card-front").style.setProperty("display", "block");
    //         // this.querySelector(".project-card-back").style.setProperty("display", "none");

    //         this.classList.remove("back");
    //         const currHTMLEl = this;

    //         const deferred = $.Deferred();
    //         deferred.done(function (tobe) {
    //             $(tobe).addClass("front");
    //         });
    //         deferred.done(function (tobe) {
    //             console.log("Front card in flip? " + tobe.classList.contains("front"));
    //             cardHover(tobe);
    //         });

    //         deferred.resolve(this);
    //     }



    // })

