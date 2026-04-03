let salary = [10000, 20000, 30000, 40000]
function tenPercent(salary) {
    return salary * 0.1;
}






Array.prototype.CalculateTax = function (cb) {
    let res = [];
    for (let i =0; i< this.length; i++ ){
        res.push(cb(this[i]));
    }
    return res;
}