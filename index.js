
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
    </script>
    <script>
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
      pic3.src =
        "https://miro.medium.com/max/3600/1*pKKv8eS4qcVf_yPHc6-eaQ.jpeg";
      pic4.src =
        "https://images.unsplash.com/photo-1584145513820-6fdbfa7e427a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80";
      pic5.src =
        "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80";
      pic6.src =
        "https://images.unsplash.com/photo-1551985954-a317e5a04547?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80";
      pic7.src =
        "https://images.unsplash.com/photo-1565615833231-e8c91a38a012?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

      var backNum = 0;

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