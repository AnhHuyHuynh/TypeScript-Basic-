// function xem(x:number) {
//     return x;
// }

// function xem2(x:string) {
//     return x;
// }

// console.log(xem(100));

// Generic tong function bình thường
// 
function xem4<T>(x:T) : T {
    return x;   
}
console.log(xem4<string>("đây là  hàm generic"));
// Generic trong class
class  MayTinh {
    static Xemthongtin<T>(x:T[]) :void {
        console.log(x)
    }

}

MayTinh.Xemthongtin<string>(["Macboox,HuyPro,HD"]);

MayTinh.Xemthongtin<any>(["Macboox",1,"HD",500]);
