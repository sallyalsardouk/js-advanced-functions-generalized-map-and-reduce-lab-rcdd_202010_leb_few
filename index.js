// Add your functions here
function map(src, fnct){
    let arr = []

    for (let i = 0; i < src.length; i++ ){
        let elem = src[i]
        arr.push(fnct(elem))
    }
    return arr;
}

function reduce(src, fnct, start){
    let arr = (!!start) ? start : src[0];
    let i = (!!start) ? 0 : 1 

    for (; i < src.length; i++){
        arr = fnct(src[i], arr)
    }
    return arr;
}