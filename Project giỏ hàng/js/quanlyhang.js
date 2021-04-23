import { sanPham } from './sanpham.js';
export class QuanLyHang {
    constructor() {
        this.hang = []; // dùng để nhận dữ liệu từ api
        // vì không có php nên sẽ tạo data tĩnh(tạo băng tay)
        var sanpham1 = new sanPham(1, "Mô Hình Naruto NA01041", 19000, "Thích hợp để bàn, sưu tập, hoặc làm quà tặng", false, "3.jpg");
        this.addSanPham(sanpham1);
        var sanpham2 = new sanPham(2, "Mô Hình Pain thiên đạo PA01041", 279000, "Thích hợp để bàn, sưu tập, hoặc làm quà tặng", true, "4.jpg");
        this.addSanPham(sanpham2);
        var sanpham3 = new sanPham(3, "Mô hình Naruto Hokage Đệ Nhị Senju Tobirama", 179000, "Thích hợp để bàn, sưu tập, hoặc làm quà tặng", true, "5.jpg");
        this.addSanPham(sanpham3);
        var sanpham4 = new sanPham(4, "Mô Hình Madara Naruto NA01026", 199000, "Thích hợp để bàn, sưu tập, hoặc làm quà tặng", true, "1.jpg");
        this.addSanPham(sanpham4);
        var sanpham5 = new sanPham(5, "Mô Hình Hokage dệ nhât Senju Hasirama", 210000, "Thích hợp để bàn, sưu tập, hoặc làm quà tặng", true, "2.jpg");
        this.addSanPham(sanpham5);
    }
    // do tạo fake data nên không cần dùng đến
    // public getCacSanPham():sanPham[] {
    //     return this.hang;
    // }
    getsanphamByID(idsanpham) {
        // lấy sản phẩm dư vào ID
        for (let i = 0; i < this.hang.length; i++) {
            // Kiểm tra
            if (this.hang[i].id == idsanpham) {
                return this.hang[i];
            }
        }
        // het vòng lặp thì không có sản phẩm trùng trong dữ liệu
        return 0;
    }
    addSanPham(sp) {
        // dùng để đẩy dữ liệu nhận được từ api
        // vào trong phần tử mảng hàng
        // Cách 1
        this.hang.push(sp); // hàm push là hàm thao tác với mảng
        // Cách 2
        // this.hang[this.hang.length] = sp;
    }
    showSanPham() {
        // Lấy sản phẩm in ra dưới dạng HTML và đặt vào giao diện 
        var danhsachsanphamHtml = "";
        if (this.hang.length === 0) {
            return "Sản phẩm đang dược cập nhật";
        }
        else {
            // duyệt mảng hàng
            for (let i = 0; i < this.hang.length; i++) {
                danhsachsanphamHtml += `<div class="col-sm-4 pb-3">
                <div class="card _1spkhac id-${this.hang[i].id}">
                    <img class="img-fluid" src="Images/${this.hang[i].anh}" >
                    <div class="card-body">
                        <a href="" class="tiieudespkha">${this.hang[i].ten}</a>
                        <p class="card-text mota">${this.hang[i].mota}.</p>
                        <b>${this.hang[i].gia} <i class="fas fa-coins"></i></b>`;
                // còn hàng
                if (this.hang[i].tinhtrang === true) {
                    danhsachsanphamHtml += `<button data_idsp="${this.hang[i].id}" class="btn btn-outline-primary btn-block btn-outline nutmuangay">Mua ngay</button>
                                </div>
                            </div>
                           </div>
                           `;
                }
                // hết hàng
                else {
                    danhsachsanphamHtml += `<button class="btn disabled btn-outline-danger btn-block btn-outline">Hết Hàng</button>
                                </div>
                            </div>
                           </div>`;
                }
            } // het for
            return danhsachsanphamHtml;
        }
    }
}
