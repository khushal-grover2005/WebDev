class rectangle
{
    constructor(width, height,color)
    {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    paint()
    {
        console.log("painting the rectangle with color: " + this.color);
    }    
    getArea()
    {
        return this.width * this.height;
    }
    getPerimeter()
    {
        return 2 * (this.width + this.height);
    }
}
const rectangle1 = new rectangle(4, 5, 'red');
console.log(rectangle1.getArea());
console.log(rectangle1.getPerimeter());
rectangle1.paint();