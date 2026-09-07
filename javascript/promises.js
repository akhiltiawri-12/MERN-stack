// const p1 = promise.resolve("SUCCESS")
// const p2 = promise.resolve("SUCCESS")
// const p3 = promise.reject("ERROR")

//promise.all([p1, p2, p3])

// promise.allSettled([p1, p2, p3])
//  .then ((data) => {
//     console.log(data);
//  });
//  .catch((ERR) =>{
//     console.log(ERR);
//  })

// ASNY and AWAT


async function fetchData() {
   try {
      const response = await fetch("https://api.github.com/users/iliakan");
      const data = await response.json();
      console.log(response);
   } catch (error) {
      console.log(error);
   }
}
fetchData();