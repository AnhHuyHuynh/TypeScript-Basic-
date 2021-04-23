var state;
(function (state) {
    state[state["Create"] = 10] = "Create";
    state[state["Processing"] = 11] = "Processing";
    state[state["Finish"] = 12] = "Finish";
})(state || (state = {}));
var congViec = /** @class */ (function () {
    function congViec() {
    }
    // constructor(id:number,ten:string,status:state) {
    //     this.id = id;
    //     this.ten = ten;
    //     this.status = status;
    // }
    congViec.thongtin = function () {
        return "ID : " + this.id + " - T\u00EAn : " + this.ten + " - Tr\u1EA1ng th\u00E1i : " + this.status;
    };
    congViec.testStatic = function () {
        console.log("Test static th\u00F4i :v");
    };
    congViec.id = 1;
    congViec.ten = "TypeScript";
    congViec.status = 11;
    return congViec;
}());
// let cv1 = new congViec(1,"Học HTML",state.Processing);
// console.log(cv1.thongtin())
// static giúp không cần tạo ra intance mà vãn có thể sử dụng được 
// các thuộc tính và phương thức
// let cv1 = new congViec(1,"Học HTML",state.Processing);
congViec.testStatic();
