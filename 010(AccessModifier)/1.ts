class KhoaHoc {

    public id:number;
    private ten:string;
    public dodai: number;

    constructor(id:number,ten:string,dodai:number) {
        this.id = id;
        this.ten = ten;
        this.dodai = dodai;
    }

    public xemKhoaHoc() {
        console.log(`${this.ten}`)
        console.log(`ID khóa hoc là : ${this.id}
        Tên khóa học : ${this.ten}
        Độ dài : ${this.dodai} tiếng`)
    }

    test2() {
        console.log(`${this.ten}`)
        console.log(`Có nghĩa là private thì access được ở trong class bố`)
    }
}

class KhoaHocLapTrinh extends KhoaHoc {

    public filedinhkem : string;

    constructor(id:number,ten:string,dodai:number,filedinhkem:string) {
        super(id,ten,dodai);
        this.dodai = dodai;
    }

    public xemKhoaHoc() {
        super.xemKhoaHoc();
        console.log(`FILE đính kèm : ${this.filedinhkem} `)
    }

    test1() {
        console.log(`${this.ten}`)
    }

}

// test public

// Test trong class
let khoa8 = new KhoaHoc(8,"Làm chủ Excel",6);

let khoa9 = new KhoaHocLapTrinh(9,"Học lập trình typescript",10,"TypeScript.ts");

console.log(khoa8.ten)

khoa8.test2() // bên ngoài class

// test private



