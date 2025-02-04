function merging(...arr){
    return [].concat(...arr);
}
const res=merging([1, 2], [3, 4], [5, 6]);
console.log(res);