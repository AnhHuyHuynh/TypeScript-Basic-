import { sanPham } from './sanpham';

export class SanPhamGioHang {

    // thuộc tính
    private sanpham: sanPham;
    private soluong:number;

    constructor(sanpham:sanPham, soluong:number = 1) {
        this.sanpham = sanpham;
        this.soluong = soluong;
    }

    public laySanPham():sanPham {
        return this.sanpham;
    }

    public thayDoiSoLuong(soluong:number):void {
        this.soluong = soluong;
    }

    public laysoluong():number {
        return this.soluong;
    }
}