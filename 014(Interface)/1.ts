// Interface cơ bản
interface Nguoi {
    tuoi:number;
    ten?:string
}


function xemtt(motnguoi:Nguoi)
{
    console.log(`Xin chào ${motnguoi.ten}, năm nay bạn ${motnguoi.tuoi} phải không`);
}

// xemtt({tuoi:25,ten:"Huyha"});

// interface Class --> quy định khi có 1 class tạo từ interface này 
// thì class đó phải có tối thiểu đủ các thuộc tính
interface Tuonginterface {
    ten: string,
    mau:number,
    satthuong:number,
    mota:string

    xemtuong():void;
    donkynang(mau:number) : any;
    bienve():void;
}

class Tuong implements Tuonginterface {
    ten: string;
    mau: number;
    satthuong:number;
    mota: string;
    mana:number;

    xemtuong():void {
        console.log("xem")
    }
    
    donkynang(mau:number): any {
        console.log("Đòn kỹ năng")
    }

    bienve():void {
        console.log('Biến về')
    }
    

}