// function borring
let obj1 = {
    fname: "akhil",
    lname: "kumar",
    age: 22,

    print: function () {
        console.log(this.fname, this.lname, this.age);
    }
}
// obj1.print();

let obj2 = {
    fname: "sai",
    lname: "kumar",
    age: 22,
}

// obj2.print = obj1.print;
// obj2.print();
obj1.print.bind(obj2)();