// setTimeout (() => {
//     console.log ("hii")
// },5000) ;
// function sayHi(name , cb) {
//     setTimeout(() => {
//         console.log( 'hi ${name }');
//         cb()
//       } ,5000 

//     );
// }

// function howareYou () {
//     console.log("how are you")
// }
// sayHi("Akhil" ,howareYou);

function MakeSandwich (bread ,cb) {
    console.log ('bread is ready');
    cb();
}
function stuffing(cb) {
    console.log("stuffing is ready");
    cb();
}
function grill(cb) {
    console.log("grill is ready");
}
function serving (cb) {
    console.log("serving is done ready to eat")
    cb();
}

MakeSandwich("wheat " ,() =>{
    stuffing( () =>{
        grill(() =>{
            serving(() => {
                console.log("sndwich is done")
            });
        });
    });
});