// @ts-nocheck
class lable {
  lableFor: string;
  Title: string;
  constructor(forLable: string, lTitle: string) {
    this.lableFor = forLable;
    this.Title = lTitle;
  }
}

class input {
  id: string;
  constructor(iId: string) {
    this.id = iId;
  }
}

class field {
  Lable: lable; // lableFor: string; + Title: string;
  Input: input; // id: string

  constructor(fLable: lable) {
    this.Lable = fLable;
    this.Input = new input(fLable.lableFor);
  }
}

class myForm {
  fields: field[];

  constructor(myFields: field[]) {
    this.fields = myFields;
  }
}

let myLable = new lable('Naam', 'Wat is jou naam?');
let fldName = new field(myLable);

let lbl_surname = new lable('Surname', 'Wat is jou van?');
let fld_surname = new field(lbl_surname);

let mf = new myForm([]);
mf.fields.push(fldName, fld_surname);

//-----------------------------------------------
let a = 1;
let b = 2;

let x = function (aVar, bVar) {
  return aVar + bVar;
};

console.log('X is: ' + x(a, b));
//-------------------------------------
class myOld {
  a: string;
  constructor(aProp: string) {
    this.a = aProp;
  }
  doenIets() {
    console.log(this.a);
  }
}
let bb = new myOld('Return die kak!');

bb.doenIets();

//----------------------------------
class myAnother {
  word: string;
  som: number;

  constructor(anotherWord: string, anotherSom: number) {
    this.word = anotherWord;
    this.som = anotherSom;
  }
}
let test = new myAnother('Another String', 2); //instantiate by adding new
test.som;

//--------------------------------------
class leg {
  kleur: string;

  constructor(kiesKleur: string) {
    this.kleur = kiesKleur;
  }

  bouMeubel() {
    console.log(this.kleur);
  }
}

class chair {
  my_leg: leg;
  my_table: table;
  kleur: string;
  nr: number;
  constructor(blah_leg: leg, blah_table: table, blah_kleur: string, Nr: number) {
    this.my_leg = blah_leg;
    this.my_table = blah_table;
    this.kleur = blah_kleur;
    this.nr = Nr;
  }
}
//--------------------------------------
//--▼ Not Compatible with Strict Mode ▼--//
class table {
  // my_legs: leg[];
  // my_chairs: Array<chair>;
  constructor(public tbl_legs: leg[], tbl_chairs: Array<chair>) {
    // this.my_legs = tbl_legs;
    // this.my_chairs = tbl_chairs;
  }
}

let tbl = new table();

let bChrOne = new chair(1);
let bChrTwo = new chair(2);
let bChrThree = new chair(3);
let bChrFour = new chair(4);

tbl.my_chairs = [bChrOne, bChrTwo, bChrThree, bChrFour];
tbl.my_chairs.forEach((c) => {
  c.kleur = 'Groen';
});

let c1 = tbl.my_chairs[0];
c1.kleur = 'groen';
tbl.my_chairs[0] = c1;
/*
tbl.my_chairs.push(bChrOne);
tbl.my_chairs.push(bChrTwo);
tbl.my_chairs.push(bChrThree);
tbl.my_chairs.push(bChrFour);
*/
//--------------------------------------
