function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

//1.CommonJS module
module.exports = {
    add,
    sub,
    mul,
    div
}

//2.ES6 Module
// export {div}

// exports.add1 = (a,b) => a+b;
// exports.sub1 = (a,b) => a-b;
