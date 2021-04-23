export class SanPhamGioHang {
    constructor(sanpham, soluong = 1) {
        this.sanpham = sanpham;
        this.soluong = soluong;
    }
    laySanPham() {
        return this.sanpham;
    }
    thayDoiSoLuong(soluong) {
        this.soluong = soluong;
    }
    laysoluong() {
        return this.soluong;
    }
}
