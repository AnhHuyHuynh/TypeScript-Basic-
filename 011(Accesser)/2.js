var matkhau = "";
var Nguoi = /** @class */ (function () {
    function Nguoi() {
    }
    Object.defineProperty(Nguoi.prototype, "ten", {
        get: function () {
            if (matkhau === "Anh Huy cho số") {
                return this._ten;
            }
            else {
                return "Sai mật khẩu rùi ku ơi :v";
            }
        },
        set: function (v) {
            if (matkhau === "Anh Huy cho số") {
                this._ten = v;
            }
            else {
                this._ten = "Sai mật khẩu";
            }
        },
        enumerable: false,
        configurable: true
    });
    return Nguoi;
}());
var huy = new Nguoi();
matkhau = "Anh Huy cho số";
huy.ten = 'haa';
console.log(huy.ten);
// matkhau = "Anh huy đéo cho"
// // set
// huy.ten = "AnhHuy";
// console.log(huy.ten);
