function login(username, password) {
    const users = JSON.parse(localStorage.getItem('users') || []);
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return { success: true, message: 'Login successful' };
    } else {
        return { success: false, message: 'Invalid credentials' };
    }
}