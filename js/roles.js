function renderUIByRole() {
    document.getElementById('adminPanel').style.display = 'block';
    document.getElementById('tecnicoPanel').style.display = 'none';

    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!user) {
        return;
    }

    const role = user.role;
    if (role=== 'admin') {
        document.getElementById('adminPanel').style.display = 'block';
    }

    else if (role=== 'tecnico') {
        document.getElementById('tecnicoPanel').style.display = 'block';
    }
}

renderUIByRole();