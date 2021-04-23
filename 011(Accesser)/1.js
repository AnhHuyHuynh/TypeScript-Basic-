var Hero = /** @class */ (function () {
    function Hero(_ten) {
        this._ten = _ten;
    }
    Object.defineProperty(Hero.prototype, "ten", {
        get: function () {
            return this._ten;
        },
        set: function (ten) {
            this._ten = ten;
        },
        enumerable: false,
        configurable: true
    });
    return Hero;
}());
var goku = new Hero("GoKu");
console.log(goku.ten);
// ten tuong sau khi doi
goku.ten = 'Kakarot';
console.log(goku.ten);
