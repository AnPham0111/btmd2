const inventory = [

    {type: "machine", value: 5000},


    {type: "machine", value: 650},


    {type: "duck", value: 10},


    {type: "furniture", value: 1200},


    {type: "machine", value: 77}


];
let machineInventory = inventory.filter((obj) =>  obj.type === "machine" ); // filter ra những phần tử có type = "machine"
console.log(machineInventory);

let totalOfValue = machineInventory.map((obj) => obj.value ); // map ra 1 mảng chứa các value của các phần tử đã lọc
console.log(totalOfValue);

let sumOfValue = totalOfValue.reduce((prev, current) => prev + current); // reduce để tính tổng
console.log(sumOfValue);