import { sanPham } from './sanpham.js';
import { QuanLyHang } from './quanlyhang.js';
import { QuanLyGioHang } from './quanlygiohang.js'
import { SanPhamGioHang} from './sanphamgiohang.js'

var tatcahang = new QuanLyHang();
var giohang = new QuanLyGioHang();

// đẩy sản phẩm từ dữ liệu vào giao diện
var divsanpham = document.getElementById("cacsanphamdamua");
divsanpham.innerHTML = tatcahang.showSanPham();

// đẩy sẩn phẩm giỏ hàng từ dữ liệu vào giao dien
var divsanphamgiohang =  document.getElementById("spgiohang");

// xủ lý event click button mua ngay
var cacnutmuangay = document.querySelectorAll('.nutmuangay');

var soluongsanphamgiohang = document.getElementById("số lượng");

var giaTamTinh = document.getElementById('giatamtinh');

var thanhTien = document.getElementById('thanhtien');

for (let i:number= 0; i < cacnutmuangay.length; i++) {
    
    // khi click vaò nút function
    cacnutmuangay[i].addEventListener("click", function() {

        // id sản phẩm
        var idSanPham = this.getAttribute('data_idsp');

        if(tatcahang.getsanphamByID(idSanPham) === 0) {
            console.log("chưa có hàng")
        }
        else {
            var sanphamlaydc:sanPham =  tatcahang.getsanphamByID(idSanPham);

            // kiểm tra xem có sản phẩm trong giỏ hàng chưa
            if(giohang.checksptruockhithem(sanphamlaydc) === -1) {

                // chưa có, thêm sản phẩm vào với số lượng 1
                var chuyendoisanphamsanggiohang:SanPhamGioHang = new SanPhamGioHang(sanphamlaydc,1);
                giohang.addSanPhamTrongGioHang(chuyendoisanphamsanggiohang);
            }

            // có rùi
            else {

                // update số lượng sản phẩm 
                giohang.tangSoLuongSanPham(sanphamlaydc);
            }

            thongbao('<div class="alert alert-success" role="alert"><i class="fas fa-check-square"></i><strong>Tên sản phẩm</strong> Đã được thêm vào giỏ hàng</div>');

            // hiển thị toàn bộ sản phẩm trong giỏ hàng
            divsanphamgiohang.innerHTML = giohang.hienThiToanBoSanPhamTrongGioHang();
            inDuLieuGioHang();

            // số lương sản phẩm
            var soluongs = document.getElementsByClassName('soluongsp');

            for (var i = 0; i < soluongs.length; i++) {
              
                soluongs[i].addEventListener('change',function() {
                    var soluong:number = parseInt(this.value);

                    // lay id san pham
                    var idsanpham:number = parseInt(this.getAttribute("data-idsanpham"));
                    var sanphamlayduoc: sanPham = tatcahang.getsanphamByID(idsanpham);
                    giohang.updateSanPhamTrongGioHang(sanphamlayduoc,soluong);

                    // // dữ liệu đã chuẩn. gọi hàm inDuLieuGioHang
                    inDuLieuGioHang();

                    thongbao('<div class="alert alert-danger" role="alert"><i class="fas fa-check-square"></i><strong>Gio hàng</strong> Đã được cập nhật</div>');
                })
            }

            // Xóa sản phẩm giỏ hàng
            XoaSanPhamGioHang();
        }
    })
    
}

function XoaSanPhamGioHang() {
    var btnXoaSp = document.getElementsByClassName('xoasp');
    for (var i = 0; i < btnXoaSp.length; i++) {

        btnXoaSp[i].addEventListener('click',function(this) {

                // lay id san pham
                var idsanpham:number = parseInt(this.getAttribute("data-idsanpham"));
                var sanphamlayduoc: sanPham = tatcahang.getsanphamByID(idsanpham);
                giohang.XoaSanPhamTrongGioHang(sanphamlayduoc);
                
                // hiển thị toàn bộ sản phẩm trong giỏ hàng
                divsanphamgiohang.innerHTML = giohang.hienThiToanBoSanPhamTrongGioHang();
                inDuLieuGioHang();

                thongbao('<div class="alert alert-danger" role="alert"><i class="fas fa-check-square"></i><strong>Sản phẩm</strong> đã được xóa thành công </div>');

                // Gọi lại hàm xóa sản phẩm Giỏ Hàng
                XoaSanPhamGioHang();
        });
    }
}

function inDuLieuGioHang():void {
    soluongsanphamgiohang.innerHTML = "(" + giohang.tinhsoluongspTrongGioHang() + "sản phẩm)";
    giaTamTinh.innerHTML = giohang.tinhgiaTrongGioHang();
    thanhTien.innerHTML = giohang.tinhgiaTrongGioHang();
}

function thongbao(noidung:string):void {
    var oThongBao = document.querySelector("#ndungtbao");
    oThongBao.innerHTML = noidung;
}

