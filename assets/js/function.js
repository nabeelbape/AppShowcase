!function(t) {
    "use strict";
    function o() {
        t(".parallax").each(function() {
            var o = t(this)
              , a = t(window).scrollTop()
              , i = a * e
              , i = +i.toFixed(2);
            o.hasClass("fs") ? o.css("transform", "translate3d(-50%,-" + (50 - .15 * i) + "%,0)") : o.css("transform", "translate3d(0," + i + "px,0)")
        })
    }
    function a() {
        var o = t(window).height()
          , a = t(window).scrollTop()
          , i = a + o;
        t.each(n, function() {
            var o = t(this)
              , e = o.outerHeight()
              , n = o.offset().top - 100
              , r = n + e;
            r >= a && n <= i ? o.addClass("in-view") : o.removeClass("in-view")
        })
    }
    t("a[href!=#][data-toggle!=tab][data-toggle!=collapse][target!=_blank][class!=anchor]").addClass("smooth"),
    t(".smooth").on("click", function(o) {
        o.preventDefault();
        var a = t(this).attr("href");
        t("body").removeClass("menu-active").css({
            opacity: 0
        }),
        setTimeout(function() {
            window.location = a
        }, 700)
    });
    var i = t(".grid");
    i.imagesLoaded(function() {
        i.packery({
            itemSelector: ".item"
        })
    }),
    t(".filter").on("click", function(o) {
        o.preventDefault(),
        o.stopPropagation(),
        t("body").addClass("filtering");
        var a = t(this).attr("data-filter");
        t(".filter.active").removeClass("active"),
        t(this).addClass("active"),
        t(".grid").find("." + a).fadeTo(300, 1),
        t(".grid").find(".item:not(." + a + ")").fadeTo(300, .2)
    }),
    t(window).on("resize", function() {
        i.packery("layout"),
        setTimeout(function() {
            i.packery("layout"),
            window.requestAnimationFrame(a)
        }, 1500)
    }),
    t(window).on("scroll", function() {
        window.requestAnimationFrame(o)
    });
    var e = .15
      , n = t(".fadein");
    t(window).on("scroll resize", function() {
        window.requestAnimationFrame(a);
        var o = t(".anchor");
        o.each(function() {
            var o = "#" + t(".in-view").attr("id");
            o == t(this).attr("href") && ($anchorLink.removeClass("active"),
            t(this).addClass("active"))
        })
    }),
    t(window).on("load", function() {
        window.requestAnimationFrame(a),
        t("body").imagesLoaded(function() {
            t("body").removeClass("preload")
        })
    }),
    t(window).bind("pageshow", function(t) {
        t.originalEvent.persisted && window.location.reload()
    })
}(jQuery);
