function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}
Square.prototype.isSqure = function () {
  if (this.a === this.b && this.b === this.c && this.c === this.d) return true;
  else return false;
};
const sqrObj1 = new Square(12, 12, 12, 12);
const sqrObj2 = new Square(12, 12, 12, 13);

console.log(sqrObj1.isSqure());
console.log(sqrObj2.isSqure());
