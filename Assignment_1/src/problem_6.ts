{
    //Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    const updateProfile = (profile: Profile, update: Partial<Profile>): Profile => {
        return {
            ...profile,
            ...update
        }
    }
    
    const myProfile: Profile = {
        name: "Hasan",
        age: 30,
        email: "hasan@example.com"
    };

    updateProfile(myProfile, { age: 26 });
    // console.log(updateProfile(myProfile, { age: 26 }));
}