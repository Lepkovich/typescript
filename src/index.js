function getJsonData(url) {
    return new Promise((resolve, reject) => {
        if (!url) { //если в функцию не передали url
            reject('запрос осуществить невозможно');
        }

        $.ajax({
            dataType: 'json',
            url: url, //подставим переданный в параметре функции адрес
            success: (result) => { //это callback функция
                resolve(result);
            },
            error: () => {
                reject('Ошибка запроса');
            }
        })
    })
}
async function start(){
    const json = await getJsonData('https://jsonplaceholder.typicode.com/todos/1');
    console.log(json);
    const json2 = await getJsonData('https://jsonplaceholder.typicode.com/todos/' + (json.id +1));
    console.log(json2);
    const json3 = await getJsonData('https://jsonplaceholder.typicode.com/todos/' + (json2.id +1));
    console.log(json3);
}

start();


// import * as Price from './price.js'
//
// function showPrice() {
//     // get price;
//     let [price, currencyCode] = Price.getPriceFromBackend('USD');
//     // show price;
//     console.log(price + ' ' + currencyCode);
// }
//
// showPrice();

// let result = fetch('https://jsonplaceholder.typicode.com/todos/1');
// result.then(response => {
//     const resp = response.json();
//     return resp;
// })
//     .then ((json) => {
//         console.log(json);
//     })
// console.log(result)

// fetch('https://jsonplaceholder.typicodes.com/todos/1')
//     .catch(error => console.log(error))
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//         return fetch('https://jsonplaceholder.typicode.com/todos/' + (json.id + 1));
//     })
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//         return fetch('https://jsonplaceholder.typicode.com/todos/' + (json.id + 1));
//     })
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//     })



//
// getSomeData(2) //вызвали функцию с промисом
//     .then(string => console.log(string)) // а тут обработали результат этого промиса
//     .catch(error => console.log(error)); // это обработчик ошибки