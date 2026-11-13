declare class lable {
    lableFor: string;
    Title: string;
    constructor(forLable: string, lTitle: string);
}
declare class input {
    id: string;
    constructor(iId: string);
}
declare class field {
    Lable: lable;
    Input: input;
    constructor(fLable: lable);
}
declare class myForm {
    fields: field[];
    constructor(myFields: field[]);
}
declare let myLable: lable;
declare let fldName: field;
declare let lbl_surname: lable;
declare let fld_surname: field;
declare let mf: myForm;
declare let a: number;
declare let b: number;
declare let x: (aVar: any, bVar: any) => any;
declare class myOld {
    a: string;
    constructor(aProp: string);
    doenIets(): void;
}
declare let bb: myOld;
declare class myAnother {
    word: string;
    som: number;
    constructor(anotherWord: string, anotherSom: number);
}
declare let test: myAnother;
declare class leg {
    kleur: string;
    constructor(kiesKleur: string);
    bouMeubel(): void;
}
declare class chair {
    my_leg: leg;
    my_table: table;
    kleur: string;
    nr: number;
    constructor(blah_leg: leg, blah_table: table, blah_kleur: string, Nr: number);
}
declare class table {
    tbl_legs: leg[];
    constructor(tbl_legs: leg[], tbl_chairs: Array<chair>);
}
declare let tbl: table;
declare let bChrOne: chair;
declare let bChrTwo: chair;
declare let bChrThree: chair;
declare let bChrFour: chair;
declare let c1: any;
