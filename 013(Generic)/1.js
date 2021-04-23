// function xem(x:number) {
//     return x;
// }
// function xem2(x:string) {
//     return x;
// }
// console.log(xem(100));
// Generic tong function bình thường
// 
function xem4(x) {
    return x;
}
console.log(xem4("đây là  hàm generic"));
// Generic trong class
var MayTinh = /** @class */ (function () {
    function MayTinh() {
    }
    MayTinh.Xemthongtin = function (x) {
        console.log(x);
    };
    return MayTinh;
}());
MayTinh.Xemthongtin(["Macboox,HuyPro,HD"]);
MayTinh.Xemthongtin(["Macboox", 1, "HD", 500]);
