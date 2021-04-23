class Tuong {

    ten: string;
    motatuong: string;
    kynang: string[];

    constructor(ten: string,motatuong: string,
        kynang: string[]) {
        this.ten = ten;
        this.motatuong = motatuong;
        this.kynang = kynang;
    }

    showThongTin(): void {
        var kn: string = '';
        for (var i = 0; i < this.kynang.length; i++) {
             kn+= this.kynang[i];
             kn+= " | ";
        }

        var thongSoTuong = `Tên tướng : ${this.ten},
        Mô tả : ${this.motatuong}
        Kỹ năng tướng : ${kn}`;

        console.log(thongSoTuong);
    }
}

var ashe = new Tuong("Ashe","Cung Băng",
["Băng Tiễn","Chú Tâm Tiễn","Tán Xạ Tiễn","Ưng Tiễn","Đại Băng Tiễn"]);

ashe.showThongTin();

var ahri = new Tuong("Ahri","Hồ Li Chín Đuôi",["Mị Lực Vastaya","Quả Cầu Ma Thuật","Lửa Hồ Li","Hôn Gió","Phi Hồ"]);
ahri.showThongTin();

class SatThu extends Tuong {

    donsatthu : string;
    
    constructor(ten: string,motatuong: string,
        kynang: string[], donsatthu: string) {
        super(ten,motatuong,kynang);
        this.donsatthu = donsatthu;
    }

    showThongTin(): void {
        // var kn: string = '';
        // for (var i = 0; i < this.kynang.length; i++) {
        //      kn+= this.kynang[i];
        //      kn+= " | ";
        // }

        // return `Tên tướng : ${this.ten},
        // Mô tả : ${this.motatuong}
        // Kỹ năng tướng : ${kn}
        // Đòn sát thủ : ${this.donsatthu}`
        super.showThongTin(); // Sử dụng lại super class bố

        // nhưng định nghĩa thêm cái của con
        console.log(" Đòn sát thủ của tướng này là :" + this.donsatthu);
    }

}

// Sư dụng class SatThu
var yasuo = new SatThu("Yasuo","Kẻ Bất Dung Thứ",["Bão Kiếm","Tường Gió","Quét Kiếm","Trăn Trối"],"Đạo của Lãng Khách");
yasuo.showThongTin();

var kayle = new SatThu("Kayle","Thiên Thần Phán Quyết",
["Trừng Phạt","Ban Phước","Công Lí Thịnh Nộ","Bất Tử Hộ Thân"],"Nhiệt Huyết Thần Thánh")
kayle.showThongTin();


