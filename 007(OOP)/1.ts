// // Class
// class nhanVatGame {

//     // propety
//     ten_nhan_vat : string;
//     slogan : string;
//     mau : number;

//     // construtor
//     // để tạo ra instance
//     constructor(ten_nhan_vat : string, slogan : string, mau: number) {
//         this.ten_nhan_vat = ten_nhan_vat;
//         this.slogan = slogan;
//         this.mau = mau;
//     }

//     chay() {
//         this.mau = this.mau -50;
//     }

//     gioithieu() {
//         console.log(`${this.slogan}`)
//     }

//     hienthiten() {
//         return `Tên nhân vật là : ${ this.ten_nhan_vat } , 
//         sologan là : ${this.slogan} , chỉ số máu là : ${this.mau}`
//     }

//     chem(kynang: string) { 
//         console.log(kynang)
//     }

// }

// // Tạo 1 instance
// var nhanvat1 = new nhanVatGame("goku","Hi i am goku",100);

// console.log(nhanvat1.hienthiten())

// nhanvat1.gioithieu();

// nhanvat1.chem("Kamehameha");

// // Tạo 1 instance
// var nhanvat2 = new nhanVatGame("Yami Yugi","it's time to duel",1000);

// console.log(nhanvat2.hienthiten())

// nhanvat2.gioithieu();

// nhanvat2.chem("Dark Magic Atack");


class dienthoai {
    ten: string;
    gia: number;
    danhgia: number;
    mausac: string[];

    constructor(ten : string,gia : number,danhgia : number,mausac : string[]) {
        this.ten = ten;
        this.gia = gia;
        this.danhgia = danhgia;
        this.mausac = mausac;
    }

    showNoiDung() {
        return `Sản phẩm : ${ this.ten } 
        , có giá là : ${ this.gia }
        , đánh giá : ${ this.danhgia } sao
        , có các màu ${this.mausac}
        `;
    }
}

var dthoai1 = new dienthoai("Samsung s8",19000.000,3,["Đỏ,Xanh,Vàng"]);

var dthoai2 = new dienthoai("Iphone",25000.000,5,["Đen,Đỏ,Tím"]);

console.log(dthoai1.showNoiDung());
console.log(dthoai2.showNoiDung());
