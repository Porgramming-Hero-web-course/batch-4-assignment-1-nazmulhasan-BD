"use strict";
{
    function getProperty(obj, key) {
        return obj[key];
    }
    const person = {
        name: "Nazmul Hasan",
        age: 30,
        address: "Netrokona",
        isMarried: true,
    };
    getProperty(person, "name");
    // console.log(getProperty(person, "name"));
}
