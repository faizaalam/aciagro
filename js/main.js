$(document).foundation();
$('body').show();
NProgress.start();
NProgress.inc(0.1);
NProgress.inc(0.1);
setTimeout(function() {
    NProgress.done();
    $('.fade').removeClass('out');
}, 2500);

new WOW().init();

$('.team-pic').hover(function() {
    $(this).children(".overlay").toggleClass('appear-about');
    $(this).children("h5").toggleClass('appear-about');
});





$(document).ready(function() {
  var isMobile = window.matchMedia("(max-width: 900px)");
  var height = $(".workhover").height();
  var height1 = $(".svg-box").height();
  var height2 = $(".capability-item").height();
  console.log(height1);
  console.log(height2);
  if (isMobile.matches) {

    $(".work_pic").find(".work-prof").eq(0).find(".workhover").addClass('appear-background-work');
    $(".work_pic").find(".work-prof").eq(0).find(".lookfor").addClass('appear-text-work');
    $(".work_pic").find(".work-prof").eq(0).find(".product-description").addClass('appear-text-work');

    $(window).scroll(function() {
      var scrollvalue = $(window).scrollTop() - 100;
      var ratio = Math.floor(scrollvalue / height);

      var scrollvalue1 = $(window).scrollTop() - 1500 - height1;
      var ratio1 = Math.floor(scrollvalue1 / height2);
      console.log(scrollvalue);
      console.log(ratio);
if(ratio >= 0 && ratio <=13){
      $(".work_pic").find(".work-prof").eq(ratio).find(".workhover").removeClass('appear-background-work');
      $(".work_pic").find(".work-prof").eq(ratio).find(".lookfor").removeClass('appear-text-work');
      $(".work_pic").find(".work-prof").eq(ratio).find(".clientprof").removeClass('appear-text-work');

      $(".work_pic").find(".work-prof").eq(ratio + 1).find(".workhover").addClass('appear-background-work');
      $(".work_pic").find(".work-prof").eq(ratio + 1).find(".lookfor").addClass('appear-text-work');
      $(".work_pic").find(".work-prof").eq(ratio + 1).find(".clientprof").addClass('appear-text-work');

      $(".work_pic").find(".work-prof").eq(ratio + 2).find(".workhover").removeClass('appear-background-work');
      $(".work_pic").find(".work-prof").eq(ratio + 2).find(".lookfor").removeClass('appear-text-work');
      $(".work_pic").find(".work-prof").eq(ratio + 2).find(".clientprof").removeClass('appear-text-work');
    }
if(ratio1 >= 0 && ratio1 <=6){
      $(".capability-item").eq(ratio1).find(".capability-svg").addClass('svg-mobile-active');
      $(".capability-item").eq(ratio1 + 1).find(".capability-svg").removeClass('svg-mobile-active');
      $(".capability-item").eq(ratio1 -1 ).find(".capability-svg").removeClass('svg-mobile-active');
}
    });



  }
});

$('.work-prof').hover(function() {
    $(this).find(".workhover").toggleClass('appear-background-work');
    $(this).find(".lookfor").toggleClass('appear-text-work');
    $(this).find(".product-description").toggleClass('appear-text-work');
    $(this).find(".product-button").toggleClass('product-button-active');

});

function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        center: new google.maps.LatLng(23.769584, 90.404668),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    // var image = '../images/map-pin.png';
    var myLatLng = new google.maps.LatLng(23.769584, 90.404668);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
    
    });

    map.set('styles', [{
        featureType: "all",
        stylers: [{
            saturation: -80
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{
            hue: "#00ffee"
        }, {
            saturation: 50
        }]
    }, {
        featureType: "poi.business",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }]);
}
google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(
    function() {
        $("html").niceScroll({
            scrollspeed: "80",
            mousescrollstep: "80",
            cursorcolor: "#ed4523",
            cursorwidth: "10",
            cursorborderradius: "0",
            zindex: "1000",
            horizrailenabled: "false",
            autohidemode: "false",
            cursorborder: "0px"
        });
    }
);



