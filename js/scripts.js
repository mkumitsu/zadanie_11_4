function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
  this.camera = camera;
  this.screen = screen;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
var iPhone6S = new Phone("Apple", 2250, "silver");
var SamsungS6 = new Phone("Samsung Galaxy S6", 1000, "golden");
var OnePlusOne = new Phone("One Plus One", 600, "black");

iPhone6S.printInfo();
SamsungS6.printInfo();
OnePlusOne.printInfo();