"use strict";
{
    //Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.
    function validateKeys(obj, keys) {
        const newArray = Object.keys(obj);
        for (const key of keys) {
            if (!newArray.includes(key)) {
                return false;
            }
        }
        return true;
    }
    const person = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };
    validateKeys(person, ["name", "age"]);
    // console.log(validateKeys(person, ["name", "age"]));
}
