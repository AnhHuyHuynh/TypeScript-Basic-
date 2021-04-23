export class QuanLyGioHang {
    constructor() {
        // Thuộc tính
        this.CacSanPhamGioHang = [];
    }
    xemGioHang() {
        return this.CacSanPhamGioHang;
    }
    tangSoLuongSanPham(motSanpham) {
        // biết được vị trí của nó ở đâu trong mảng sản phẩm
        var index = this.checksptruockhithem(motSanpham);
        var soluonghientai = this.CacSanPhamGioHang[index].laysoluong();
        soluonghientai += 1;
        this.CacSanPhamGioHang[index].thayDoiSoLuong(soluonghientai);
    }
    addSanPhamTrongGioHang(motsanpham) {
        this.CacSanPhamGioHang.push(motsanpham);
    }
    ;
    checksptruockhithem(moitsanpham) {
        for (var i = 0; i < this.CacSanPhamGioHang.length; i++) {
            if (this.CacSanPhamGioHang[i].laySanPham().id === moitsanpham.id) {
                // có sản phẩm trong giỏ hàng rùi
                return i;
            }
        }
        return -1;
    }
    updateSanPhamTrongGioHang(motsanpham, soluong) {
        // kiem tra mang
        for (var i = 0; i < this.CacSanPhamGioHang.length; i++) {
            var idSanPhamGioHang = this.CacSanPhamGioHang[i].laySanPham().id;
            if (idSanPhamGioHang === motsanpham.id) {
                this.CacSanPhamGioHang[i].thayDoiSoLuong(soluong);
            }
        }
    }
    ;
    XoaSanPhamTrongGioHang(motsanpham) {
        for (let i = 0; i < this.CacSanPhamGioHang.length; i++) {
            if (this.CacSanPhamGioHang[i].laySanPham().id === motsanpham.id) {
                this.CacSanPhamGioHang.splice(i, 1);
            }
        }
    }
    ;
    tinhsoluongspTrongGioHang() {
        var soluong = 0;
        // Duyệt cả mảng tất cả sản phẩm trong giỏ hàng,xem số lượng,cộng dồn lại
        for (let i = 0; i < this.CacSanPhamGioHang.length; i++) {
            soluong += this.CacSanPhamGioHang[i].laysoluong();
        }
        // het for, duyet het cac san pham , soluong = tongsosanpham
        return soluong;
    }
    ;
    tinhgiaTrongGioHang() {
        var congdon = 0;
        for (var i = 0; i < this.CacSanPhamGioHang.length; i++) {
            var gia = this.CacSanPhamGioHang[i].laySanPham().gia;
            var soluong = this.CacSanPhamGioHang[i].laysoluong();
            gia = gia * soluong;
            congdon += gia;
        }
        return congdon.toString();
    }
    ;
    hienThiToanBoSanPhamTrongGioHang() {
        var giohangHTML = "";
        // lấy từ phần tử trong mảng CacSanPhamGioHang
        this.CacSanPhamGioHang.forEach(sanpham => {
            giohangHTML += `<div class="card mb-3">
                                <div class="row motsanpham card-body">
                                    <div class="col-sm-2">
                                    <img src="Images/${sanpham.laySanPham().anh}" alt="" class="img-fluid">
                                    </div>
                                    <div class="col-sm-3">
                                        <a href="" class="tieude">${sanpham.laySanPham().ten}</a>
                                        <div class="noidungsp">${sanpham.laySanPham().mota}</div>
                                    </div>
                                    <div class="col-sm-2">
                                        <div class="gia1">
                                        ${sanpham.laySanPham().gia} <i class="fas fa-coins"></i>
                                        </div>
                                        <span class="badge badge-pill badge-warning"> -12%</span>
                                    </div>
                                    <div class="col-sm-2">
                                        <input type="number" data-idsanpham="${sanpham.laySanPham().id}" class="form-control soluongsp" min="1" value="${sanpham.laysoluong()}">
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="btn-group">
                                            <button type="button" data-idsanpham="${sanpham.laySanPham().id}" class="btn btn-danger xoasp">Delete</button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        `;
        });
        return giohangHTML;
    }
    ;
}
