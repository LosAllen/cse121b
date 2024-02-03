let myProfile = {
    name: "Lincoln Allen",
    photo: "images/test.jpg",
    favoriteFoods: [
        'Pizza',
        'Hamburger',
        'Hot dogs'
    ],
    hobbies: [
        'Building electronics',
        'Playing Video Games'
    ],
    placesLived: []
};

myProfile.placesLived.push(
    {
        place: [
            'Gilbert, AZ',
            'Royal City, WA',
            'Kansas City, Mo'
        ],
        length:[
            '11 Years',
            '6 years',
            '2 years'
        ]
    }
);

document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.getElementById("favorite-foods").appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.getElementById("hobbies").appendChild(li);
});

myProfile.placesLived.forEach(place => {
    place.place.forEach((p, index) => {
        let dt = document.createElement("dt");
        dt.textContent = p;
        let dd = document.createElement("dd");
        dd.textContent = place.length[index];
        document.getElementById("places-lived").appendChild(dt);
        document.getElementById("places-lived").appendChild(dd);
    });
});