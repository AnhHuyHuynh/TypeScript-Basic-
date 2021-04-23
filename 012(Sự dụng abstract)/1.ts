// Giống như bản vẽ nháp mô tả tính năng của class
abstract  class DienThoai  {
    ten: string;
    
    abstract  guitinnhan() :  void;

    abstract  goidienthoai() : string;
}

// Chính xác hóa nó băng cách sử dụng bản thiết kế abstact
class Android extends DienThoai {
    
    guitinnhan() {
        console.log("Gửi tin nhắn trong android thành công");
    }

    goidienthoai() : string {
        return "gọi điện thoại trong android thành công";
    }
}

var samsung = new Android();
samsung.guitinnhan();
console.log(samsung.goidienthoai());