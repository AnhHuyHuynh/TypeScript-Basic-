var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Giống như bản vẽ nháp mô tả tính năng của class
var DienThoai = /** @class */ (function () {
    function DienThoai() {
    }
    return DienThoai;
}());
// Chính xác hóa nó băng cách sử dụng bản thiết kế abstact
var Android = /** @class */ (function (_super) {
    __extends(Android, _super);
    function Android() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Android.prototype.guitinnhan = function () {
        console.log("Gửi tin nhắn trong android thành công");
    };
    Android.prototype.goidienthoai = function () {
        return "gọi điện thoại trong android thành công";
    };
    return Android;
}(DienThoai));
var samsung = new Android();
samsung.guitinnhan();
console.log(samsung.goidienthoai());
