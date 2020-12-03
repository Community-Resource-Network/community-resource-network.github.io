/*"use strict";
      !(function (e) {
        "function" == typeof define && define.amd
          ? define(e)
          : "undefined" != typeof module && module.exports
          ? (module.exports = e())
          : (window.enterView = e.call(this));
      })(function () {
        var e = function (e) {
          function n() {
            g =
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              function (e) {
                return setTimeout(e, 1e3 / 60);
              };
          }
          function t() {
            if (h && "number" == typeof h) {
              var e = Math.min(Math.max(0, h), 1);
              return q - e * q;
            }
            return q;
          }
          function i() {
            var e = document.documentElement.clientHeight,
              n = window.innerHeight || 0;
            q = Math.max(e, n);
          }
          function o() {
            y = !1;
            var e = t();
            (A = A.filter(function (n) {
              var t = n.getBoundingClientRect(),
                i = t.top,
                o = i < e;
              if (o && !n.__enter_view) {
                if ((m(n), _)) return !1;
              } else !o && n.__enter_view && w && w(n);
              return (n.__enter_view = o), !0;
            })),
              A.length || window.removeEventListener("scroll", r, !0);
          }
          function r() {
            y || ((y = !0), g(o));
          }
          function u() {
            i(), o();
          }
          function f(e) {
            for (var n = e.length, t = [], i = 0; i < n; i += 1) t.push(e[i]);
            return t;
          }
          function c(e) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : document;
            return "string" == typeof e
              ? f(n.querySelectorAll(e))
              : e instanceof NodeList
              ? f(e)
              : e instanceof Array
              ? e
              : void 0;
          }
          function d() {
            A = c(l);
          }
          function a() {
            window.addEventListener("resize", u, !0),
              window.addEventListener("scroll", r, !0),
              u();
          }
          function s() {
            var e = l && m;
            e || console.error("must set selector and enter options"),
              n(),
              d(),
              a(),
              o();
          }
          var l = e.selector,
            m = e.enter,
            w = e.exit,
            v = e.offset,
            h = void 0 === v ? 0 : v,
            p = e.once,
            _ = void 0 !== p && p,
            g = null,
            y = !1,
            A = [],
            q = 0;
          s();
        };
        return e;
      });*/

//SECOND PART

"use strict";
!(function (e) {
  "function" == typeof define && define.amd
    ? define(e)
    : "undefined" != typeof module && module.exports
    ? (module.exports = e())
    : (window.enterView = e.call(this));
})(function () {
  var e = function (e) {
    function n() {
      g =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (e) {
          return setTimeout(e, 1e3 / 60);
        };
    }
    function t() {
      if (h && "number" == typeof h) {
        var e = Math.min(Math.max(0, h), 1);
        return q - e * q;
      }
      return q;
    }
    function i() {
      var e = document.documentElement.clientHeight,
        n = window.innerHeight || 0;
      q = Math.max(e, n);
    }
    function o() {
      y = !1;
      var e = t();
      (A = A.filter(function (n) {
        var t = n.getBoundingClientRect(),
          i = t.top,
          o = i < e;
        if (o && !n.__enter_view) {
          if ((m(n), _)) return !1;
        } else !o && n.__enter_view && w && w(n);
        return (n.__enter_view = o), !0;
      })),
        A.length || window.removeEventListener("scroll", r, !0);
    }
    function r() {
      y || ((y = !0), g(o));
    }
    function u() {
      i(), o();
    }
    function f(e) {
      for (var n = e.length, t = [], i = 0; i < n; i += 1) t.push(e[i]);
      return t;
    }
    function c(e) {
      var n =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : document;
      return "string" == typeof e
        ? f(n.querySelectorAll(e))
        : e instanceof NodeList
        ? f(e)
        : e instanceof Array
        ? e
        : void 0;
    }
    function d() {
      A = c(l);
    }
    function a() {
      window.addEventListener("resize", u, !0),
        window.addEventListener("scroll", r, !0),
        u();
    }
    function s() {
      var e = l && m;
      e || console.error("must set selector and enter options"),
        n(),
        d(),
        a(),
        o();
    }
    var l = e.selector,
      m = e.enter,
      w = e.exit,
      v = e.offset,
      h = void 0 === v ? 0 : v,
      p = e.once,
      _ = void 0 !== p && p,
      g = null,
      y = !1,
      A = [],
      q = 0;
    s();
  };
  return e;
});

var pic = new Image();
var pic2 = new Image();
var pic3 = new Image();
var pic4 = new Image();
var pic5 = new Image();
var pic6 = new Image();
var pic7 = new Image();
pic.src =
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
pic2.src =
  "https://images.unsplash.com/photo-1525695230005-efd074980869?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
pic3.src = "https://miro.medium.com/max/3600/1*pKKv8eS4qcVf_yPHc6-eaQ.jpeg";
pic4.src =
  "https://images.unsplash.com/photo-1584145513820-6fdbfa7e427a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80";
pic5.src =
  "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80";
pic6.src =
  "https://images.unsplash.com/photo-1551985954-a317e5a04547?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80";
pic7.src =
  "https://images.unsplash.com/photo-1565615833231-e8c91a38a012?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

var backNum = 0;
var setHeight;

enterView({
  selector: "section",
  enter: function (el) {
    el.classList.add("entered");
    changeBackground();
  },
});
(setHeight = document.getElementById("set-height")),
  (setHeight.style.height = "2000px");

function changeBackground() {
  var newVal = 0;
  if (getScrollPercent() < 0.07151559454191034) {
    newVal = 0;
  } else if (getScrollPercent() < 0.1949317738791423) {
    newVal = 1;
  } else if (getScrollPercent() < 0.32285575048732945) {
    newVal = 2;
  } else if (getScrollPercent() < 0.44639376218323584) {
    newVal = 3;
  } else if (getScrollPercent() < 0.5706627680311891) {
    newVal = 4;
  } else if (getScrollPercent() < 0.69432261208577) {
    newVal = 5;
  } else {
    newVal = 6;
  }
  if (backNum != newVal) {
    //console.log("rounded " + getScrollPercent() / 0.07249025341130605);
    backNum = newVal;
    //console.log("Changing background to " + backNum + "...");
    changeBgTo(newVal);
  }
}

function changeBgTo(backNum) {
  var backgrounds = [
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1525695230005-efd074980869?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://miro.medium.com/max/3600/1*pKKv8eS4qcVf_yPHc6-eaQ.jpeg",
    "https://images.unsplash.com/photo-1584145513820-6fdbfa7e427a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
    "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
    "https://images.unsplash.com/photo-1551985954-a317e5a04547?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
    "https://images.unsplash.com/photo-1565615833231-e8c91a38a012?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  ];
  document.getElementById("v0").style.backgroundImage =
    "url('" + backgrounds[backNum] + "')";
  document.getElementById("v0").style.backgroundSize = "cover no-repeat";
  if (backNum === 2) {
    document.getElementById("v0").style.backgroundPosition = "50% 50%";
  } else {
    document.getElementById("v0").style.backgroundPosition = "50% 50%";
  }
}

function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 1.0;
}
window.addEventListener("scroll", function (event) {
  changeBackground();
  //console.log(getScrollPercent());
});

window.mobileAndTabletCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

if (mobileAndTabletCheck() && window.location.href != "https://crninfo.org/mobile") {
  window.location = "https://crninfo.org/mobile";
} else if (
  !mobileAndTabletCheck() &&
  window.location.href === "https://crninfo.org/mobile"
) {
  window.location = "https://crninfo.org/";
}
