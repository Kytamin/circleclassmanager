class Circle{
    radius:number
    color:string
    constructor(radius:number,color:string) {
        this.radius=radius
        this.color=color
    }
}
let circleList: Circle[] = []
circleList.push(new Circle(5,"red"))
circleList.push(new Circle(10,"blue"))
circleList.push(new Circle(15,"green"))
function displayCircle(circle:Circle){
    console.log(`the circle has radius ${circle.radius}, color ${circle.color}`)
}

circleList.forEach(displayCircle)



