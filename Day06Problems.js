/*Question-1
The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

  ->title, which is a String representing the title of the movie
  ->studio, which is a String representing the studio that made the movie
  ->rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
*/
class Movie {

    constructor(title, studio, rating = "PG") {//default value of ratin should be PG as per the requrements in the question b
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }


    getPG(...arr) {//here we don't know wheather there is known number of inputs,so i am using spread operator
        var res = [];
        for (var i = 0; i < arr.length; i++) {
            var x = arr[i];
            var l = x.rating;
            res.push(l);
        }
        return res;
    }

}
console.log("--Movie--Class--");
var m1 = new Movie("Casino Royale", "Eon Productions", "PG13");
var m2 = new Movie("Casino", "Ion Productions", "PG11")
var m3 = new Movie("Royale", "xon Productions")
console.log(m1);
console.log(m1.getPG(m1, m2, m3));

/*Question-2
create a Circle class with methods getRadius(),getColor(),setRadius(r),setColor(c),getArea(),getCicumference(). 
*/
class Circle {
    constructor(...arr) {
        if (arr.length == 2) {
            this.radius = arr[0];
            this.color = arr[1];
        }
        else if (arr[0] % 1 === 0) {
            this.radius = arr[0];
        }
        else {
            this.color = arr[0];
        }
    }
    
    getRadius() {
        return `${this.radius}`;
    }
    setRadius(r) {
        this.radius = r;
        return `${this.radius}`;
    }
    getColor() {
        return `${this.color}`;
    }
    setColor(c) {
        this.color = c;
        return `${this.color}`;
    }
    getArea() {//here there is no parameters, because when we call this method we use some class instance, the value is taken from that class instance
        var pi = 22 / 7;
        var r = this.radius;
        var res = pi * r * r;
        return res;
    }
    getCircumference() {
        var pi = 22 / 7;
        var r = this.radius;
        var res = pi * r * 2;
        return res;
    }
}
console.log("\n--Circle--Class--");
var c1 = new Circle(5, "blue");
var c2 = new Circle(6);
var c3 = new Circle("orange");

console.log(c2.getRadius());
console.log(c1.getArea());
console.log(c3.getColor());
console.log(c2.getCircumference());

/*Question-3
Write a “person” class to hold all the details.
*/
class Person {
    constructor(name, mobile, address, height=0, weight=0) {
        this.name = name;
        this.mobile = mobile;
        this.address = address;
        this.height = height;
        this.weight = weight;
    }
}
console.log("\n--Person--Class--");
var p1 = new Person("smith", "0987654321", "xyz street,california", 185, 80);
console.log(p1);

/*Question-4:
write a class to calculate the Uber price.
*/
class Uber {
    constructor(name) {
        this.name = name;
    }
    getAmount(km) {
        var amnt = km * 10;//here i have entered some random price amount
        return `Hi ${this.name}! Your Amount is ${amnt}`;
    }
}
console.log("\n--Uber--Class--");
var cus1 = new Uber("Maverick");
console.log(cus1.getAmount(12));//here 12 represents kilometer