// Hàm replace
function replace(array, from, to, elements) {
    array.splice(from, to - from, ...elements);

}
let testArray = [1, 2, 100, 100, 6]
replace(testArray, 2, 4, [3, 4, 5])
console.log(testArray)

// Hàm copyReplace
function copyReplace(array, from, to, elements) {

    return [...array.slice(0, from), ...elements, ...array.slice(to)] // nối mảng bằng spread syntax
}
let testArray2 = [1, 2, 100, 100, 6]
let copyArry = copyReplace(testArray2, 2, 4, [3, 4, 5]);
console.log(testArray2);
console.log(copyArry);

// Hàm recordOrders
const customerOrder = []; // khao báo kiểu mảng
function recordOrders(time, ...drinks) {
    customerOrder.push({time, birds: drinks}) // rest parameter
}

recordOrders(new Date, "coffee", "yaourt", "pizza")
console.log(customerOrder)
