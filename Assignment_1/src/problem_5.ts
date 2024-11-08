{
    //Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

    type User = Record<string, any>;

    function getProperty<X, Y extends keyof X>(obj: X, key: Y): X[Y] {
        return obj[key];
    }
        
    const person: User = {
        name: "Nazmul Hasan",
        age: 30,
        address: "Netrokona",
        isMarried: true,
    };

    getProperty(person, "name");
    // console.log(getProperty(person, "name"));
}