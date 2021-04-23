var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tuong = /** @class */ (function () {
    function Tuong(ten, motatuong, kynang) {
        this.ten = ten;
        this.motatuong = motatuong;
        this.kynang = kynang;
    }
    Tuong.prototype.showThongTin = function () {
        var kn = '';
        for (var i = 0; i < this.kynang.length; i++) {
            kn += this.kynang[i];
            kn += " | ";
        }
        var thongSoTuong = "T\u00EAn t\u01B0\u1EDBng : " + this.ten + ",\n        M\u00F4 t\u1EA3 : " + this.motatuong + "\n        K\u1EF9 n\u0103ng t\u01B0\u1EDBng : " + kn;
        console.log(thongSoTuong);
    };
    return Tuong;
}());
var ashe = new Tuong("Ashe", "Cung Băng", ["Băng Tiễn", "Chú Tâm Tiễn", "Tán Xạ Tiễn", "Ưng Tiễn", "Đại Băng Tiễn"]);
ashe.showThongTin();
var ahri = new Tuong("Ahri", "Hồ Li Chín Đuôi", ["Mị Lực Vastaya", "Quả Cầu Ma Thuật", "Lửa Hồ Li", "Hôn Gió", "Phi Hồ"]);
ahri.showThongTin();
var SatThu = /** @class */ (function (_super) {
    __extends(SatThu, _super);
    function SatThu(ten, motatuong, kynang, donsatthu) {
        var _this = _super.call(this, ten, motatuong, kynang) || this;
        _this.donsatthu = donsatthu;
        return _this;
    }
    SatThu.prototype.showThongTin = function () {
        // var kn: string = '';
        // for (var i = 0; i < this.kynang.length; i++) {
        //      kn+= this.kynang[i];
        //      kn+= " | ";
        // }
        // return `Tên tướng : ${this.ten},
        // Mô tả : ${this.motatuong}
        // Kỹ năng tướng : ${kn}
        // Đòn sát thủ : ${this.donsatthu}`
        _super.prototype.showThongTin.call(this); // Sử dụng lại super class bố
        // nhưng định nghĩa thêm cái của con
        console.log(" Đòn sát thủ của tướng này là :" + this.donsatthu);
    };
    return SatThu;
}(Tuong));
// Sư dụng class SatThu
var yasuo = new SatThu("Yasuo", "Kẻ Bất Dung Thứ", ["Bão Kiếm", "Tường Gió", "Quét Kiếm", "Trăn Trối"], "Đạo của Lãng Khách");
yasuo.showThongTin();
var kayle = new SatThu("Kayle", "Thiên Thần Phán Quyết", ["Trừng Phạt", "Ban Phước", "Công Lí Thịnh Nộ", "Bất Tử Hộ Thân"], "Nhiệt Huyết Thần Thánh");
kayle.showThongTin();
