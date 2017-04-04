const RECIPES = [
    {
        id: 1,
        name: 'Lemon Chicken',
        cookingTimeInMins: 10,
        ingredients: [
            'chicken',
            'lemon',
            'thyme'
        ]
    },
    {
        id: 2,
        name: 'Beef Stroganof',
        cookingTimeInMins: 15,
        ingredients: [
            'beef',
            'mustard',
            'mushrooms'
        ]
    },    {
        id: 3,
        name: 'Chicken Skewers',
        cookingTimeInMins: 25,
        ingredients: [
            'chicken',
            'peppers',
            'potatoes',
            'olive oil'
        ]
    },
    {
        id: 4,
        name: 'Steak Frites',
        cookingTimeInMins: 15,
        ingredients: [
            'rib eye steak',
            'mustard',
            'chunky chips',
            'pepper',
            'salt'
        ]
    },
    {
        id: 5,
        name: 'Chicken teriyaki with broccoli salad',
        cookingTimeInMins: 35,
        ingredients: [
            'chicken',
            'broccoli',
            'soy sauce'
        ]
    },
    {
        id: 6,
        name: 'Pizza',
        cookingTimeInMins: 15,
        ingredients: [
            'dough',
            'tomato sauce',
            'mushrooms'
        ]
    },
    {
        id: 7,
        name: 'Lamb kebab',
        cookingTimeInMins: 10,
        ingredients: [
            'lamb',
            'lemon',
            'thyme'
        ]
    },
    {
        id: 8,
        name: 'Spinach, lamb and parmesan salad',
        cookingTimeInMins: 15,
        ingredients: [
            'spinach',
            'lamb',
            'parmesan',
            'salad'
        ]
    },
        {
        id: 9,
        name: 'Almond Cake',
        cookingTimeInMins: 45,
        ingredients: [
            'almonds',
            'cake'
        ]
    },
    {
        id: 10,
        name: 'Honeycomb',
        cookingTimeInMins: 5,
        ingredients: [
            'honey',
            'comb',
        ]
    },
    {
        id: 11,
        name: 'Chocolate',
        cookingTimeInMins: 0,
        ingredients: [
            'chocolate'
        ]
    },
    {
        id: 12,
        name: 'Steak again',
        cookingTimeInMins: 15,
        ingredients: [
            'steak',
            'mustard',
            'chips'
        ]
    }
];

const STARS = [{
    userId: 1,
    starIds: [ 1, 5, 7 ]
}];

const USERS = [{
    id: 1,
    username: 'Joe'
}];

module.exports = { RECIPES, STARS, USERS };
