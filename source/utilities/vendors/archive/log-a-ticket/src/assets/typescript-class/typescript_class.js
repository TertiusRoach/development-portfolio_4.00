var lable = (function () {
    function lable(forLable, lTitle) {
        this.lableFor = forLable;
        this.Title = lTitle;
    }
    return lable;
}());
var input = (function () {
    function input(iId) {
        this.id = iId;
    }
    return input;
}());
var field = (function () {
    function field(fLable) {
        this.Lable = fLable;
        this.Input = new input(fLable.lableFor);
    }
    return field;
}());
var myForm = (function () {
    function myForm(myFields) {
        this.fields = myFields;
    }
    return myForm;
}());
var myLable = new lable('Naam', 'Wat is jou naam?');
var fldName = new field(myLable);
var lbl_surname = new lable('Surname', 'Wat is jou van?');
var fld_surname = new field(lbl_surname);
var mf = new myForm([]);
mf.fields.push(fldName, fld_surname);
var a = 1;
var b = 2;
var x = function (aVar, bVar) {
    return aVar + bVar;
};
console.log('X is: ' + x(a, b));
var myOld = (function () {
    function myOld(aProp) {
        this.a = aProp;
    }
    myOld.prototype.doenIets = function () {
        console.log(this.a);
    };
    return myOld;
}());
var bb = new myOld('Return die kak!');
bb.doenIets();
var myAnother = (function () {
    function myAnother(anotherWord, anotherSom) {
        this.word = anotherWord;
        this.som = anotherSom;
    }
    return myAnother;
}());
var test = new myAnother('Another String', 2);
test.som;
var leg = (function () {
    function leg(kiesKleur) {
        this.kleur = kiesKleur;
    }
    leg.prototype.bouMeubel = function () {
        console.log(this.kleur);
    };
    return leg;
}());
var chair = (function () {
    function chair(blah_leg, blah_table, blah_kleur, Nr) {
        this.my_leg = blah_leg;
        this.my_table = blah_table;
        this.kleur = blah_kleur;
        this.nr = Nr;
    }
    return chair;
}());
var table = (function () {
    function table(tbl_legs, tbl_chairs) {
        this.tbl_legs = tbl_legs;
    }
    return table;
}());
var tbl = new table();
var bChrOne = new chair(1);
var bChrTwo = new chair(2);
var bChrThree = new chair(3);
var bChrFour = new chair(4);
tbl.my_chairs = [bChrOne, bChrTwo, bChrThree, bChrFour];
tbl.my_chairs.forEach(function (c) {
    c.kleur = 'Groen';
});
var c1 = tbl.my_chairs[0];
c1.kleur = 'groen';
tbl.my_chairs[0] = c1;
//# sourceMappingURL=typescript_class.js.map