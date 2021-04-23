function xemtt(motnguoi) {
    console.log("Xin ch\u00E0o " + motnguoi.ten + ", n\u0103m nay b\u1EA1n " + motnguoi.tuoi + " ph\u1EA3i kh\u00F4ng");
}
var Tuong = /** @class */ (function () {
    function Tuong() {
    }
    Tuong.prototype.xemtuong = function () {
        console.log("xem");
    };
    Tuong.prototype.donkynang = function (mau) {
        console.log("Đòn kỹ năng");
    };
    Tuong.prototype.bienve = function () {
        console.log('Biến về');
    };
    return Tuong;
}());
