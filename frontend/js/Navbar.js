function navigateProfile() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.userType == 'supplier') {
        window.location.href = 'supp_profile.html';
    }
    else {
        window.location.href = 'rest_profile.html';
    }
}

function logout(){
    localStorage.clear();
    window.location.href = 'login.html';
}