// // Hàm trả về kiểu number
// function tinhtong() : number {
//     return 100 + 200;
// }
// console.log(tinhtong());
// // function trả về kiểu string
// function kieustring() : string {
//     return "Chào buổi sáng";
// }
// var x: string = kieustring();
// console.log(`${x}`);
// // function trả về kiểu mảng
// function mang(): string[] {
//     return ["Fia obline 4" ,
//      "Hiệp khách giang hờ" , 'Thiên long bát bộ'];
// }
// console.log(mang());
// // Kiểu mảng số
// function mamgso(): number[] {
//     return [4,6,7,8,9];
// }
// // mảng kiểu đối tượng (any)
// function doituong(): any {
//     var nhatvatgame = {
//         ten : "Yami Yugi",
//         kynang : {
//             kynang1 : "Hack bài",
//             kynang2 : "Sức mạnh tình bạn"
//         },
//     }
//     return nhatvatgame;
// }
// console.log(doituong());
var x;
var y;
var tbc;
// function tinn1(): void {
//     x = 10;
//     y = 15;
//     tbc = (x +y)/2;
//     console.log(`Trung bình công của ${x} và ${y} là : ${tbc}`);
// }
// function tinh2():void {
//     x = 1000;
//     y = 722;
//     tbc = (x + y) / 2;
//     console.log(`Trung bình công của ${x} và ${y} là : ${tbc}`);
// }
// function tinh3():void {
//     x = 920;
//     y = 833;
//     tbc = (x + y) / 2;
//     console.log(`Trung bình công của ${x} và ${y} là : ${tbc}`);
// }
function tinhtcb(x, y) {
    var tbc = (x + y) / 2;
    console.log("Trung b\u00ECnh c\u00F4ng c\u1EE7a " + x + " v\u00E0 " + y + " l\u00E0 : " + tbc);
}
// tinh
tinhtcb(10, 15);
tinhtcb(1000, 722);
tinhtcb(920, 833);
tinhtcb(4, 7);
var z = function (x, y) {
    return "ch\u00E0o " + x + " n\u0103m nay b\u1EA1n " + y + " tu\u1ED5i ph\u1EA3i kh\u00F4ng";
};
var g = function (x, y) {
    return "ch\u00E0o " + x + " n\u0103m nay b\u1EA1n " + y + " tu\u1ED5i ph\u1EA3i kh\u00F4ng";
};
console.log(g("huy", 25));
// console.log(z("huy",25));
// khai báo function không phải function
var h = function (x) {
    return x + 10;
};
console.log(h(9));
function tinh6(x) {
    return x + 10;
}
console.log(tinh6(9));
