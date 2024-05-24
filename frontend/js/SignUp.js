const { base } = require("../../Backend/src/Models/Supplier");

const baseUrl = `http://localhost:8000`

async function signUp() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let phone = document.getElementById('phone').value;
    let userType = document.getElementById('type').value;
    let businessLicense = document.getElementById('businessLicense').value;

    if (userType == '1') {
        try {
            let bankAccount = document.getElementById('bankAccount').value;

            let response = await fetch(`${baseUrl}/supp/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    name:
                    {
                        fName: fname,
                        lName: lname

                    },
                    phone: phone,
                    address: address,
                    bankAccount: bankAccount,
                    businessLicense: businessLicense,
                    userType: "supplier"
                })
            });

            let result = await response.json();

            if (!result.error) {
                localStorage.setItem('user',JSON.stringify(result.result));
                window.location.href = 'index.html';
                return;
            } else {
                alert(result.message);
            }
        }

        catch (err) {
            console.log(err);
        }
    }

    else {
        try {
            let card = document.getElementById('cardNumber').value;
            let address = document.getElementById('address').value;

            let response = await fetch(`${baseUrl}/res/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    name:
                    {
                        fName: fname,
                        lName: lname

                    },
                    phone: phone,
                    address: address,
                    userType: userType,
                    paymentCardNumber: card,
                    businessLicense: businessLicense
                })
            });

            let result = await response.json();

            if (!result.error) {
                localStorage.setItem('user',JSON.stringify(result.result));
                window.location.href = 'index.html';
                return;
            } else {
                alert(result.message);
            }
        }

        catch (err) {
            console.log(err);
        }
    }
}