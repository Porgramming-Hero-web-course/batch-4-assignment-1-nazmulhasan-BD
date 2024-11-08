{
    //Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    type Circle = {
        shape: "circle";
        radius: number;
    }
    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    }

    type ShapeType = Circle | Rectangle;
    type ResultType = number | undefined;

    const calculateShapeArea = (shape: ShapeType): ResultType => {
        // using type guard
        if (shape.shape === "circle") {
            const roundedString =(Math.PI * shape.radius * shape.radius).toFixed(2)
            const result = parseFloat(roundedString);
            return result;
        } else if (shape.shape === "rectangle") {
            return (shape.height * shape.width)
        }
    }

    const circleShapeArea: ResultType = calculateShapeArea({
        shape: "circle", 
        radius: 5
    });

    const rectangleArea: ResultType = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });;
    // console.log(circleShapeArea);
    // console.log(rectangleArea);
}