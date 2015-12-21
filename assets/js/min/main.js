$(document).ready(function () {

    $(".pro").addClass("active");
    $(".services").hide();
    $(".features").hide();

    $(".pro").click(function () {
        $(".products").fadeIn();
        $(".services").fadeOut();
        $(".features").fadeOut();
        $(" .ser").removeClass("active");
        $(".pro").addClass("active");
        $(".fea").removeClass("active");
    });
    $(".ser").click(function () {
        $(".products").fadeOut();
        $(".features").fadeOut();
        $(".services").fadeIn();
        $(" .ser").addClass("active");
        $(".pro").removeClass("active");
        $(".fea").removeClass("active");
    });
    $(".fea").click(function () {
        $(".features").fadeIn();
        $(".products").fadeOut();
        $(".services").fadeOut();
        $(" .ser").removeClass("active");
        $(".pro").removeClass("active");
        $(" .fea").addClass("active");
    });

    var i = 5;
    var container_width = i * ($(".in ").innerWidth() + 60);
    console.log(container_width);






    $(".outer-slide").css({
        "width": container_width
    });



    $(".r-arr").click(function () {


        event.preventDefault();

        $(".section-ba").animate({
            scrollLeft: "+=200"
        }, 200);

    });

    $(".l-arr").click(function () {


        event.preventDefault();

        $(".section-ba").animate({
            scrollLeft: "-=200"
        }, 200);

    });


    $(".ser1").addClass("active");
    $(".ser-details").html("<h3>SERVICE 1</h3><hr><b>Product Used: &nbsp;</b>aslajn j afjbjf hbf jadbh djhb jabhjfhb kjhfjb khb ajhbf jahb hf a jvjkdfv jhb djhfbvj<br><hr><b>Approx Time Taken: &nbsp;</b>aslajn j afjbjf hbf jadbh djhb jabhjfhb kjhfjb khb ajhbf jahb hf a jvjkdfv jhb djhfbvj<br><hr><b>Other Details: &nbsp;</b>aslajn j afjbjf hbf jadbh djhb jabhjfhb kjhfjb khb ajhbf jahb hf a jvjkdfv jhb djhfbvj");

    $(".ser1").click(function () {
        $(".act").removeClass("active");
        $(".ser1").addClass("active");


        $(".ser-details").hide().html("<h3>SERVICE 1</h3><hr><b>Product Used: &nbsp;</b>aslajn j afjbjf hbf jadbh djhb jabhjfhb kjhfjb khb ajhbf jahb hf a jvjkdfv jhb djhfbvj<br><hr><b>Approx Time Taken: &nbsp;</b>aslajn j afjbjf hbf jadbh djhb jabhjfhb kjhfjb khb ajhbf jahb hf a jvjkdfv jhb djhfbvj<br><hr><b>Other Details: &nbsp;</b>aslajn j afjbjf hbf jadbh djhb jabhjfhb kjhfjb khb ajhbf jahb hf a jvjkdfv jhb djhfbvj").fadeIn(100);
    });
    $(".ser2").click(function () {
        $(".act").removeClass("active");
        $(".ser2").addClass("active");


        $(".ser-details").hide().html("<h3>SERVICE 2</h3><hr><b>Product Used: &nbsp;</b>aslajn j afjbjf hbf jadbh djhb jabhjfhb kjhfjb khb ajhb hf a jvjkdfv jhb djhfbvj<br><hr><b>Approx Time Taken: &nbsp;</b>aslajn j afjbjf hbf jadbh djhb jabhjfhb kjhfjb khb hf a jvjkdfv jhb djhfbvj<br><hr><b>Other Details: &nbsp;</b>aslajn j afjbjf hbf jadbh djhb jabhjfhb kjhfjb khb ajhbf jahb hf a jvjkdfv jhb djhfbvj").fadeIn(100);


    });

    //lis servicesread more

    var c = $(".service li").length;
    var p = $(".product li").length;
    var y = $(".payment li").length;

    if (c > 3) {
        $(".ser-read").css({
            'display': 'block'
        });
        $(".ser-all").css({
            'display': 'none'
        });
        $(".ser-arr ").css({
            'display': 'none'
        });
        var sernum = $(".service ul li").slice(3, c);
        $(sernum).hide();
        $(".ser-read").click(function () {
            var sernum = $(".service ul li").slice(3, c);
            $(sernum).fadeIn();
            $(".ser-read").css({
                'display': 'none'
            });

            $(".ser-arr ").css({
                'display': 'block',
                'position': 'relative',
                'bottom': '0px',
                'width': '100%'

            })
            $(".ser-arr").click(function () {
                var sernum = $(".service ul li").slice(3, c);
                $(sernum).fadeOut();
                $(".ser-arr ").css({
                    'display': 'none'
                });
                $(".ser-read").css({
                    'display': 'block'
                });
            })
        })


    } else {
        $(".ser-read").css({
            'display': 'none'
        });
        $(".ser-all").css({
            'display': 'block'
        });
        $(".ser-arr ").css({
            'display': 'none'
        });


    }
    if (p > 3) {
        $(".pro-read").css({
            'display': 'block'
        });
        $(".pro-all").css({
            'display': 'none'
        });
        $(".arr-all ").css({
            'display': 'none'
        });
        var pronum = $(".product ul li").slice(3, p);
        $(pronum).hide();

        $(".pro-read").click(function () {
            var pronum = $(".product ul li").slice(3, p);
            $(pronum).fadeIn();
            $(".pro-read").css({
                'display': 'none'
            });

            $(".arr-all ").css({
                'display': 'block',
                'position': 'relative',
                'bottom': '0px',
                'width': '100%'
            });

            $(".arr-all").click(function () {
                var pronum = $(".product ul li").slice(3, p);
                $(pronum).fadeOut();
                $(".arr-all ").css({
                    'display': 'none'
                });
                $(".pro-read").css({
                    'display': 'block'
                });
            })
        })



    } else {
        $(".pro-read").css({
            'display': 'none'
        });
        $(".pro-all").css({
            'display': 'block'
        });
        $(".arr-all ").css({
            'display': 'none'
        });

    }
    if (y > 3) {
        $(".pay-read").css({
            'display': 'block'
        });
        $(".pay-all").css({
            'display': 'none'
        });
        $(".pay-arr ").css({
            'display': 'none'
        });

        var paynum = $(".payment ul li").slice(3, y);
        $(paynum).hide();
        $(".pay-read").click(function () {
            var paynum = $(".payment ul li").slice(3, y);
            $(paynum).fadeIn();
            $(".pay-read").css({
                'display': 'none'
            });

            $(".pay-arr ").css({
                'display': 'block'
            });
            $(".pay-arr").css({
                'position': 'relative',
                'bottom': '0px',
                'width': '100%'

            })
            $(".pay-arr").click(function () {
                var paynum = $(".payment ul li").slice(3, y);
                $(paynum).fadeOut();
                $(".pay-arr ").css({
                    'display': 'none'
                });
                $(".pay-read").css({
                    'display': 'block'
                });
            })
        })


    } else {
        $(".pay-read").css({
            'display': 'none'
        });
        $(".pay-all").css({
            'display': 'block'
        });
        $(".pay-arr ").css({
            'display': 'none'
        })
    }

    if (c <= 3 || p <= 3 || y <= 3) {
        $(".thatsall").css({
            'position': 'absolute',
            'bottom': '0px',
            'width': '90%'

        })

    }
    //rating-button


    $(".Review-form .rating-0").show();

    //    $(".Review-form .one").click(function () {
    //
    //        $(".Review-form   .one").css({
    //            'color': 'yellow'
    //        });
    //
    //        $(".Review-form   .two,.Review-form   .three,.Review-form   .four,.Review-form   .five").css({
    //            'color': '#b7b7b7'
    //        });
    //        $(".Review-form   .one").off("mouseleave");
    //
    //    });
    //
    //    $(".Review-form .two").click(function () {
    //
    //        $(".Review-form   .two,.Review-form .three,,.Review-form .four,,.Review-form .five").css({
    //            'color': 'yellow'
    //        });
    //
    //        $(".Review-form   .three,.Review-form   .four,.Review-form   .five").css({
    //            'color': '#b7b7b7'
    //        });
    //
    //        $(".Review - form.one, .Review-form .two").off("mouseleave");
    //
    //    });
    //    $(".Review-form .three").click(function () {
    //
    //        $(".Review-form   .one,.Review-form .two,.Review-form .three").css({
    //            'color': 'yellow'
    //        });
    //
    //        $(".Review-form   .four,.Review-form   .five").css({
    //            'color': '#b7b7b7'
    //        });
    //
    //        $(".Review-form   .one , .Review-form .two,.Review-form .three").off("mouseleave");
    //
    //    });
    //
    //
    //    $(".Review-form .four").click(function () {
    //
    //        $(".Review-form   .one,.Review-form .two,.Review-form .three,.Review-form .four").css({
    //            'color': 'yellow'
    //        });
    //
    //        $(".Review-form   .five").css({
    //            'color': '#b7b7b7'
    //        });
    //
    //        $(".Review-form   .one , .Review-form .two,.Review-form .three,.Review-form .four").off("mouseleave");
    //
    //    });
    //
    //    $(".Review-form .five").click(function () {
    //
    //        $(".Review-form   .one,.Review-form .two,.Review-form .three,.Review-form .four ").css({
    //            'color': 'yellow'
    //        });
    //        $(".Review - form.four ").click(function () {
    //
    //            $(".Review-form   .one,.Review-form .two,.Review-form .three,.Review-form .five").css({
    //                'color': 'yellow'
    //            });
    //
    //
    //            $(".Review-form   .one , .Review-form .two,.Review-form .three,.Review-form .four").off("mouseleave");
    //
    //        });
    //
    //
    //
    //
    //        $(".Review-form   .one , .Review-form .two,.Review-form .three,.Review-form .four,.Review-form .five").off("mouseleave");
    //
    //    });

    $(".Review-form .one").click(function () {

        $(".Review-form   .one").css({
            'color': 'yellow'
        });
        $(".Review-form .two,.Review-form .three,.Review-form .four,.Review-form .five").css({
            'color': '#b7b7b7'
        })
    });

});



$(".Review-form .two").click(function () {

    $(".Review-form   .one,.Review-form .two").css({
        'color': 'yellow'
    });
    $(".Review-form .three,.Review-form .four,.Review-form .five").css({
        'color': '#b7b7b7'
    })
});





$(".Review-form .three").click(function () {

    $(".Review-form   .one,.Review-form .two,.Review-form .three").css({
        'color': 'yellow'
    });
    $(".Review-form .four,.Review-form .five").css({
        'color': '#b7b7b7'
    })
});


$(".Review-form .four").click(function () {

    $(".Review-form   .one,.Review-form .two,.Review-form .three,.Review-form .four").css({
        'color': 'yellow'
    });
    $(".Review-form .five").css({
        'color': '#b7b7b7'
    })
});


$(".Review-form .five").click(function () {

    $(".Review-form   .one,.Review-form .two,.Review-form .three,.Review-form .four,.Review-form .five").css({
        'color': 'yellow'
    })


});