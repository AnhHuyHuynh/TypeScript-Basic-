var matkhau : string = "";

class Nguoi {
    private _ten : string;

    
    public get ten() : string {
        if(matkhau === "Anh Huy cho số") {
            return this._ten;
        }
        else {
            return "Sai mật khẩu rùi ku ơi :v"
        }
    }

    
    public set ten(v : string) {

        if(matkhau === "Anh Huy cho số") {
            this._ten = v;
        }
        else 
        {
            this._ten = "Sai mật khẩu"
        }

    }

}

var huy = new Nguoi();
matkhau = "Anh Huy cho số"
huy.ten = 'haa'
console.log(huy.ten);

// matkhau = "Anh huy đéo cho"
// // set
// huy.ten = "AnhHuy";
// console.log(huy.ten);