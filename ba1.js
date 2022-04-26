lastIndexOf = (arr,elt)=>{
    for (let i = arr.length-1; i >=0 ; i--) {
        if (arr[i] === elt) return i
        return -1
    }
}
console.log(lastIndexOf([1, 2, 1, 2], 2))