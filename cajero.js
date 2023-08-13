import usersDB from "./userDB.js";
//Create user selection dropdown
let select_user = document.getElementById("user_name");

for(let i = 0; i < usersDB.length; i++) {
    let user = usersDB[i].user;
    let el = document.createElement("option");
    el.textContent = user;
    el.value = user;
    select_user.appendChild(el);
}

//Get data selecte and typed by user

const login_form = document.getElementById('login_form');

let username= '';


login_form.addEventListener('submit', (event)=>{
    event.preventDefault()
    username = document.getElementById('user_name').value;
    let password = document.getElementById('form_password').value;
    //console.log(username, password);
    validate(username, password);
})

//Validate login information with DB
function validate(username, password){
    for(let index = 0; index < usersDB.length; index++){
        if(username === 'Seleccione su usuario'){
            error_Message('no_user')
        }
        else if(password === ''){
            error_Message('no_password')
        }
        else if(username == usersDB[index].user && password !== usersDB[index].pass){
            error_Message('wrong_password')
        }
        else if(username == usersDB[index].user && password == usersDB[index].pass){
            let welcome= document.getElementById('welcome_user');
            welcome.innerHTML= username;
            document.getElementById('login_frame').classList.add('hide');
            document.getElementById('welcome_user_frame').classList.remove('hide');
            document.getElementById('welcome_user_frame').classList.add('frame');
            document.cookie = `username=${username}`;
            setTimeout(()=> {
                document.getElementById('welcome_user_frame').classList.add('hidden_transition');
            },2500);
            setTimeout(()=> {
                window.open("/home.html","_self");
            }, 3000);
        }
    }
}


//Show feedback errors
function error_Message(tipo){

    let error_span = document.getElementById(`error_${tipo}`)
    error_span.classList.remove('hide')
    error_span.classList.add('show')
    setTimeout(()=>{
        error_span.classList.remove('show')
        error_span.classList.add('hide')
    }, 4000);
}





