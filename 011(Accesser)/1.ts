class Hero {

    private _ten: string;

    constructor(_ten:string) {
        this._ten = _ten;
    }

    
    public get ten() : string {
        return this._ten;
    }
    
    
    public set ten(ten : string) {
        this._ten = ten;
    }
    

}

var goku = new Hero("GoKu");
console.log(goku.ten);

// ten tuong sau khi doi
goku.ten = 'Kakarot';
console.log(goku.ten);