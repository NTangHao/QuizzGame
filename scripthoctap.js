
let rightAnswer, rightNumber = 0, falseNumber = 0;


document.addEventListener('DOMcontentload', function () {
    AddQuestion();
    eventListener();
});

eventListener = () => {

}

AddQuestion = () => {
    const url = 'https://opentdb.com/api.php?amount=20&category=31&difficulty=medium';   //api url
    fetch()
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let a = [
    {
        id: 1,
        name: "hao"
    },
    {
        id: 2,
        name: "hoan"
    },
    {
        id: 300,
        name: "tang hao"
    }


];
//map method(array): tạo ra một mảng mới lặp qua từng phần tử với kết quả trả về chính là callback method
/*let mang =a.map((value) => {
   return `<h2>${value.name}</h2>`;
})
console.log(mang.join(""))*/

//find
/*let timkiem = a.find(value => { // lặp qua tất cả các phần tử .trả về phần tử đầu tiên khớp với tham số callback
    return value.name==="hao";
        });
console.log(timkiem);*/


/*
for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object(Arrays, Strings, Maps, NodeLists)
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
*/

// for in: thường sử dụng để lấy ra key của nhưng đối tượng.(object important)

/*for (const aKey in a) {
    console.log(a[aKey].name);
}*/

// for of chỉ áp dụng với các itterable Object(nên dùng for of)
/*const cars = ["BMW", "Volvo", "Mini"];
for (const car of cars) {
    console.log(car);
}*/


// object Maps
/*Map có kiểu giữ là key và value. Đặc biệt KEY có thể là bất cứ kiểu dữ liệu nào
* Map ghi nhớ thứ tự truyền vào của key
* Map có thuộc tính đại diện cho kích thước của map
*
* How to Create a Map
You can create a JavaScript Map by:

Passing an Array to new Map()
Create a Map and use Map.set()
* */

/*
// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
*/

// Create a Map
/*
const fruits2 = new Map();

// Set Map Values
fruits2.set("apples", 500);
fruits2.set("bananas", 300);
fruits2.set("oranges", 200);
*/



/*
//filter tạo ra 1 mảng mới
let filter = a.filter(value => value.id >2)
console.log(filter);

*/

/*
//Foreach
var foreachlap = a.forEach(function (value,index,array) {
console.log(value,index,array)
})
console.log(foreachlap)

*/
//PROMISE CHAIN: VALUE THEN TRC SỬ DỤNG DC CHO DOI SỐ CALLBACK CỦA THEN SAU
//PROMISE.ALL([]): THỨC HIỆN CÙNG LÚC 3 THẰNG TRC KHI TIẾP TỤC CHẠY
// ASYNC/AWAIT : TRẢ VỀ PROMISE CỦA 1 FUNCTION/ BẮT 1 FUNCTION CHỜ PROMISE
//AWAIT : CHỈ SỬ DỤNG DC BÊN TRONG ASYNC FUNCTION

// FETCH API
/*
let getapi =async (file) => {

    let x = await fetch(file);
    let y = x.json();
    console.log(y)
}

getapi("https://jsonplaceholder.typicode.com/todos/1");
*/




