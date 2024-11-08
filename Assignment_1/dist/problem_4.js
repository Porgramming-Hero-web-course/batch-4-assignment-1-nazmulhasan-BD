"use strict";
{
    const calculateShapeArea = (shape) => {
        // using type guard
        if (shape.shape === "circle") {
            const roundedString = (Math.PI * shape.radius * shape.radius).toFixed(2);
            const result = parseFloat(roundedString);
            return result;
        }
        else if (shape.shape === "rectangle") {
            return (shape.height * shape.width);
        }
    };
    const circleShapeArea = calculateShapeArea({
        shape: "circle",
        radius: 5
    });
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    ;
    // console.log(circleShapeArea);
    // console.log(rectangleArea);
}
