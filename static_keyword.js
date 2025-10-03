// static : keywords that defines properties or methods that belond in the same class 
//          instead of the object that's being created by the class (anything static belongs to the class)

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);   // it's accessed without creating an object!
console.log(MathUtil.getDiameter(5));       // 10
console.log(MathUtil.getCircumference(10)); // 62.8318
console.log(MathUtil.getArea(10));          // 314.159
