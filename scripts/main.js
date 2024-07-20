function Burger() {
  this.prune = function () {
    for (var n = this.length; n--;) {
      ("omnivore" !== e.diet && !0 !== this[n][e.diet] || a < this[n].price) && this.splice(n, 1);
    }
  };
  this.message = function (e) {
    $el.results.html(e);
  };
  this.copy = function (e) {
    return JSON.parse(JSON.stringify(e));
  };
  this.pick = function (e) {
    var a = random(0, e.length - 1),
      n = this.copy(e[a]);
    return e.splice(a, 1), n;
  };
  this.generate = function () {
    var r, i = [],
      t = {
        cheese: 2,
        sauce: 2,
        mayo: 1,
        bbq: 1,
        pickle: 1,
        onion: 1,
        toppings: -1
      };
    if ($.each([n.burgers], this.prune), !n.burgers.length) return !1;
    r = this.pick(n.burgers), i.push(r.name.toLowerCase()), a -= r.price, $.each([n.buns], this.prune), r = this.pick(n.buns), i.push(r.name.toLowerCase() + " bun"), $.each([n.toppings], this.prune);
    e: for (; ;) {
      if (r = this.pick(n.toppings), a < r.price) break;
      if ("on" !== e.hardMode && r.type)
        for (var c = r.type.length - 1; c >= 0; c--) {
          var g = r.type[c];
          if (void 0 !== t[g] && 0 === t[g]) continue e;
        }
      if (i.push(r.name.toLowerCase()), a -= r.price, "on" !== e.hardMode && r.type)
        for (var c = r.type.length - 1; c >= 0; c--) g = r.type[c], void 0 !== t[g] && t[g]--;
      if (random(0, 99) < 15 && "on" !== e.hardMode) break;
    }
    return i;
  };
  var e = $el.settings.serializeObject(),
    a = e.budget,
    n = this.copy(menu),
    r = this.generate();
  r ? this.message("Try a " + r.join(", ") + ".") : this.message("Sorry, no burgers matched your parameters");
}

var menu = {
  burgers: [{
    name: "House Burger",
    price: 10,
    veg: !1,
    vegan: !1
  }, {
    name: "Local, Grass-fed Burger",
    price: 11,
    veg: !1,
    vegan: !1
  }, {
    name: "American Kobe-style Burger",
    price: 14,
    veg: !1,
    vegan: !1
  }, {
    name: "Veggie Burger",
    price: 9,
    veg: !0,
    vegan: !0
  }, {
    name: "Chicken Breast",
    price: 8,
    veg: !1,
    vegan: !1
  }, {
    name: "Yellowfin Tuna Burger",
    price: 12,
    veg: !1,
    vegan: !1
  }, {
    name: "Lamb Burger",
    price: 10,
    veg: !1,
    vegan: !1
  }, {
    name: "Turkey Burger",
    price: 9,
    veg: !1,
    vegan: !1
  }, {
    name: "Bison Burger",
    price: 12,
    veg: !1,
    vegan: !1
  }, {
    name: "Salmon Burger",
    price: 12,
    veg: !1,
    vegan: !1
  }],
  buns: [{
    name: "Sesame",
    price: 0,
    veg: !0,
    vegan: !0
  }, {
    name: "Brioche",
    price: .5,
    veg: !0,
    vegan: !1
  }, {
    name: "Herb Ciabatta",
    price: .5,
    veg: !0,
    vegan: !0
  }, {
    name: "Multigrain",
    price: .75,
    veg: !0,
    vegan: !0
  }],
  toppings: [{
    name: "American Cheese",
    price: .75,
    veg: !0,
    vegan: !1,
    type: ["cheese"]
  }, {
    name: "Cheddar",
    price: .75,
    veg: !0,
    vegan: !1,
    type: ["cheese"]
  }, {
    name: "Smoked Gouda",
    price: .75,
    veg: !0,
    vegan: !1,
    type: ["cheese"]
  }, {
    name: "Sharp Provolone",
    price: .75,
    veg: !0,
    vegan: !1,
    type: ["cheese"]
  }, {
    name: "Pepper Jack",
    price: .75,
    veg: !0,
    vegan: !1,
    type: ["cheese"]
  }, {
    name: "Gruyère",
    price: 1.5,
    veg: !0,
    vegan: !1,
    type: ["cheese"]
  }, {
    name: "Herb Goat Cheese",
    price: 1.5,
    veg: !0,
    vegan: !1,
    type: ["cheese"]
  }, {
    name: "Habanero Cheddar",
    price: 1.5,
    veg: !0,
    vegan: !1,
    type: ["cheese"]
  }, {
    name: "Smoked Mozzarella",
    price: 1.5,
    veg: !0,
    vegan: !1,
    type: ["cheese"]
  }, {
    name: "Whiskey Cheddar",
    price: 1.5,
    veg: !0,
    vegan: !1,
    type: ["cheese"]
  }, {
    name: "Grain Mustard Cheddar",
    price: 2,
    veg: !0,
    vegan: !1,
    type: ["cheese"]
  }, {
    name: "Great Blue Hill Cheese",
    price: 2.5,
    veg: !0,
    vegan: !1,
    type: ["cheese"]
  }, {
    name: "Parmesan Crisp",
    price: .75,
    veg: !0,
    vegan: !1,
    type: ["cheese"]
  }, {
    name: "Horseradish Mayo",
    price: .5,
    veg: !0,
    vegan: !1,
    type: ["mayo", "sauce"]
  }, {
    name: "Cilantro Mayo",
    price: .5,
    veg: !0,
    vegan: !1,
    type: ["mayo", "sauce"]
  }, {
    name: "Garlic Mayo",
    price: .5,
    veg: !0,
    vegan: !1,
    type: ["mayo", "sauce"]
  }, {
    name: "BBQ Sauce",
    price: .5,
    veg: !0,
    vegan: !0,
    type: ["bbq", "sauce"]
  }, {
    name: "Whiskey BBQ Sauce",
    price: .5,
    veg: !1,
    vegan: !1,
    type: ["bbq", "sauce"]
  }, {
    name: "Ranch",
    price: .5,
    veg: !0,
    vegan: !1,
    type: ["mayo", "sauce"]
  }, {
    name: "Sriracha Aioli",
    price: .5,
    veg: !0,
    vegan: !1,
    type: ["mayo", "sauce"]
  }, {
    name: "Truffle Aioli",
    price: .5,
    veg: !0,
    vegan: !1,
    type: ["mayo", "sauce"]
  }, {
    name: "Mac Sauce",
    price: .5,
    veg: !0,
    vegan: null,
    type: ["sauce"]
  }, {
    name: "Creamy Frank's Red Hot",
    price: .5,
    veg: !0,
    vegan: !1,
    type: ["sauce"]
  }, {
    name: "Honey Mustard",
    price: .5,
    veg: !0,
    vegan: !0,
    type: ["sauce", "mustard"]
  }, {
    name: "Blackberry Champagne BBQ Sauce",
    price: .5,
    veg: !0,
    vegan: !0,
    type: ["bbq", "sauce"]
  }, {
    name: "Blue Cheese Dressing",
    price: .75,
    veg: !0,
    vegan: !1,
    type: ["sauce"]
  }, {
    name: "Sweet Chili Ranch",
    price: .5,
    veg: !0,
    vegan: !1,
    type: ["mayo", "sauce"];