$(".capability-item").hover(function() {
    $(this).children(".capability-svg").addClass("svg-mobile-active");
    /* $(this).children(".capability-details").show();*/
}, function() {
    $(this).children(".capability-svg").removeClass("svg-mobile-active");
    $ /*(this).children(".capability-details").hide();*/
});


$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay2').toggleClass('open');
    $('body').toggleClass("overflow-hidden");
    $('span.top,span.bottom').toggleClass('cross-white');

});

/*    var $items = $(".work-prof");
    $items.hide();
    $items.slice(0, Math.floor($items.length/2)).show();

$( "#show_more" ).click(function() {

     var $items = $(".work-prof");
    $items.show();
    $('#show_more').addClass('hidden');
});*/

var $items = $(".ins");
$items.hide();
$items.slice(0, Math.ceil($items.length / 3)).show();


$("#show_more").click(function() {

    var $items = $(".ins");
    $items.show();
    $('#show_more').addClass('hidden');
});

$("#contact-info.full-width").click(function() {
    $(this).children("#map-canvas").delay(1500).toggleClass("pointer-events");
});

$(function() {
    $(".join-typed-text").typed({
        strings: ["If you are a perfectionist", "If you like Putin", "If you are a social butterfly",
            "If you love coffee", "If you are  Lord of the Codes", "If you cook like Walter White", "If you stalk people", "If you are a minimalist", "If you like it simple", "If you hate oatmeals", "If you are all about the bass", "If you read 100 minds per second", "If you are secretly rebel", "If you hate Hooli", "If you are oxymoronic", "If you hate your boss", "If you are alignment OCD", "If you like to crunch numbers", "If you are judging us now"
        ],
        loop: true,
        typeSpeed: 50,
        backspace: function(curString, curStrPos) {
            setTimeout(function() {

                // check string array position
                // on the first string, only delete one word
                // the stopNum actually represents the amount of chars to
                // keep in the current string. In my case it's 3.
                if (self.arrayPos == 1) {
                    self.stopNum = 3;
                }
                //every other time, delete the whole typed string
                else {
                    self.stopNum = 0;
                }
            });
        }
    })
});

$("#arrow-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
});

$(".go-to-map").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-info").offset().top
    }, 2000);
});

// $('html,body').delay(3000).animate({
//   scrollTop: $(window.location.hash).offset().top
// }, 5000);


//404

