const baseUrl = `http://localhost:8000`
let res = {};

async function getSupp() {
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    try {

        const response = await fetch(`${baseUrl}/supp/getById/${userId}`);
        const data = await response.json();
        res = data.result;
        document.getElementById('fName').value = res.name.fName;
        document.getElementById('lName').value = res.name.lName;
        document.getElementById('email').value = res.email;
        document.getElementById('password').value = res.password;
        document.getElementById('bank').value = res.bankAccount;
        document.getElementById('phone').value = res.phone;
    }

    catch {
        console.log("error");
    }
}

window.onload = async () => {
    await getSupp();
}



async function updateSupp() {
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    const body = {
        name: {
            fName: document.getElementById('fName').value,
            lName: document.getElementById('lName').value
        },
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        paymentCardNumber: document.getElementById('bank').value,
        phone: document.getElementById('phone').value
    }
    try {
        const response = await fetch(`${baseUrl}/supp/update/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();
        console.log(data);
        if(!data.error){
            localStorage.setItem('user',JSON.stringify(data.result));
            window.location.reload();
        }
    }

    catch {
        console.log("error");
    }








}