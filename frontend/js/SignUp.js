const baseUrl = `http://localhost:8000`

async function signUp() {
    let email = document.getElementById('regEmail').value;
    let password = document.getElementById('registerPassword').value;
    let password2 = document.getElementById('registerPassword2').value;
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let phone = document.getElementById('phone').value;
    const selectElement = document.getElementById('type');
    const userType = selectElement.value;

    // let businessLicense = document.getElementById('businessLicense').value;
    // console.log(selectedValue);

    if(!validatePassword(password,password2)){
        alert("Passwords must match with 8 characters atleast with 1 uppercase letter");
        return;
    }
    console.log(userType == 1);
    if (userType == 1) {
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
                    // businessLicense: businessLicense,
                    userType: "supplier"
                })
            });

            let result = await response.json();

            if (!result.error) {
                localStorage.setItem('user', JSON.stringify(result.result));
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
                    userType: "customer",
                    paymentCardNumber: card,
                    // businessLicense: businessLicense
                })
            });

            let result = await response.json();

            if (!result.error) {
                localStorage.setItem('user', JSON.stringify(result.result));
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

function validatePassword(password, confirm) {
    // Check if password is at least 8 characters long
    if (password != confirm) {
        return false;
    }
    const lengthCheck = password.length >= 8;

    // Check if password contains at least one uppercase letter
    const uppercaseCheck = /[A-Z]/.test(password);

    // Combine both checks
    if (lengthCheck && uppercaseCheck) {
        return true;
    } else {
        return false;
    }
}