// // String
// let chu: string;
// chu = "Huy";
// var chu2: string;
// chu2 = "Sinh năm 1996";
// console.log(`Xin chào ${chu}. có phải bạn ${chu2}`);
// // number
// let x: number;
// x = 10;
// console.log(x);
// // kieu dữ liệu mảng
// // Mảng chữ
// var hocvien: string[];
// hocvien = ["Huỳnh","anh","Huy"];
// for(var i=0;i<hocvien.length;i++) {
//     console.log(hocvien[i])
// }
// // kieu so
// var songuyen: number[];
// songuyen = [2,4,6,8];
// for (let i = 0; i < songuyen.length; i++) {
//     console.log(songuyen[i])
// }
// // Kiểu đúng sai(boolean)
// var flag : boolean;
// flag = true;
// console.log(flag);
// // Kiểu enum(gián trạng thái cho 1 phần tử)
//  enum trangThaiKhachHang {
//     moidangky = 10,
//     dangthutien = 100,
//     hoanthanh = 1000
// };
// console.log(trangThaiKhachHang.dangthutien);
// // Kiểu tulue(kiểu mảng hôn tạp vừa số vừa chữ)
// var tuple1: [string,number,string];
// tuple1 = ["HuyHa",25,"Chuyên gia nói đạo lý"];
// console.log(tuple1[0]);
// kiểu any
var x;
x = {
    ten: "huỳnh anh huy",
    price: 1000.000,
    hocvan: {
        ten: "2",
        school: "1"
    }
};
console.log(x);
// kieu du lieu void
function tinhtoan() {
    console.log("day la vi du ve kieu void");
}
tinhtoan();
