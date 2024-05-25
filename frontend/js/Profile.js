const baseUrl = `http://localhost:8000`
let res = {};

async function getRestInfo() {
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    try {

        const response = await fetch(`${baseUrl}/res/getById/${userId}`);
        const data = await response.json();
        res = data.result;
        document.getElementById('fName').value = res.name.fName;
        document.getElementById('lName').value = res.name.lName;
        document.getElementById('email').value = res.email;
        document.getElementById('password').value = res.password;
        document.getElementById('address').value = res.address;
        document.getElementById('card').value = res.paymentCardNumber;
        document.getElementById('phone').value = res.phone;
    }

    catch {
        console.log("error");
    }
}

window.onload = async () => {
    await getRestInfo();
}



async function updateRestInfo() {
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    const body = {
        name: {
            fName: document.getElementById('fName').value,
            lName: document.getElementById('lName').value
        },
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        address: document.getElementById('address').value,
        paymentCardNumber: document.getElementById('card').value,
        phone: document.getElementById('phone').value
    }
    try {
        const response = await fetch(`${baseUrl}/res/update/${userId}`, {
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