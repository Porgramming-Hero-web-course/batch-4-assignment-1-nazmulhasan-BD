"use strict";
{
    const updateProfile = (profile, update) => {
        return Object.assign(Object.assign({}, profile), update);
    };
    const myProfile = {
        name: "Hasan",
        age: 30,
        email: "hasan@example.com"
    };
    updateProfile(myProfile, { age: 26 });
    // console.log(updateProfile(myProfile, { age: 26 }));
}
