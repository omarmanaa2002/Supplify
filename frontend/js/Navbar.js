function navigateProfile() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.userType == 'supplier') {
        window.location.href = 'supp_profile.html';
    }
    else {
        window.location.href = 'rest_profile.html';
    }
}

function navigateSupply() {
    window.location.href = 'supply.html';

}

function logout() {
    localStorage.clear();
    window.location.href = 'login.html';
}

function handleUser(){
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.userType != 'supplier') {
        const nav = document.getElementById("supply");
        nav.style.display = "none";

        //set display to none
    }
}
window.onload = handleUser();