if (!SVG.supported) {
    alert('SVG not supported !');
} else {
    // parameters
    var a = 40,
        speed = 50,
        points = [
            [, , 1, 1, , , 1, 1, , , 1, 1, 1, 1, 1, 1, , , 1, 1, , , 1, 1],
            [, 1, 1, , , 1, 1, , , 1, 1, , , 1, 1, , , 1, 1, , , 1, 1, ],
            [1, 1, 1, 1, 1, 1, , , 1, 1, , , 1, 1, , , 1, 1, 1, 1, 1, 1, , ],
            [, , , 1, 1, , , 1, 1, , , 1, 1, , , , , , , 1, 1, , , ],
            [, , 1, 1, , , 1, 1, 1, 1, 1, 1, , , , , , , 1, 1, , , , ]
        ],
        colors = [
            '#ED4525', '#091848', '#0d306b', '#0064AA', '#18ABE2'
        ],
        shadowColors = ['#0055ff', '#ff0000'],
        textColors = ['#012C33', '#12575E'];

    // computed parameters
    var a2 = a / 2,
        h = Math.round(a2 * Math.sqrt(3) * 100) / 100,
        grid = [points[0].length, points.length],
        size = [(grid[0] / 2 + 0.5) * a + a * 2, grid[1] * h + a * 3],
        nb_colors = colors.length,
        objects = [],
        groups = [];


    // init canvas
    var container = document.getElementById('notfound');
    container.style.width = size[0] + 'px';
    container.style.height = size[1] + 'px';

    var simplex = new SimplexNoise(),
        paper = SVG(container).size(size[0], size[1]).viewbox(0, 0, size[0], size[1]);
    up = paper.defs().path('M' + a2 + ',0 l' + a2 + ',' + h + ' l-' + a + ',0 l' + a2 + ',-' + h),
        down = paper.defs().path('M0,0 l' + a + ',0 l-' + a2 + ',' + h + ' -' + a2 + ',-' + h),
        shadow = [paper.group(), paper.group()];

    // draw objects
    for (var l = 0; l < grid[1]; l++) {
        objects[l] = [];
        groups[l] = paper.group();

        for (var c = 0; c < grid[0]; c++) {
            if (!points[l][c]) {
                continue;
            }

            var rnd = Math.round((simplex.noise(c / 10, l / 10) + 1) / 2 * nb_colors),
                cid = rnd - Math.floor(rnd / nb_colors) * nb_colors,
                pos = [c * a2 + a, l * h + a],
                use;

            if ((l % 2 == 0 && c % 2 == 0) || (l % 2 == 1 && c % 2 == 1)) {
                use = up;
            } else {
                use = down;
            }

            var el = paper.use(use)
                .move(pos[0], pos[1])
                .style('fill:' + colors[cid])
                .data('i', rnd);

            groups[l].add(el);
            objects[l][c] = el;

            shadow[0].use(use).move(pos[0], pos[1]);
            shadow[1].use(use).move(pos[0], pos[1]);
        }
    }


    // draw text
    var text = paper.text('Page not found!')
        .font({
            family: 'Ubuntu, Calibri',
            size: a
        })
        .opacity(0.7)
        .cx(size[0] / 2 - a2)
        .y(size[1] - a - a2);

    shadow[0].add(text.clone());
    shadow[1].add(text.clone());

    text.fill(
        paper.gradient('linear', function(stop) {
            stop.at(0, textColors[0]);
            stop.at(1, textColors[1]);
        }).from(0, 0).to(0, 1)
    );


    // animate shadows
    shadow[0].back()
        .fill(shadowColors[0])
        .animate(speed * 4).loop()
        .during(function(i) {
            if (i < 0.1)
                this.move(-a / 4, 0);
            else if (i >= 0.8)
                this.move(a / 12, 0);

            if (i < 0.1)
                this.opacity(0.1);
            else if (i >= 0.4 && i < 0.5)
                this.opacity(0.5);
            else if (i >= 0.7 && i < 0.8)
                this.opacity(0.3)
            else if (i >= 0.9)
                this.opacity(0.6);
            else
                this.opacity(0);
        });

    shadow[1].back()
        .fill(shadowColors[1])
        .animate(speed * 6).loop()
        .during(function(i) {
            if (i < 0.1)
                this.move(a / 4, 0);
            else if (i >= 0.8)
                this.move(-a / 12, 0);

            if (i < 0.1)
                this.opacity(0.1);
            else if (i >= 0.4 && i < 0.5)
                this.opacity(0.5);
            else if (i >= 0.7 && i < 0.8)
                this.opacity(0.3)
            else if (i >= 0.9)
                this.opacity(0.6);
            else
                this.opacity(0);
        });


    var counter = 0;
    setInterval(function() {
        // animate position
        for (var l = 0, i = groups.length; l < i; l++) {
            if (Math.random() < 0.5) {
                groups[l].x(Math.round(Math.random() * a / 5));
            }
        }

        // animate colors
        for (var l = 0, i = objects.length; l < i; l++) {
            for (var c = 0, j = objects[l].length; c < j; c++) {
                if (!objects[l][c]) {
                    continue;
                }

                var cid = objects[l][c].data('i') + counter;
                cid -= Math.floor(cid / nb_colors) * nb_colors;

                objects[l][c].style('fill:' + colors[cid]);
            }
        }

        counter++;
        if (counter == nb_colors) {
            counter = 0;
        }
    }, speed);
}
