//get all users http://localhost:8073/users/getallusers
let users = [];
fetch("https://codvancedbackend-production.up.railway.app/users/getallusers")
  .then((res) => res.json())
  .then((data) => {
    users = data;
    console.log(users);
  })
  .catch((error) => console.log(error));

//**********************************************************

//get user
// let id = 32;
// let targetuser = {};
// fetch("https://codvancedbackend-production.up.railway.app/users/getuser/"+id )
// .then(res =>res.json())
// .then(data=>{
//     targetuser = data
//     console.log(targetuser);
// }).catch(error => console.log(error))

//**********************************************************

//delete user
// let id = 31;
// fetch("https://codvancedbackend-production.up.railway.app/users/deleteuser/"+id,{
//     method:"DELETE"
// })
// .then(res=>res.json()).then(data=>console.log(data))
// .catch(error => console.log(error))

//**********************************************************

//update user
// let id = 31
// let user = {
//     email: "y@gmail.com",
//     password: "00099s",
//     gender: "male",
//     country: "egypt",
//     track_res: null,
//     test_id: null,
//     lastName: "adham",
//     firstName: "t"
// }
// fetch("https://codvancedbackend-production.up.railway.app/users/updateuser/"+id,{
//     method:'PUT',
//     headers:{
//         'Content-Type': 'application/json'
//     },
//     body:JSON.stringify(user)
// }).then(res=>res.json()).then(data=>console.log(data))
// .catch(error => console.log(error))

//**********************************************************

//add user
// let user = {
//     email: "aya65@gmail.com",
//         password: "8e9f",
//         gender: "male",
//         country: "egypt",
//         track_res: null,
//         test_id: null,
//         lastName: "most",
//         firstName: "aya"
// }
// fetch("https://codvancedbackend-production.up.railway.app/users/adduser",{
//     method:'POST',
//     headers:{
//         'Content-Type': 'application/json'
//     },body:JSON.stringify(user)
// }).then(res=>res.json()).then(data=>console.log(data))
// .catch(error => console.log(error))
