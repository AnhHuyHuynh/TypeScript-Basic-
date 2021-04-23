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
var KhoaHoc = /** @class */ (function () {
    function KhoaHoc(id, ten, dodai) {
        this.id = id;
        this.ten = ten;
        this.dodai = dodai;
    }
    KhoaHoc.prototype.xemKhoaHoc = function () {
        console.log("" + this.ten);
        console.log("ID kh\u00F3a hoc l\u00E0 : " + this.id + "\n        T\u00EAn kh\u00F3a h\u1ECDc : " + this.ten + "\n        \u0110\u1ED9 d\u00E0i : " + this.dodai + " ti\u1EBFng");
    };
    KhoaHoc.prototype.test2 = function () {
        console.log("" + this.ten);
        console.log("C\u00F3 ngh\u0129a l\u00E0 private th\u00EC access \u0111\u01B0\u1EE3c \u1EDF trong class b\u1ED1");
    };
    return KhoaHoc;
}());
var KhoaHocLapTrinh = /** @class */ (function (_super) {
    __extends(KhoaHocLapTrinh, _super);
    function KhoaHocLapTrinh(id, ten, dodai, filedinhkem) {
        var _this = _super.call(this, id, ten, dodai) || this;
        _this.dodai = dodai;
        return _this;
    }
    KhoaHocLapTrinh.prototype.xemKhoaHoc = function () {
        _super.prototype.xemKhoaHoc.call(this);
        console.log("FILE \u0111\u00EDnh k\u00E8m : " + this.filedinhkem + " ");
    };
    KhoaHocLapTrinh.prototype.test1 = function () {
        console.log("" + this.ten);
    };
    return KhoaHocLapTrinh;
}(KhoaHoc));
// test public
// Test trong class
var khoa8 = new KhoaHoc(8, "Làm chủ Excel", 6);
var khoa9 = new KhoaHocLapTrinh(9, "Học lập trình typescript", 10, "TypeScript.ts");
console.log(khoa8.ten);
khoa8.test2(); // bên ngoài class
// test private
