const baseUrl = `http://localhost:8000`

async function login() {
    localStorage.clear();
    const body = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

    console.log(body);

    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body) // Serialize the catalogue data to JSON
        });

        const data = await response.json();
        console.log(data);
        if (data.errorOccurred) {
            alert(data.message);
        }
        else {
            //navigate
            //add to localstorage
            localStorage.setItem('user', JSON.stringify(data.result));
            window.location.href = "index.html";

        }
    }

    catch {

    }
}