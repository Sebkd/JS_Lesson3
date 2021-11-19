'use strict'
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"]
    },
    {
        id: 8,
        price: 78,
    },
];
/*
1. Получить все товары, у которых есть фотографии, можете использовать метод filter
*/

let userWithPhoto = products.filter(function (product) {
    try {
        return product.photos.length != 0;
    }
    catch {
        return;
    }
});
console.log(userWithPhoto);

/*
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
*/

products.sort(function (product1, product2) {
    if (product1.price < product2.price) return -1;
    if (product1.price > product2.price) return 1;
    if (product1.price == product2.price) return 0;
});
console.log(products)
