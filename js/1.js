///оставить заявку

let user = [];

function addUser () {
    let name = document.getElementById('name') ;
    let phone = document.getElementById('phone');

    let users = {
        name:name.value,
        phone:phone.value
    };
  
   name.value = '';
   phone.value = '';
    user.push(users)
    console.log(user);
   

}

document.getElementById('btn').addEventListener('click',addUser);