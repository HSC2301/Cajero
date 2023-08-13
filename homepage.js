import usersDB from "./userDB.js";

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
    }
    }
    return "";
}

let username=getCookie("username");
let index;
document.getElementById('active_user').innerHTML= username;

for (let i=0; i<usersDB.length;i++){
    if(username==usersDB[i].user) {
        index=i;
    }
}

document.getElementById('total_balance').innerHTML=usersDB[index].balance;

function add_balance (amount){
    if (!amount) {
        window.alert("Digite un numero valido!");
        return;
    }

    if (amount < 0) {
        window.alert("Digite un numero positivo!");
        return;
    }
    let newBalance = usersDB[index].balance + parseInt(amount);

    if (newBalance > 990) {
        window.alert("Balance no puede ser mayor a 990!");
        return;
    }
    
    usersDB[index].balance=newBalance;
}

function remove_balance (amount){
    if (!amount) {
        window.alert("Digite un numero valido!");
        return;
    }

    if (amount < 0) {
        window.alert("Digite un numero positivo!");
        return;
    }
    let newBalance = usersDB[index].balance - parseInt(amount);

    if (newBalance < 10) {
        window.alert("Balance no puede ser menor a 10!");
        return;
    }
    
    usersDB[index].balance=newBalance;
}

document.getElementById("remove_money").addEventListener('click', (event)=> {
    event.preventDefault();
    document.getElementById('quantity').classList.remove('hide');
    document.getElementById('confirm_amount').classList.remove('hide');
    document.getElementById("confirm_amount").addEventListener('click', (event)=> {
        event.preventDefault();
        let amount=document.getElementById('quantity').value;
        remove_balance(amount);
        console.log(usersDB[index].balance)
        document.getElementById('total_balance').innerHTML=usersDB[index].balance;
        setTimeout(()=> {
            document.getElementById('quantity').classList.add('hide');
            document.getElementById('confirm_amount').classList.add('hide');
        },1500);
        document.getElementById("confirm_amount").removeEventListener('click', null);
    }, {once: true});
})

document.getElementById("add_money").addEventListener('click', (event)=> {
    event.preventDefault();
    document.getElementById('quantity').classList.remove('hide');
    document.getElementById('confirm_amount').classList.remove('hide');
    document.getElementById("confirm_amount").addEventListener('click', (event)=> {
        event.preventDefault();
        let amount=document.getElementById('quantity').value;
        add_balance(amount);
        console.log(usersDB[index].balance)
        document.getElementById('total_balance').innerHTML=usersDB[index].balance;
        setTimeout(()=> {
            document.getElementById('quantity').classList.add('hide');
            document.getElementById('confirm_amount').classList.add('hide');
        },1500);
    }, {once: true});


})
//document.getElementById('active_user').innerHTML=username;