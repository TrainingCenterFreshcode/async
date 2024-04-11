// const product = {
//     title: 'test product',
//     price: 13.5,
//     description: 'lorem ipsum set',
//     image: 'https://i.pravatar.cc',
//     category: 'electronic'
// }

// fetch('https://fakestoreapi.com/products', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(product)
// })
// .then(response => response.json())
// .then(data => console.log(data));


// ПРИКЛАД GET ЗАПИТУ
// fetch('https://fakestoreapi.com/products')
// .then(response => response.json())
// .then(data => console.log(data));

async function getProducts() {
    try {
        const promiseResult = await fetch('https://TESTfakestoreapi.com/products');
        const data = await promiseResult.json();
        console.log(data);
    } catch (error) {
        // Тут може бути якась обробка помилки
        console.log(error);
    }
}

getProducts();


/*

1. Спробуйте зробити POST запит
https://fakestoreapi.com/products
Ви маєте отримати відповідь 200
В якості body передайте ось такий об'єкт:
const product = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}

2. Спробуйте зробити GET запит, але використовуючи асинхронну функцію, синтаксис async..await

*/