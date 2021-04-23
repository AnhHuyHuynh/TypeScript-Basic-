// kiểu any
var x : any;
x = {
    ten: "huỳnh anh huy",
    price: 1000.000,
    hocvan : {
        ten: "2",
        school: "1"
    }
}
console.log(x);

// kieu du lieu void
function tinhtoan():void {
    console.log("day la vi du ve kieu void");
}

tinhtoan();

// kieu 1 có 2 cách

// kieu1
let kieu1 : any;
kieu1 = "Day la vi du ve ep kieu trong ts";
console.log((<string>kieu1).length);

// kieu 2
console.log((kieu1 as string).length);

let xxx : number;
xxx = 140;
console.log( xxx.toString() + 60)
            