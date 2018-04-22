function Phone(brand, price, color, screen) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.screen = screen;
}
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " and it has " + this.screen + " screen.");
}
var iPhone6S = new Phone("Apple", 2250, "silver", "4.7''");
var samsungS6 = new Phone("Samsung Galaxy S6", 1000, "golden", "5''");
var onePlusOne = new Phone("One Plus One", 600, "black", "5.5''");

Phone.prototype.applyDiscount = function(discount) {
    this.price = this.price -= discount;
}

iPhone6S.printInfo();
iPhone6S.applyDiscount(100);
iPhone6S.printInfo();

samsungS6.printInfo();
samsungS6.applyDiscount(100);
samsungS6.printInfo();

onePlusOne.printInfo();
onePlusOne.applyDiscount(100);
onePlusOne.printInfo();