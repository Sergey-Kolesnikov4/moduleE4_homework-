const obj = {
    first: 1,
    second: 'skillfactory'
};
const b = 'first'
const c = 'skillfactory'

function firstFunc(a, obj) {
    return a  in obj;
}

console.log(firstFunc(b, obj))
console.log(firstFunc(c, obj))