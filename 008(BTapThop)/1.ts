enum state {
    Create = 10,
    Processing,
    Finish
}

class congViec {

    static id: number = 1;
    static ten: string = "TypeScript";
    static status: state = 11;

    // constructor(id:number,ten:string,status:state) {
    //     this.id = id;
    //     this.ten = ten;
    //     this.status = status;
    // }

    static thongtin() {
        return `ID : ${this.id} - Tên : ${this.ten} - Trạng thái : ${this.status}`
    }

    static testStatic() {
        console.log(`Test static thôi :v`);
    }
}

// let cv1 = new congViec(1,"Học HTML",state.Processing);
// console.log(cv1.thongtin())
// static giúp không cần tạo ra intance mà vãn có thể sử dụng được 
// các thuộc tính và phương thức
// let cv1 = new congViec(1,"Học HTML",state.Processing);
congViec.testStatic();


