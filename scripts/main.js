function Burger() {
  (this.prune = function () {
    for (var n = this.length; n--;) (("omnivore" !== e.diet && !0 !== this[n][e.diet]) || a < this[n].price) && this.splice(n, 1);
  }),
    (this.message = function (e) {
      $el.results.html(e);
    }),
    (this.copy = function (e) {
      return JSON.parse(JSON.stringify(e));
    }),
    (this.pick = function (e) {
      var a = random(0, e.length - 1),
        n = this.copy(e[a]);
      return e.splice(a, 1), n;
    }),
    (this.generate = function () {
      var r,
        i = [],
        t = { cheese: 2, sauce: 2, mayo: 1, bbq: 1, pickle: 1, onion: 1, toppings: -1 };
      if (($.each([n.burgers], this.prune), !n.burgers.length)) return !1;
      (r = this.pick(n.burgers)), i.push(r.name.toLowerCase()), (a -= r.price), $.each([n.buns], this.prune), (r = this.pick(n.buns)), i.push(r.name.toLowerCase() + " bun"), $.each([n.toppings], this.prune);
      e: for (; ;) {
        if (((r = this.pick(n.toppings)), a < r.price)) break;
        if ("on" !== e.hardMode && r.type)
          for (var c = r.type.length - 1; c >= 0; c--) {
            var g = r.type[c];
            if (void 0 !== t[g] && 0 === t[g]) continue e;
          }
      if ((i.push(r.name.toLowerCase()), (a -= r.price), "on" !== e.hardMode && r.type)) for (var c = r.type.length - 1; c >= 0; c--) (g = r.type[c]), void 0 !== t[g] && t[g]--;
      if (random(0, 99) < 15 && "on" !== e.hardMode) break;
    }
    return i;
    });
  var e = $el.settings.serializeObject(),
    a = e.budget,
    n = this.copy(menu),
    r = this.generate();
  r ? this.message("Try a " + r.join(", ") + ".") : this.message("Sorry, no burgers matched your parameters");
}
var menu = {
  burgers: [
    { name: "House Burger", price: 10, veg: !1, vegan: !1 },
    { name: "Local, Grass-fed Burger", price: 11, veg: !1, vegan: !1 },
    { name: "American Kobe-style Burger", price: 14, veg: !1, vegan: !1 },
    { name: "Veggie Burger", price: 9, veg: !0, vegan: !0 },
    { name: "Chicken Breast", price: 8, veg: !1, vegan: !1 },
    { name: "Yellowfin Tuna Burger", price: 12, veg: !1, vegan: !1 },
    { name: "Lamb Burger", price: 10, veg: !1, vegan: !1 },
    { name: "Turkey Burger", price: 9, veg: !1, vegan: !1 },
    { name: "Bison Burger", price: 12, veg: !1, vegan: !1 },
    { name: "Salmon Burger", price: 12, veg: !1, vegan: !1 },
  ],
  buns: [
    { name: "Sesame", price: 0, veg: !0, vegan: !0 },
    { name: "Brioche", price: 0.5, veg: !0, vegan: !1 },
    { name: "Herb Ciabatta", price: 0.5, veg: !0, vegan: !0 },
    { name: "Multigrain", price: 0.75, veg: !0, vegan: !0 },
  ],
  toppings: [
    { name: "American Cheese", price: 0.75, veg: !0, vegan: !1, type: ["cheese"] },
    { name: "Cheddar", price: 0.75, veg: !0, vegan: !1, type: ["cheese"] },
    { name: "Smoked Gouda", price: 0.75, veg: !0, vegan: !1, type: ["cheese"] },
    { name: "Sharp Provolone", price: 0.75, veg: !0, vegan: !1, type: ["cheese"] },
    { name: "Pepper Jack", price: 0.75, veg: !0, vegan: !1, type: ["cheese"] },
    { name: "Gruyère", price: 1.5, veg: !0, vegan: !1, type: ["cheese"] },
    { name: "Herb Goat Cheese", price: 1.5, veg: !0, vegan: !1, type: ["cheese"] },
    { name: "Habanero Cheddar", price: 1.5, veg: !0, vegan: !1, type: ["cheese"] },
    { name: "Smoked Mozzerella", price: 1.5, veg: !0, vegan: !1, type: ["cheese"] },
    { name: "Whiskey Cheddar", price: 1.5, veg: !0, vegan: !1, type: ["cheese"] },
    { name: "Grain Mustard Cheddar", price: 2, veg: !0, vegan: !1, type: ["cheese"] },
    { name: "Great Blue Hill Cheese", price: 2.5, veg: !0, vegan: !1, type: ["cheese"] },
    { name: "Parmesan Crisp", price: 0.75, veg: !0, vegan: !1, type: ["cheese"] },
    { name: "Horseradish Mayo", price: 0.5, veg: !0, vegan: !1, type: ["mayo", "sauce"] },
    { name: "Cilantro Mayo", price: 0.5, veg: !0, vegan: !1, type: ["mayo", "sauce"] },
    { name: "Garlic Mayo", price: 0.5, veg: !0, vegan: !1, type: ["mayo", "sauce"] },
    { name: "BBQ Sauce", price: 0.5, veg: !0, vegan: !0, type: ["bbq", "sauce"] },
    { name: "Whiskey BBQ Sauce", price: 0.5, veg: !1, vegan: !1, type: ["bbq", "sauce"] },
    { name: "Ranch", price: 0.5, veg: !0, vegan: !1, type: ["mayo", "sauce"] },
    { name: "Sriracha Aoili", price: 0.5, veg: !0, vegan: !1, type: ["mayo", "sauce"] },
    { name: "Truffle Aoili", price: 0.5, veg: !0, vegan: !1, type: ["mayo", "sauce"] },
    { name: "Mac Sauce", price: 0.5, veg: !0, vegan: null, type: ["sauce"] },
    { name: "Creamy Frank's Red Hot", price: 0.5, veg: !0, vegan: !1, type: ["sauce"] },
    { name: "Honey Mustard", price: 0.5, veg: !0, vegan: !0, type: ["sauce", "mustard"] },
    { name: "Blackberry Champagne BBQ Sauce", price: 0.5, veg: !0, vegan: !0, type: ["bbq", "sauce"] },
    { name: "Blue Cheese Dressing", price: 0.75, veg: !0, vegan: !1, type: ["sauce"] },
    { name: "Sweet Chili Ranch", price: 0.5, veg: !0, vegan: !1, type: ["mayo", "sauce"] },
    { name: "Sundried Tomato and Artichoke Spread", price: 0.75, veg: !0, vegan: !0, type: ["sauce"] },
    { name: "Lettuce", price: 0, veg: !0, vegan: !0 },
    { name: "Tomato", price: 0, veg: !0, vegan: !0 },
    { name: "Pickles", price: 0, veg: !0, vegan: !0, type: ["pickle"] },
    { name: "Onion", price: 0, veg: !0, vegan: !0, type: ["onion"] },
    { name: "Sautéed Mushrooms", price: 1, veg: !0, vegan: !0 },
    { name: "Frizzled Onions", price: 1, veg: !0, vegan: !0 },
    { name: "Grilled Onion", price: 0.75, veg: !0, vegan: !0, type: ["onion"] },
    { name: "House Slaw", price: 0.75, veg: !0, vegan: !0 },
    { name: "Sliced Jalapeño", price: 0.75, veg: !0, vegan: !0 },
    { name: "Mustard Pickles", price: 0.75, veg: !0, vegan: !0, type: ["pickle"] },
    { name: "Fried Pickles", price: 1, veg: !0, vegan: !0, type: ["pickle"] },
    { name: "Arugula", price: 0.75, veg: !0, vegan: !0 },
    { name: "Potato Chips", price: 0.75, veg: !0, vegan: !0 },
    { name: "Avocado", price: 1.5, veg: !0, vegan: !0 },
    { name: "Fried Egg", price: 1.5, veg: !0, vegan: !1 },
    { name: "Turkey Chili", price: 1.5, veg: !1, vegan: !1 },
    { name: "Bacon", price: 2, veg: !1, vegan: !1 },
    { name: "Fried Proscuitto", price: 2, veg: !1, vegan: !1 },
    { name: "Pork Belly", price: 2.5, veg: !1, vegan: !1 },
    { name: "Espresso Bacon", price: 2.5, veg: !1, vegan: !1 },
    { name: "Andouille Sausage", price: 2.5, veg: !1, vegan: !1 },
    { name: "Short Rib", price: 3, veg: !1, vegan: !1 },
    { name: "North Country Bacon", price: 3.5, veg: !1, vegan: !1 },
    { name: "Duck Confit", price: 4, veg: !1, vegan: !1 },
    { name: "Hash Brown", price: 1, veg: !0, vegan: !0 },
  ],
};
!(function (e, a, n, r, i, t, c) {
  (e.GoogleAnalyticsObject = i),
    (e[i] =
      e[i] ||
      function () {
        (e[i].q = e[i].q || []).push(arguments);
      }),
    (e[i].l = 1 * new Date()),
    (t = a.createElement(n)),
    (c = a.getElementsByTagName(n)[0]),
    (t.async = 1),
    (t.src = r),
    c.parentNode.insertBefore(t, c);
})(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"),
  ga("create", "UA-82474020-1", "auto"),
  ga("send", "pageview");
var $el = {};
$(document).ready(function () {
  ($el = { settings: $("#settings"), submit: $("#generateBurger"), results: $("#results"), toggleSlide: $(".toggleSlide"), slideOut: $(".slideOut") }),
    $el.submit.click(function () {
      new Burger();
    }),
    $el.toggleSlide.click(function () {
      $el.slideOut.toggleClass("slideOut--open");
    });
});
var factorial = function (e) {
  return 0 !== e ? e * factorial(e - 1) : 1;
},
  random = function (e, a) {
    return Math.floor(Math.random() * (a - e + 1)) + e;
  },
  combinations = function (e, a) {
    return factorial(e) / (factorial(a) / factorial(e - a));
  },
  burgernatorics = (function (e, a, n) {
    for (var r = 1, i = e, t = 1, c = a, g = 1, s = n; e--;) r += combinations(i, e);
    for (; a--;) t += combinations(c, a);
    for (; n--;) g += combinations(s, n);
    return menu.burgers.length * menu.buns.length * r * t * g;
  })(
    (function (e, a, n) {
      var r,
        i = e.getElementsByTagName(a)[0];
      e.getElementById(n) || ((r = e.createElement(a)), (r.id = n), (r.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5"), i.parentNode.insertBefore(r, i));
    })(document, "script", "facebook-jssdk")
  );
(window.twttr = (function (e, a, n) {
  var r,
    i = e.getElementsByTagName(a)[0],
    t = window.twttr || {};
  return e.getElementById(n)
    ? t
    : ((r = e.createElement(a)),
      (r.id = n),
      (r.src = "https://platform.twitter.com/widgets.js"),
      i.parentNode.insertBefore(r, i),
      (t._e = []),
      (t.ready = function (e) {
        t._e.push(e);
      }),
      t);
})(document, "script", "twitter-wjs")),
  ($.fn.serializeObject = function () {
    var e = {},
      a = this.serializeArray();
    return (
      $.each(a, function () {
        void 0 !== e[this.name] ? (e[this.name].push || (e[this.name] = [e[this.name]]), e[this.name].push(this.value || "")) : (e[this.name] = this.value || "");
      }),
      e
    );
  });
